import { RESUME_LINKS } from "../utils/constants";

interface ResumeButtonsProps {
  /** Layout variant: 'row' for horizontal, 'column' for vertical */
  layout?: "row" | "column";
}

export default function ResumeButtons({ layout = "row" }: ResumeButtonsProps) {
  return (
    <div className={`resume-container resume-container--${layout}`}>
      <a
        id="resume-view-btn"
        href={RESUME_LINKS.VIEW}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn resume-btn--view"
        aria-label="View Resume in a new tab"
      >
        <svg
          className="resume-btn-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        View Resume
      </a>

      <a
        id="resume-download-btn"
        href={RESUME_LINKS.DOWNLOAD}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn resume-btn--download"
        aria-label="Download Resume"
        download
      >
        <svg
          className="resume-btn-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download Resume
      </a>
    </div>
  );
}
