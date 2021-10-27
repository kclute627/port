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
  };
  const rightStyle: any = {
    opacity: disabled ? "0" : "1",
  };

  if (children == "Right") {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className="rightStyle btn"
        style={rightStyle}
      >
        <BsChevronDoubleRight  color="white" />
      </button>
    );
  } else {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className="leftStyle btn"
        style={leftStyle}
      >
        <BsChevronDoubleLeft  color="white" />
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
