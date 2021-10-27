import React from "react";
import {
  
  SiTwitter,
  SiMedium,
  SiCodewars,
} from "react-icons/si";
import {  AiFillGithub, AiOutlineMail } from "react-icons/ai";


function Footer() {
  return (
    <div className="projectPage-footer" id='display'>
      <div className="projectPage-footer-center">
        <a href="mailto:kyclutter@gmail.com" style={{ color: "white" }}>
          <AiOutlineMail height={100} width={100} />
        </a>
        <a href="https://twitter.com/kyclutter" target="blank">
          <SiTwitter color="white" />
        </a>
        <a href="https://github.com/kclute627/" target="blank">
          <AiFillGithub color="white" />
        </a>
        <a href="https://kyleclutter.medium.com/" target="blank">
          <SiMedium color="white" />
        </a>
        <a href="https://www.codewars.com/users/kclute627" target="blank">
          <SiCodewars color="white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
