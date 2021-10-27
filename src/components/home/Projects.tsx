import React from "react";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { projectData } from "../../utils/projectData";
import { Card } from "./Card";
import useDrag from "../../utils/useDrag";
import { LeftArrow, RightArrow } from "../../utils/arrows";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;
const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));


const Projects = ({ title, type }: any) => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const [selected, setSelected] = React.useState<string>("");
  const handleItemClick = (itemId: string) => () => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : "");
  };
  const [boxes] = React.useState(getItems);

  return (
    <div className="projects">
      <h2>
        {title} <span className="block"></span>
      </h2>
      <div className="example">
        
          <ScrollMenu
            onWheel={onWheel}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
          >
            {projectData.filter(cur=> cur.type === type).map(({ id, img, name, type }) => {
              return (
                <Card
                  title={id}
                  itemId={id} // NOTE: itemId is required for track items
                  key={id}
                  onClick={handleItemClick(id)}
                  selected={id === selected}
                  img={img}
                  name={name}
                  type={type}
                />
              );
            })}
          </ScrollMenu>
       
      </div>
    </div>
  );
};

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
export default Projects;
