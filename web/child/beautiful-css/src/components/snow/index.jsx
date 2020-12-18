import React from 'react'
import './index.scss'
function Snow() {

    function snowList() {
        let i = 400, result = []
        while(i > 0) {
            result.push(<span className='snow'></span>)
            i--
        }
        return result
    }

    return (
        <div className="snow-container">
            {snowList()}
        </div>
    )
}

export default Snow