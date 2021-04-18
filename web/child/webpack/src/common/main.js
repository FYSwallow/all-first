export const test = () => {
    console.log('你好啊')
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
