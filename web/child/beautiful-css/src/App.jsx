import React from 'react'
import './style/index.css'
import WaveLoading from './components/loading/index.jsx'
import ScssTest from './components/scss/index.jsx'
import RunText from './components/run-text/index.jsx'
import Snow from './components/snow/index.jsx'

function App() {
    return (
        <div className="css-container">
            <WaveLoading/>
            <ScssTest/>
            <RunText/>
            <Snow/>
        </div>
    )
}

export default App