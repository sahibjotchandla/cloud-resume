export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/sahib_pic_1.png" alt="Self portrait" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About Me</p>
            <p className="hero--section-description">
            I'm a Computer Engineering student based in the GTA, studying at the University of Guelph. I’m fascinated by how technology can bring ideas to life, whether it’s designing efficient systems with FPGA/ASICs or creating insightful data visualizations that tell compelling stories. My interests span hardware design and data science, and I enjoy working on projects that connect these worlds. I’m always looking for ways to simplify and improve everyday processes, whether through automation, optimizing workflows, or designing hardware solutions. I’m especially intrigued by the potential of AI and its transformative role in shaping the future. Outside of engineering, I enjoy spending time with my family and my dog, watching sports (Go Leafs Go!), and playing video games. To me, technology is about more than just code and circuits. It’s about creating meaningful tools that make life easier and more enjoyable for everyone.            </p>
          </div>
        </div>
      </section>
    );
  }