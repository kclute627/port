import React from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  console.log(children);

  const leftStyle: any = {
    opacity: disabled ? "0" : "1",
    position: "absolute",
    cursor: "pointer",
    left: "35%",
    bottom: "-11rem",
  };
  const rightStyle: any = {
    opacity: disabled ? "0" : "1",
    position: "absolute",
    cursor: "pointer",
    right: "35%",
   

    bottom: "-11rem",
  };

  if (children == "Right") {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        style={rightStyle}
        className="btn"
      >
        <BsChevronDoubleRight size={100} color="white" />
      </button>
    );
  } else {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        style={leftStyle}
        className="btn"
      >
        <BsChevronDoubleLeft size={100} color="white" />
      </button>
    );
  }
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isFirstItemVisible
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      Left
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      Right
    </Arrow>
  );
}
