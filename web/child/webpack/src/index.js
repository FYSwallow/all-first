// import $ from 'jquery'
import './common/main.js'
import './style/index.css'
import './style/index.less'
import logo from './style/test.jpg'
class A{
    add() {
        console.log('我是一个增加方法')
    }
}

console.log(A)
console.log($) // 在每个模块，引入$
const a = new A()
a.add()

new Promise((resolve) => {
    console.log(123)
    resolve(456)
}).then(res => {
    console.log(res)
})

let img = new Image()
img.src = logo
$("#root").append(img)