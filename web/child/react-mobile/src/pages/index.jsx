import React from 'react'
import List from '../components/list/index.jsx'
function Home () {
    return (
        <div className="home-container">
            <ul className="components-list">
                <List style={{ padding: '10px' }} className="list-warpper">
                    <span>123</span>
                </List>
            </ul>
        </div>
    )
}

export default Home
