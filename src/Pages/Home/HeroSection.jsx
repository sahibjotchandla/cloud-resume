import { Link } from "react-scroll";

export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey there, I'm Sahibjot!</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Computer</span>{" "}
              <br />
              Engineer
            </h1>
            <p className="hero--section-description">
              I'm a 4th year student with a keen interest in exploring cloud and data-driven concepts in engineering.
            </p>
          </div>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-primary"
            >
            Get in touch
          </Link>
        </div>
        <div className="hero--section--img">
          <img src="./img/DSC_0642.png" alt="Hero Section"></img>
        </div>
      </section>
    );
  }