import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({
  itemId,
  selected,
  onClick,
  title,
  img
}: {
  itemId: string;
  selected: boolean;
  onClick: Function;
  title: string;
  img: string
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
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
    >
      <img src={img} alt="website" className="projects_box-image" />
      
       
    </div>
  );
}
