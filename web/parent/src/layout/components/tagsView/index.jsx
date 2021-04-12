import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function TagsView() {
    return (
        <div className="tags-view-container">
            <ul className="tags-view-list">
                <Link  className="tags-view-item"><li>首页</li></Link>
                <Link  className="tags-view-item"><li>首页</li></Link>
            </ul>
        </div>
    )
}

export default TagsView