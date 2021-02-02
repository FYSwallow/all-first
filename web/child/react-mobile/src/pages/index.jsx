import React from 'react'
import list from '../router/index'

function MainEntery() {
    let conponentLists = list.map((item, index) => {
        if (item.name) {
            return (
                <li className="components-item" key={index}>
                    {item.name}
                </li>
            )
        }      
    })
    return (
        <div className="main-entry-container">
            <ul className="components-list">
                {conponentLists}
            </ul>
        </div>
    )
}

export default MainEntery
