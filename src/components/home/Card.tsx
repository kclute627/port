import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({
  itemId,
  selected,
  onClick,
  title,
  img,
  name,
  type,
}: {
  itemId: string;
  selected: boolean;
  onClick: Function;
  title: string;
  img: string;
  name: string;
  type: string;
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  const appStyle = {
    height: "40rem",
    width: "25rem",
  };
  const websiteStyle = {
    height: "100%",
    width: "100%",
  };

  return (
    <Link
      onClick={() => onClick()}
      role="button"
      style={
        type == "app"
          ? {
              display: "inline-block",
              margin: "0 10px",
              width: "40rem",
              userSelect: "none",
            }
          : {
              display: "inline-block",
              margin: "0 10px",
              width: "60rem",
              userSelect: "none",
            }
      }
      tabIndex={0}
      className="card"
      to={`/projects/${name}`}
    >
      <img
        src={img}
        alt="website"
        className={
          type == "app"
            ? "appStyle projects_box-image"
            : "websiteStyle projects_box-image"
        }
      />
    </Link>
  );
}
