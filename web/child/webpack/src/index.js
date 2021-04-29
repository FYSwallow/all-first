// import $ from 'jquery'
import {test} from './common/main.js'
import './style/index.css'
import './style/index.less'
import logo from './style/test.jpg'
import moment from 'moment'
import conmmon from './index'

// 手动引入中文包
import 'moment/locale/zh-cn'
// 设置语言
moment.locale('zh-cn')
let time = moment().endOf('day')
console.log(time)

// import {testProxy} from './api/index'

// testProxy()
test()
class A{
    add() {
        console.log('我是一个增加方法')
    }
}
console.log(common(20))
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