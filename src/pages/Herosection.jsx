// import React from "react";
// import "./Herosection.css";
// import resume from "../assets/hero/Neha_Resume.pdf";

// const Herosection = () => {
//   return (
//     <section className="hero" id="home">
//       <div className="hero-overlay">
//         <h5>Hello, I'm</h5>

//         <h1 className="hero-title">
//           Neha <span>Vaghasiya</span>
//         </h1>

//         <h3>IT Graduate & Aspiring Full Stack Developer</h3>

//         <p>
//           I love turning ideas into interactive web experiences using
//           <br />
//           HTML | CSS | Bootstrap | ReactJS
//         </p>

//         <a href={resume} className="hero-btn">
//           Download CV
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Herosection;


import React, { useEffect, useRef } from "react";
import "./Herosection.css";
import resume from "../assets/hero/Neha_Resume.pdf";

const Herosection = () => {

  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // 👈 reset
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-overlay">

        <h5 className="hero-anim delay-1">Hello, I'm</h5>

        <h1 className="hero-title hero-anim delay-2">
          Neha <span>Vaghasiya</span>
        </h1>

        <h3 className="hero-anim delay-3">
          IT Graduate & Aspiring Full Stack Developer
        </h3>

        <p className="hero-anim delay-4">
          I love turning ideas into interactive web experiences using
          <br />
          HTML | CSS | Bootstrap | ReactJS
        </p>

        <a href={resume} className="hero-btn hero-anim delay-5">
          Download CV
        </a>

      </div>
    </section>
  );
};

export default Herosection;
