import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Col } from "antd"
function getStyle(backgroundColor) {
    return {
        minHeight: '8rem',
        backgroundColor,
    };
}
const ColLayout = ({ children,node, addLayout }) => {
    const [{ isOver, isOverCurrent }, drop] = useDrop({
        accept: ["row", "box"],
        drop(item, monitor) {
            const didDrop = monitor.didDrop();
            if (didDrop) return
            addLayout(node, item)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    }, []);
    let backgroundColor = 'rgba(0, 0, 0, .5)';
    if (isOverCurrent) {
        backgroundColor = 'darkgreen';
    }
    return (
        <Col ref={drop} style={getStyle(backgroundColor)} span={24}>
            {children}
        </Col>
    )
}
export default ColLayout

