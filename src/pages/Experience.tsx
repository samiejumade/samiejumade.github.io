type Role = {
  company: string;
  title: string;
  note?: string;
  period: string;
  location: string;
  description?: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    company: "AI Research Centre, Woxsen",
    title: "Senior Blockchain Engineer",
    note: "Blockchain & Backend Engineer",
    period: "July 2024 — Present",
    location: "Hyderabad",
    description:
      "Leading development of enterprise-grade blockchain infrastructure, DeFi protocols, and full-stack Web3 applications across education, healthcare, and payment systems.",
    highlights: [
      "Architected and deployed a private EVM-compatible DEX on Hyperledger Besu (QBFT), implementing custom swap, liquidity, and fee logic inspired by Uniswap V3.",
    "Built AssetenceRails, a commerce-first blockchain payment infrastructure with MetaMask integration, multi-chain (Ethereum/Polygon) support, and fiat on/off-ramp via MoonPay.",
    "Developed SecureVault using Lit Protocol + IPFS with smart contract anchoring on BSC Testnet and The Graph indexing for decentralized credential management.",
    "Designed MediWox, a government prototype for secure medical record storage using Ethereum + IPFS with role-based access control.",
    "Configured and maintained multi-node Hyperledger Besu networks on AWS with fast block finality and enterprise-grade reliability.",
    "Integrated AI-powered Smart Wallet Assistant using Google Gemini for natural language blockchain portfolio interactions.",
    ],
  },
  {
    company: "Bitzees Technologies Pvt Ltd",
    title: "Blockchain Developer",
    period: "Sep 2022 — May 2024",
    location: "Pune, Maharashtra, India",
    description:
      "Worked on multi-chain infrastructure, exchange systems, wallet security, and smart contract development across public and custom Layer-1 networks.",
    highlights: [
       "Set up and maintained full nodes for Bitcoin, Litecoin, Bitcoin Cash, Dogecoin, Cardano, Tron, and a custom Layer-1 blockchain.",
      "Contributed to wallet and exchange backend systems improving blockchain operations and platform security.",
      "Designed and deployed secure smart contracts supporting trading platform functionality.",
      "Developed a MultiSig wallet supporting 9 blockchains to enhance asset security.",
      "Optimized transaction handling using Web3.js and Ethers.js, improving processing efficiency by 20%.",
    ],
  },
  {
    company: "SoluLab",
    title: "Blockchain Developer",
    note: "Blockchain & Backend Engineer",
    period: "Feb 2022 — Aug 2022",
    location: "Ahmedabad, Gujarat, India",
    description:
      "Worked on Cardano blockchain infrastructure, UTxO-based architecture, and decentralized application development.",
    highlights: [
      "Set up and operated a full Cardano node using CLI tools for on-chain transaction execution.",
      "Worked with Plutus smart contracts and Cardano wallet integrations.",
      "Built strong understanding of UTxO architecture and transaction validation mechanisms.",
      "Collaborated with cross-functional teams to build secure and scalable dApps.",
    ],
  },
  {
    company: "ISKCON Chowpatty Pvt Ltd",
    title: "Software Engineer",
    note: "Blockchain Developer",
    period: "Jun 2019 — Mar 2020",
    location: "Mumbai, Maharashtra, India",
    description:
      "Led backend system development and maintenance for community management software, improving reliability and operational efficiency.",
    highlights: [
       "Spearheaded development and maintenance of ICM (ISKCON Community Manager) platform.",
      "Reduced system downtime by 25% through proactive monitoring and performance optimization.",
      "Resolved 100+ product support and technical issues monthly.",
      "Improved backend reliability and user experience through continuous enhancements.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-header">
        <div className="experience-label">EXPERIENCE</div>
        <h1 className="experience-title">Professional Journey</h1>
        <p className="experience-subtitle">
          Building innovative blockchain solutions across leading Web3 companies
        </p>
      </div>
      <div className="experience-timeline">
        {roles.map((r) => (
          <div className="experience-entry" key={r.company + r.title}>
            <div className="timeline-marker"></div>
            <div className="experience-entry-content">
              <div className="experience-entry-left">
                <h2 className="experience-job-title">{r.title}</h2>
                <div className="experience-company">{r.company}</div>
                <div className="experience-meta">
                  <div className="experience-meta-item">
                    <svg
                      className="experience-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{r.period}</span>
                  </div>
                  <div className="experience-meta-item">
                    <svg
                      className="experience-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{r.location}</span>
                  </div>
                </div>
              </div>
              <div className="experience-entry-right">
                {r.description && (
                  <p className="experience-description">{r.description}</p>
                )}
                <h3 className="experience-achievements-title">
                  Key Achievements:
                </h3>
                <ul className="experience-achievements">
                  {r.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
