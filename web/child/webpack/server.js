const express = require('express')

const app = express()
app.get('/test', (req, res) => {
    res.send({name: '跨域测试'})
})

app.listen('3000')