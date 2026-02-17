type Project = {
  name: string;
  description: string;
  tech: string[];
  image?: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    name: "Woxsen Crypto Exchange",
    description:
      "WCE is an educational decentralized trading platform built on Ethereum, enabling department-based ERC-20 token trading within the university ecosystem. It demonstrates real-world DeFi concepts including tokenization, staking mechanisms, and smart contract–driven transactions with seamless Web3 integration.",
    tech: ["Solidity", "Hyperledger Besu", "Next.js", "TypeScript", "Ethers.js", "MongoDB"],
    image: "/Static/wce.png",
    links: [{ label: "Live", href: "https://wce.gitbook.io/wce-docs" }],
  },
  
   {
    name: "AssetenceRails",
    description:
       "Enterprise blockchain payment infrastructure platform featuring real-time webhook delivery with HMAC verification, multi-wallet integration via Reown AppKit, AI-powered financial assistant, MoonPay fiat on-ramp, and multi-signature vault (SecVault) for secure crypto transactions on Polygon network.",
    tech: ["React.js", "Express.js", "TypeScript", "Solidity", "Ethers.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS", "Gemini AI"],
    image: "/Static/assetencerails.png",
    links: [{ label: "Live", href: "https://assetencerails.com/" }],
  },

  {
  name: "Secure Vault",
  description:
    "Secure Vault is a decentralized password manager built on Ethereum that enables users to securely store and manage encrypted credentials using blockchain and IPFS. It ensures privacy, user-controlled access, and tamper-proof storage through smart contract–based authentication and Web3 integration.",
  tech: ["Solidity", "Next.js", "TypeScript", "Ethers.js", "Lit Protocol", "IPFS (Pinata)"],
  image: "/Static/securevault.png",
  links: [{ label: "Live", href: "https://secure-vault-jxxk.vercel.app/" }],
},


  {
    name: "MediWox",
    description:
      "MediWox is a blockchain-based medical records management system that enables secure, tamper-proof storage and controlled sharing of patient health data. It leverages smart contracts and IPFS to ensure data integrity, privacy, and seamless access for authorized healthcare providers.",
    tech: ["Solidity", "React.js", "Node.js", "Ethers.js", "IPFS (Pinata)", "MongoDB"],
    image: "/Static/mediwox.png",
    links: [{ label: "Demo", href: "https://projects.aircwou.in/vid/MediWox.mp4" }],
  },
 
];

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="cards">
        {projects.map((p) => (
          <article className="card" key={p.name}>
            {p.image && (
              <div
                className={`project-image-container ${
                  p.image.includes("PoxLogo") ? "pollux-bg" : ""
                }`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="project-image"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error(`Failed to load image: ${p.image}`, e);
                    target.style.display = "none";
                  }}
                />
              </div>
            )}
            <div className="card-content">
              <h2>
                {(() => {
                  const live =
                    p.links?.find((l) => l.label.toLowerCase() === "live") ||
                    p.links?.[0];
                  return live ? (
                    <a
                      href={live.href}
                      target="_blank"
                      rel="noreferrer"
                      className="project-title-link"
                    >
                      {p.name}
                      <svg
                        className="external-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M14 5h5v5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 14l9-9"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    p.name
                  );
                })()}
              </h2>
              <p>{p.description}</p>
              <div className="tech">
                {p.tech.map((t) => (
                  <span className="badge" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
