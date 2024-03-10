import React from "react";
// import video from "../../public/assets/videos/gradient.mp4";

const Hero = ({ mobile }) => {
  return (
    <div className="hero">
      <h1 className="welcome-txt">
        <span className="first-word">Welcome</span> to my portfolio!
      </h1>
      <div className="txt-btn-group">
        <div className="contact-div">
          <p className="contact-text">everything you need to know about me</p>
          {/* <Link to={"contact"} className="pixelated-btn">Click me!</Link> */}
        </div>
        <div className="projects-div">
          <p className="projects-text">
            visit projects page here or take a quick look below
          </p>
          {/* <Link to={"projects"} className="pixelated-btn">Click me!</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
