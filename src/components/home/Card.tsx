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


  return (
    <Link
      onClick={() => onClick()}
      role="button"
      className={
        type == "app"
          ? 'appLink card'
          : 'websiteLink card'
      }
      tabIndex={0}
      
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
