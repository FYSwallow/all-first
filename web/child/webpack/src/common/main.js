import conmmon from './index'
export const test = () => {
    let result = conmmon(10)
    console.log('你好啊' + result)
}
export const asyncFunc = () =>{
    import('./async').then(data => {
        console.log(data)
    })
} 

asyncFunc()
console.log(123)
// test()
// console.log(window.$)
