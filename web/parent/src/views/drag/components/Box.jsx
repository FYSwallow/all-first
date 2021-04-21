import React from "react";
import { useDrag } from "react-dnd";
const style = {
  display: "inline-block",
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move",
};
const Box = ({children, content,type}) => {
  const [, drag] = useDrag({ item: { type, content } });
  return (
    <div ref={drag} style={style}>
      {children}
    </div>
  );
};
export default Box;

