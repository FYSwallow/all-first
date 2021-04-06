import React from 'react'
import ReactDom from 'react-dom'
import App from './appReact'
import '../style/index.css'
import '../style/index.less'

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
