import React from "react";
import "./Herosection.css";
import resume from "../assets/hero/Neha_Resume.pdf";

const Herosection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <h5>Hello, I'm</h5>

        <h1 className="hero-title">
          Neha <span>Vaghasiya</span>
        </h1>

        <h3>IT Graduate & Aspiring Full Stack Developer</h3>

        <p>
          I love turning ideas into interactive web experiences using
          <br />
          HTML | CSS | Bootstrap | ReactJS
        </p>

        {/* <button className="hero-btn" id="Projects">View Projects</button> */}
        <a href={resume} className="hero-btn">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Herosection;


