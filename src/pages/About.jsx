import React from "react";
import "./About.css";
import { FaUserGraduate } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          Hi, I’m <span>Neha Vaghasiya</span>, an IT graduate and an
          aspiring Full Stack Developer. I enjoy creating clean, responsive,
          and user-friendly web applications.
        </p>

        <p className="about-text">
          I have hands-on experience with <strong>HTML, CSS, Bootstrap, and ReactJS</strong>.
          I love learning new technologies and continuously improving my skills
          by building real-world projects.
        </p>

        <p className="about-text">
          I’m passionate about turning ideas into interactive digital experiences
          and looking forward to growing as a professional developer.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <div className="icon"><FaUserGraduate />
</div>
            <h3>Education</h3>
            <p>BCA (IT)</p>
          </div>

          <div className="about-card">
            <div className="icon"><MdComputer />
</div>
            <h3>Focus</h3>
            <p>Frontend & Full Stack Development</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
