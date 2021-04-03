import './style/app.css'
import './style/app2.less'
const img = require('./style/user.png')

// let box = document.getElementById('root')
// let imageBox = document.createElement('img')
// imageBox.setAttribute("src", img)
// box.appendChild(imageBox)

const asyncFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1341)
        })
    })
}
asyncFunc.then(res => {
    console.log(res)
})
export const show = () => {
    console.log(123)
}
