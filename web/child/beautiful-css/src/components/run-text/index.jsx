import React from 'react'
import './index.css'

function RunText() {
    let text = 'Ano hi watashitachi mada shiranai no Fushigi no monogatari desu.'
    function getText() {
        let result = []
        for (let i = 0; i < text.length; i++) {
            result.push(<span style={{animationDelay: i * 0.2 + "s",color: "red" }} key={i}> {text[i]}</span>)
        }
        return result
    }
    return (
        <div className="run-text-container">
            <p>
             {getText()}
            </p>
        </div>
    )
}

export default RunText