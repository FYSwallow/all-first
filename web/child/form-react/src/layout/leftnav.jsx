import React from 'react'
import { leftNavConfig } from '../config/leftnavconfig';

function LeftNav({ addEditData }) {
    return (
        <ul>
            {leftNavConfig.map((item, index) => {
                return (
                    <li key={index} onClick={() => {
                        addEditData(item.defaultProps)
                    }}>
                        {item.title}
                    </li>
                )
            })}
        </ul>
    )
}

export default LeftNav