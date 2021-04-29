import React, { useState, useCallback, useEffect } from "react";
import { Row, Tabs, message, Col } from "antd"
import Box from "./components/box"
import RowLayout from "./components/row"
import ColLayout from "./components/col"
import { useDrop } from "react-dnd"
import { transTree } from './utils'
const { TabPane } = Tabs;
const styles = {
    border: "1px solid black",
    position: "relative",
    height: 300
};
function callback(key) {
    console.log(key);
}

function DragContainer() {
    let cardArr = [1, 2, 3, 4, 5];
    const [boxes, setBoxes] = useState([]);
    const [, drop] = useDrop({
        accept: 'row',
        drop(item, monitor) {
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                addLayout(null, item) 
            }
        }
    })
    useEffect(() => {
        console.log(boxes)
    }, [boxes])

    const addLayout = (pId, item) => {
        const { type } = item
        let childrenList = boxes.filter(val => val.pId === pId)

        let prevId = pId ? pId+ '-': ''
        return setBoxes([...boxes, { type, id: prevId  + (childrenList.length + 1), pId: pId }])
       
    }

    const getBoxList = (data) => {
        const getBox = (children) => {
            return children.map(item => {
                if (item.type === 'row') {
                    return (
                        <RowLayout key={item.id} node={item.id} addLayout={addLayout}>
                            {
                                item.children.length > 0
                                    ? getBox(item.children)
                                    : null
                            }
                        </RowLayout>
                    )
                }
                if (item.type === 'col') {
                    return (
                        <ColLayout key={item.id} node={item.id} addLayout={addLayout}>
                            {
                                item.children.length > 0
                                    ? getBox(item.children)
                                    : null
                            }
                        </ColLayout>
                    )
                }
                if (item.type === 'box') {
                    return 123
                }
            })
        }
        return getBox(data)
    }
    return (
        <div className="drag-container">
            <div className="drag-warpper">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="栅格布局" key="1">
                        <Box content="row" type="row">
                            添加行布局
                        </Box>
                        <Box content="col" type="col">
                            添加列布局
                        </Box>
                    </TabPane>
                    <TabPane tab="卡片模板" key="2">
                        {cardArr.map((item, index) => {
                            return (
                                <Box key={index} content={item} type="box">
                                    拖拽{item}
                                </Box>
                            )
                        })}
                    </TabPane>
                </Tabs>
            </div>
            <div className="drop-container" ref={drop} style={styles}>
                {getBoxList(transTree(boxes))}
            </div>
        </div>
    );
}

export default DragContainer;
