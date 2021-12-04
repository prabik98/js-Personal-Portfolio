import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
import Separator from "../../common/separator";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hey, I'm <span className="info-name">Bikash Pradhan</span>, 
          pursuing B.E (Hons.) from <span className="info-name">BITS Pilani</span>.
          I'm proficient in competitive programming, interested in Software development and Machine Learning.
          I'm passionate about technologies, market, product, business strategies.
        </div>
        <Separator />
        <div className="about-photo">
          <img
            src={require("../../../assets/image/profilepic.jpg").default}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
