import { useYearsOfExperience } from "../utils/experience";

export default function About() {
  const yearsOfExperience = useYearsOfExperience();

  return (
    <section className="about-section">
      <h1>About Me</h1>
      <p>
         I'm a <strong>Senior Blockchain & Backend Engineer</strong> with {yearsOfExperience} years of experience building enterprise-grade decentralized systems and scalable Web3 infrastructure. I specialize in <strong>Solidity, DeFi protocol architecture, and EVM-compatible networks</strong>, with hands-on expertise across Ethereum, Polygon, BSC, Hyperledger Besu (QBFT), and multi-chain node operations. My work focuses on secure smart contracts, payment rails, DEX architecture, and production-ready full-stack dApps designed for real-world adoption.
      </p>

      {/* <p>
        I specialize in <strong>Solidity smart contract development</strong>,
        DeFi protocol architecture (DEX, multisig wallets, payment rails), and
        high-performance
        <strong>Node.js microservices</strong>. I have hands-on experience
        deploying and maintaining full blockchain nodes, designing token
        economics, integrating fiat on/off-ramps, and building secure full-stack
        dApps.
      </p>

      <p>
        My focus is on{" "}
        <strong>security, scalability, and real-world adoption</strong> — from
        private blockchain infrastructure and decentralized exchanges to
        AI-powered smart wallet systems. I enjoy solving complex architectural
        challenges and turning Web3 concepts into robust, production-ready
        platforms.
      </p> */}
      <ul>
        <li>
          <strong>Smart Contracts:</strong> Solidity, Hardhat, OpenZeppelin
        </li>
        <li>
          <strong>Backend & Services:</strong> Node.js, Express,
          MongoDB/PostgreSQL, microservices
        </li>
        <li>
          <strong>Frontend:</strong> React, Next.js, wagmi/viem, ethers.js
        </li>
        <li>
          <strong>Infrastructure & Cloud:</strong> IPFS/Pinata, The
          Graph/Subgraphs, Docker, AWS, EC2
        </li>
      </ul>
    </section>
  );
}
