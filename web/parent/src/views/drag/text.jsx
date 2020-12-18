

import React, { useMemo, useState, useCallback } from 'react';
import { Button } from 'antd';

// 性能优化
// 防抖
function debounce(func, delay = 1000) {
    let timer;

    function debounced(...args) {
        debounced.cancel();
        timer = setTimeout(() => {
            console.log('run-do')
            func.apply(this, args);
        }, delay);
    }

    debounced.cancel = function () {
        if (timer !== undefined) {
            clearTimeout(timer);
            timer = undefined;
        }
    }
    return debounced
}

export default function Drag() {
    const [count, setCount] = useState(0);
    const [bounceCount, setBounceCount] = useState(0);
    // const debounceSetCount = debounce(setBounceCount);

    const handleMouseMove = () => {
        setCount(count + 1);
        debounceSetCount(bounceCount + 1);
    };

    const debounceSetCount = useCallback(
        debounce(setBounceCount),
        [],
    )
    // const debounceSetCount = useMemo(
    //     () => debounce(setBounceCount),
    //     [],
    // )
    // useCallback(fn, dep) === useMemo(()=> fn, dep)
    return (
        <div onMouseMove={handleMouseMove}>
            <p>普通移动次数: {count}</p>
            <p>防抖处理后移动次数: {bounceCount}</p>
        </div>
    )

}
// import React from 'react'
// import CardItem from './cardItem'
// const cardList = [
//     {
//         title: "第一个卡片",
//         id: 1,
//         content: "这是第一个卡片"
//     },
//     {
//         title: "第二个卡片",
//         id: 2,
//         content: "这是第二个卡片"
//     },
//     {
//         title: "第三个卡片",
//         id: 3,
//         content: "这是第三个卡片"
//     }
// ]

// export default function Drag() {
//     return (
//         <div className="cardList" style={{
//             display: "flex",
//             padding: "10px"
//         }}>
//             {
//                 cardList.map((item) => {
//                     return (
//                         <CardItem
//                             key={item.id}
//                             title={item.title}
//                             content={item.content}
//                         />
//                     )
//                 })
//             }
//         </div>
//     )
// }