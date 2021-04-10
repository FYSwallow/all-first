import React, { useState, useCallback, useMemo } from 'react';
import { useDrag } from 'react-dnd';
import { Colors } from './Colors';
const style = {
    border: '1px dashed gray',
    padding: '0.5rem',
    margin: '0.5rem',
};
export const SourceBox = ({ color, children }) => {
    // 参数一时collect返回的方法， 参数二返回ref
    const [{ isDragging }, drag] = useDrag({
        item: { type: `${color}` },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    
    const backgroundColor = useMemo(() => {
        switch (color) {
            case Colors.YELLOW:
                return 'lightgoldenrodyellow';
            case Colors.BLUE:
                return 'lightblue';
            default:
                return 'lightgoldenrodyellow';
        }
    }, [color]);

    const containerStyle = useMemo(() => ({
        ...style,
        backgroundColor,
        opacity: isDragging ? 0.4 : 1,
    }), [isDragging, backgroundColor]);

    return (<div ref={drag} style={containerStyle}>
			{children}
		</div>);
};
