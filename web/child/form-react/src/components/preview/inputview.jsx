import React from 'react'

function Input({ content }) {
    return (
        <>
            {
                content.map(item =>
                    <label key={item.value}>{item.label}<input type="radio" value={item.value} /></label>
                )
            }
        </>
    )
}

export default Input