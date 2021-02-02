import React from 'react'

function App() {
    const len = 3000
    return (
        <ul>
            {
                Array(len).fill(0).map((item, i) => {
                    return <li key={i}>{item}</li>
                })
            }
        </ul>
        )
}

export default App