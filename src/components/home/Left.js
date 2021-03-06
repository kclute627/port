import React from "react";
import SVG from "react-inlinesvg";
import pic from "../../assets/pic.png";
import github from "../../assets/github.svg";
import codeWars from "../../assets/codewars.svg";
import link from "../../assets/linkedin2.svg";
import twitter from "../../assets/twitter.svg";

const Left = () => {
  const mobileLeft = (
    <div className="home-left-text mobile">
      <div className="mobile-left">
        <img src={pic} alt="" className="mobile-img" />
        <h4>Kyle Clutter</h4>
        <h6>React Developer</h6>

        <h2>Chicago, IL </h2>
        <a href="mailto:kyclutter@gmail.com" style={{ color: "white" }}>
          kyclutter@gmail.com
        </a>
      </div>
    </div>
  );

  return (
    <div className="home-left">
      <img src={pic} alt="" className="home-left-img" />
      {mobileLeft}
      <div className="home-left-text website">
        <h4>Kyle Clutter</h4>
        <h6>React Developer</h6>
        <div className="social_box">
          <a href="https://github.com/kclute627/" target="blank">
            <SVG title=" " src={github} className="social_icon" />
          </a>
          <a href="https://www.codewars.com/users/kclute627" target="blank">
            <SVG title=" " src={codeWars} className="social_icon" />
          </a>
          <a href="https://twitter.com/kyclutter" target="blank">
            <SVG title=" " src={twitter} className="social_icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-clutter-b37a52216/"
            target="blank"
          >
            <SVG title=" " src={link} className="social_icon" />
          </a>
        </div>
        <h2>Chicago, IL </h2>
        <a href="mailto:kyclutter@gmail.com" style={{ color: "white" }}>
          kyclutter@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Left;
