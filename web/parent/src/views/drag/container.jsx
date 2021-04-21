import React, { useState, useCallback, useEffect } from "react";
import { Row, Tabs, message, Col } from "antd"
import Box from "./components/box"
import RowLayout from "./components/row"
import ColLayout from "./components/col"
import { useDrop } from "react-dnd"
import { transTree } from './utils'
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
// let initBoxArr = [
//     { type: "row", id: '1', pId: null }, //根标签固定存在,无法删除
//     { type: "row", id: '1-1', pId: '1' },
//     { type: "row", id: '1-2', pId: '1' },
//     { type: "row", id: '1-3', pId: '1' },
//     { type: "row", id: '1-1-1', pId: '1-1' },
//     { type: "row", id: '1-1-2', pId: '1-1' },
//     { type: "row", id: '1-1-3', pId: '1-1' },
//     { type: "row", id: '1-1-4', pId: '1-1' }
// ]

function DragContainer() {
    let cardArr = [1, 2, 3, 4, 5];
    const [boxes, setBoxes] = useState([]);
    const [, drop] = useDrop({
        accept: ["row", "col", "box"],
        drop(item, monitor) {
            if (item.type === 'row' || boxes.length === 0) {
                setBoxes([...boxes, { type: item.type, treeId: '1', parent: null }])
            }
        }
    })
    useEffect(() => {
        console.log(boxes)
    }, [boxes])

    const addLayout = (pId, item) => {
        const parentItem = boxes.find(val => val.id === pId)
        const { type } = item
        if (parentItem.type === 'row') {
            if (type === 'row' || type === 'box') {
                return message.info('请添加列布局')
            }
            let childrenList = boxes.filter(val => val.pId === pId)
            setBoxes([...boxes, { type, treeId: pId + '-' + (childrenList.length + 1), pId: pId }])
        }
        if (parentItem.type === 'col') {
            if (type === 'col') {
                return message.info('你已经添加布局，请选择内容')
            }
            let childrenList = boxes.filter(val => val.pId === pId)
            setBoxes([...boxes, { type, treeId: pId + '-' + (childrenList.length + 1), pId: pId }])
        }
    }

    const getBoxList = (data) => {
        let initArr = []
        if (data instanceof Object) {
            initArr.push(data)
        }
        const getBox = (children) => {
            return children.map(item => {
                if (item.type === 'row') {
                    return (
                        <RowLayout key={item.parent} node={item.treeId} addLayout={addLayout}>
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
                        <ColLayout key={item.parent} node={item.treeId} addLayout={addLayout}>
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
        return getBox(initArr)
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
