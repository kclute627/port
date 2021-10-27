import React from "react";
import {
  SiReact,
  SiCsswizardry,
  SiTypescript,
  SiAmazonaws,
  SiTwitter,
  SiMedium,
  SiCodewars,
} from "react-icons/si";
import { AiOutlineMobile, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { BsChevronLeft } from "react-icons/bs";

function Footer() {
  return (
    <div className="projectPage-footer" id='display'>
      <div className="projectPage-footer-center">
        <a href="mailto:kyclutter@gmail.com" style={{ color: "white" }}>
          <AiOutlineMail height={100} width={100} />
        </a>
        <a href="https://twitter.com/kyclutter" target="_blank">
          <SiTwitter color="white" />
        </a>
        <a href="https://github.com/kclute627/" target="_blank">
          <AiFillGithub color="white" />
        </a>
        <a href="https://kyleclutter.medium.com/" target="_blank">
          <SiMedium color="white" />
        </a>
        <a href="https://www.codewars.com/users/kclute627" target="_blank">
          <SiCodewars color="white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
