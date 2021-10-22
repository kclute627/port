import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({
  itemId,
  selected,
  onClick,
  title,
  img,
  name
}: {
  itemId: string;
  selected: boolean;
  onClick: Function;
  title: string;
  img: string,
  name: string
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <Link
      onClick={() => onClick()}
      role="button"
      style={{
        
        display: "inline-block",
        margin: "0 10px",
        width: "60rem",
        userSelect: "none",
      }}
      tabIndex={0}
      className="card"
      to={`/projects/${name}`}
      
    >
      <img src={img} alt="website" className="projects_box-image" />
      
       
    </Link>
  );
}
