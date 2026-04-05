import About from "./About";
import Stats from "./Stats";
import Projects from "./Projects";
import Blog from "./Blog";
import Experience from "./Experience";
import Contact from "./Contact";
import { useYearsOfExperience } from "../utils/experience";
import ResumeButtons from "../components/ResumeButtons";

export default function Home() {
  const yearsOfExperience = useYearsOfExperience();
  
  return (
    <div className="home">
      <section className="hero">
        <span className="hero-img-wrap">
          <img
            className="hero-img"
            src="/Static/sam2.jpg"
            alt="Samir Jumade"
          />
          <span
            className="hero-badge"
            aria-hidden="true"
            title="Blockchain Dev"
          >
            ⛓️
          </span>
        </span>
        <h1 className="hero-name">Samir Jumade</h1>
        <p className="hero-title">Blockchain Developer · {yearsOfExperience} years</p>
        <ResumeButtons layout="row" />
      </section>
      <section id="about">
        <About />
      </section>
      <Stats />
      <section id="projects">
        <Projects />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
