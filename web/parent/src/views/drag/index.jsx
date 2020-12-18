import React from 'react'

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import {Container} from './container'

export default function Drag(props) {
    return (
        <DndProvider backend={HTML5Backend}>
            <Container {...props} />
        </DndProvider>
    )
}