import React from 'react'

function PreViewWarpper({info, children, order}) {
    return (
        <div className="item-title">
            <h3>{order + 1}.{info.title}</h3>
            {children}
        </div>
    )
}

export default PreViewWarpper