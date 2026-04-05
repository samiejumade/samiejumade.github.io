interface BlogPost {
  id: string;
  title: string;
  pubDate: string;
  link: string;
  author: string;
  thumbnail: string;
  description: string;
  source: string;
  sourceIcon: string;
}

// Fully static blog list — no dynamic enrichment to avoid link overwriting.
const BLOG_POSTS: BlogPost[] = [
  {
    id: "swisscognitive-1",
    title: "The Relentless Tide of Technological Disruption: Are You Ready?",
    pubDate: "2025-02-25",
    link: "https://swisscognitive.ch/2025/02/25/the-relentless-tide-of-technological-disruption-are-you-ready/",
    author: "Samir Jumade",
    thumbnail: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=700",
    description:
      "The world is evolving at an unprecedented pace. From Kodak's collapse to the rise of AI and autonomous vehicles — many industries that once seemed invincible have vanished. The future belongs to those who adapt.",
    source: "SwissCognitive",
    sourceIcon: "🌐",
  },
  {
    id: "medium-besu",
    title: "How to Setup a Hyperledger Besu Node Using Docker",
    pubDate: "2025-01-03",
    link: "https://medium.com/@samir.woxsen/how-to-set-up-a-hyperledger-besu-qbft-node-using-docker-like-a-pro-9b6c53ed0e67",
    author: "Samir Jumade",
    thumbnail: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=700",
    description:
      "A step-by-step guide to setting up a private Hyperledger Besu QBFT network using Docker and docker-compose — streamlining your enterprise blockchain node deployment from zero to running validators.",
    source: "Medium",
    sourceIcon: "M",
  },
  {
    id: "medium-happiness",
    title: "Creating Happiness From Within: Self-Care & Spirituality",
    pubDate: "2025-01-01",
    link: "https://medium.com/@samir.woxsen/reflections-on-life-loss-and-true-happiness-17902c8c4e14",
    author: "Samir Jumade",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=700",
    description:
      "Life's greatest lesson — true happiness isn't found externally. Exploring the intersection of self-care, mindfulness, and spirituality through personal loss and introspection.",
    source: "Medium",
    sourceIcon: "M",
  },
  {
    id: "medium-elderly",
    title: "A Silent Funeral: Society's Neglect of Its Elders",
    pubDate: "2025-01-05",
    link: "https://medium.com/@samir.woxsen/he-lived-for-his-family-died-alone-a-heart-wrenching-reality-of-modern-times-89981f7eedaf",
    author: "Samir Jumade",
    thumbnail: "https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?auto=format&fit=crop&q=80&w=700",
    description:
      "An elderly man who gave everything for his family was cremated in complete solitude. A haunting reflection on modern society's growing indifference toward its elders and the fading virtue of gratitude.",
    source: "Medium",
    sourceIcon: "M",
  },
];

export default function Blog() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="blog-section">
      <div className="experience-header">
        <p className="experience-label">Insights & Thoughts</p>
        <h1 className="experience-title">Latest Blog Posts</h1>
        <p className="experience-subtitle">
          Sharing my journey and learnings in Blockchain, AI, and Tech.
        </p>
      </div>

      <div className="blog-grid">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="project-image-container">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="project-image"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=700";
                }}
              />
              <span className="blog-source-badge">
                {post.sourceIcon === "M" ? (
                  <svg height="14" viewBox="0 0 195 195" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 47L77 102L22 157H48L90 115L132 157H158L103 102L158 47H132L90 89L48 47H22Z"/>
                  </svg>
                ) : (
                  post.sourceIcon
                )}
                {post.source}
              </span>
            </div>
            <div className="card-content">
              <p className="blog-date">{formatDate(post.pubDate)}</p>
              <h2 className="blog-title">
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h2>
              <p className="blog-excerpt">{post.description}</p>
              <div className="blog-footer">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read Article
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-cta">
        <a
          href="https://medium.com/@samir.woxsen"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-cta-btn"
        >
          View All on Medium
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
