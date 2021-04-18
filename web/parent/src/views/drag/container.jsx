import React, { useState, useCallback } from "react";
import { Row, Tabs, message } from "antd";
import Box from "./components/box";
import { useDrop } from "react-dnd";
const { TabPane } = Tabs;
const styles = {
  width: 300,
  height: 300,
  border: "1px solid black",
  position: "relative",
};
function callback(key) {
  console.log(key);
}

const initDomData = {
  type: "row",
  children: [
    { type: "card", children: [] },
    { type: "card", children: [] },
    { type: "card", children: [] },
  ],
};
function DragContainer() {
  let rowArr = [1];
  let cardArr = [1, 2, 3, 4, 5];
  const [boxes, setBoxes] = useState([]);
  const [, drop] = useDrop({
    accept: "box",
    drop(item, monitor) {
      const content = monitor.getItem().content;
      if (!boxes && item !== "row") {
        return message.error("请先添加基本容器");
      }
      setBoxes([...boxes, monitor.getItem().content]);
    },
  });

  const getBoxList = () => {};

  return (
    <div className="drag-container">
      <div className="drag-warpper">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="栅格布局" key="1">
            {rowArr.map((item, index) => {
              return (
                <Box key={index} content="row">
                  添加布局
                </Box>
              );
            })}
          </TabPane>
          <TabPane tab="卡片模板" key="2">
            {cardArr.map((item, index) => {
              return (
                <Box key={index} content={item}>
                  拖拽{item}
                </Box>
              );
            })}
          </TabPane>
        </Tabs>
      </div>
      <div className="drop-container" ref={drop} style={styles}>
        <Row>
          {boxes.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </Row>
      </div>
    </div>
  );
}

export default DragContainer;
