import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Col } from "antd"
function getStyle(backgroundColor) {
    return {
        border: '1px solid rgba(0,0,0,0.2)',
        minHeight: '8rem',
        minWidth: '8rem',
        color: 'white',
        backgroundColor,
        padding: '2rem',
        paddingTop: '1rem',
        margin: '1rem',
        textAlign: 'center',
        float: 'left',
        fontSize: '1rem',
    };
}
const ColLayout = ({ children,node }) => {
    const [{ isOver, isOverCurrent }, drop] = useDrop({
        accept: "grid",
        drop(item, monitor) {
            console.log('grid')

            const didDrop = monitor.didDrop();
            if (didDrop) {
                return;
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    }, []);
    let backgroundColor = 'rgba(0, 0, 0, .5)';
    if (isOverCurrent || isOver) {
        backgroundColor = 'darkgreen';
    }
    return (
        <Col ref={drop} style={getStyle(backgroundColor)}>
            {children}
        </Col>
    )
}
export default ColLayout

