import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  SiReact,
  SiTypescript,
  SiAmazonaws,
  SiTwitter,
  SiMedium,
} from "react-icons/si";
import { AiOutlineMobile, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { BsChevronLeft } from "react-icons/bs";

import { projectData } from "../../utils/projectData";

function ProjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let { id }: any = useParams();
  const project = projectData.filter((cur) => cur.name === id);
  console.log(project);
  const { title, img, website, description, tools, type } = project[0];
  return (
    <div className="projectPage">
      <div className="projectPage-header-1">
        <Link to="/" className="back-btn">
          <BsChevronLeft color="white" />
        </Link>
        <div className="projectPage-header-text">Kyle W. Clutter</div>
      </div>
      <div className="projectPage-1">
        <div className="projectPage-header">
          <h2>
            Project
            <span className="block"></span>
          </h2>
          <div className="projectPage-text">{description}</div>
          <h2>
            Link
            <span className="block"></span>
          </h2>
          <a className="projectPage-link" href={website} target="blank">
            {title}
          </a>
          <h2>
            Tools Used
            <span className="block"></span>
          </h2>
          <div className="projectPage-tools">
            {tools?.includes("react") && (
              <SiReact className="react" color="rgb(97, 219, 251)" />
            )}
            {tools?.includes("javascript") && (
              <DiJavascript1 className="javascript" color="rgb(195, 204, 19)" />
            )}
            {tools?.includes("typescript") && (
              <SiTypescript className="typescript" color="rgb(39, 56, 124)" />
            )}
            {tools?.includes("aws") && (
              <SiAmazonaws className="aws" color="rgb(255, 153, 0)" />
            )}
            {tools?.includes("mobile") && (
              <AiOutlineMobile className="mobile" color="gb(15, 157, 88)" />
            )}
          </div>
        </div>
      </div>
      <img src={img} className={type === "app" ? "appPic" : "websitePic"} alt='cool'/>
      <div className="filler"></div>
      <div className=""></div>
      <div className="projectPage-footer">
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
      </div>
    </div>
  );
}

export default ProjectPage;
