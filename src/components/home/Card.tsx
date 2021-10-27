import React from "react";
import { Link } from "react-router-dom";

export function Card({
  itemId,

  onClick,

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
  return (
    <Link
      onClick={() => onClick()}
      role="button"
      className={type === "app" ? "appLink card" : "websiteLink card"}
      tabIndex={0}
      to={`/projects/${name}`}
    >
      <img
        src={img}
        alt="website"
        className={
          type === "app"
            ? "appStyle projects_box-image"
            : "websiteStyle projects_box-image"
        }
      />
    </Link>
  );
}
