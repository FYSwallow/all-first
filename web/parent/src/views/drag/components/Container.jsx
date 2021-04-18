/**
 * filename: Container
 * overview: 整个拖拽演示界面
 */

import React, { useState, useEffect } from 'react';
import Box from './Box';
import List from './List';

const boxs = [
    { id: 1, category: 'Apple', bg: 'red' },
    { id: 2, category: 'Banana', bg: 'yellow' },
    { id: 3, category: 'Orange', bg: 'orange' },
    { id: 4, category: 'Grape', bg: 'purple' },
    { id: 5, category: 'Watermelon', bg: 'green' },
    { id: 6, category: 'Peach', bg: 'pink' },
]

const Container = () => {

    const [cardList, setCardList] = useState([]);
    const [position, setPosition] = useState(null)

    const changeCardList = (list) => {
        setCardList([...list]);
    }
    useEffect(() => {
        console.log(cardList)
    }, [cardList])

    useEffect(() => {
        
    }, [position])

    return (
        <div>
            {
                boxs.map((item) => <Box key={ item.id } {...item} cardList={ cardList } changeCardList={ changeCardList } />)
            }
            <List cardList={ cardList } changeCardList={ changeCardList } setPosition={setPosition} />
        </div>
    )
}

export default Container;
