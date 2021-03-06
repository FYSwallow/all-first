import React from 'react'
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes.js';
const style = {
    position: 'absolute',
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    cursor: 'move',
};
export const Box = ({ id, left, top, hideSourceOnDrag, children, }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { id, left, top, type: 'card',},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }, [id, left, top]);
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag}/>;
    }
    return (<div ref={drag} style={{ ...style, left, top }} role="Box">
			{children}
		</div>);
};
