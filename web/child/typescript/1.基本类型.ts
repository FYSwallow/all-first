export { }

let name: string = 'nihao'
let age: number = 18
let flag: boolean = false
let arr1: string[] = ['1', 'q']
let arr2: Array<string> = ['1', 'q']
// 可索引类型，接口表示数组

interface MyArray {
    [index: number]: string
}
let myArray: MyArray
myArray = ['a', 'b']
// 元组类型, 具有固定长度和类型的数组
let point: [string, string] = ['1', 'q']

// 枚举类型， 可以赋值，默认为索引
enum Gender {
    BOY,
    GIRL
}

// 枚举的本质,

// let Gender = {
//     0： "BOY",
//     1： "GIRL",
//     "BOY"： 0,
//     "GIRL": 1
//  }

// 常数枚举，使用const声明时，在编译时会省略
const enum Gender2 {
    RED,
    YELLOW,
    BLUE
}
console.log(Gender)
console.log(Gender2.RED)
// 联合类型
let u: undefined | null | string = undefined
u = 'abc'

// 永远不存在的值的类型never

function error(message: string): never {
    throw new Error(message)
}

// object非原始类型
declare function create(o: object | null): void
create({})

//类型断言
let someString: string = 'this is a string'
let strLength: number = (someString as string).length
console.log(strLength)


// 接口类型
interface LabelledValue {
    label: string,
    color?: string, //可选属性
    readonly width: number, //只读属性
    [propName: string]: any //任意属性
}


let myObj: LabelledValue = {
    size: 12,
    label: '我的介绍',
    width: 10,
    height: 12
}
// myObj.width = 12 //只读属性不可修改

// ReadonlyArray数组不可修改
let arr: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = arr

// ro[1] = 2 //不可修改


// 函数类型接口
// 1.函数表达式方式， 在ts中=>表示函数的定义，左边代表输入类型， 右边表示输出类型
let mySum: (a: string, b: string) => string = function (a: string, b: string): string {
    return a + b
}

// 2.接口方式
interface SearchFunc {
    (a: string, b: string): boolean
}
let mySearch: SearchFunc
mySearch = function (a: string, b: string) {
    return (a + b).length > 0
}

// 可选参数
function buildName(a: string, b: string, c: string = '先生'): string {
    /* 添加默认值表示可选参数 */
    return a + b + c
}

// 函数重载，根据不同参数，不同返回值自动匹配方法方法
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return ''
}

// 类类型
// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }


// 装饰器,使用场景，当使用别人封装好的一个类时，需要为类添加一些属性
namespace a {
    interface Person {
        xx: string
    }
    function enhancer(target: any) {
        target.prototype.xx = 'xxx'
    }
    @enhancer
    class Person {
        constructor() {}
    }
    let p = new Person()
    console.log(p.xx)
}

// 装饰器,使用场景，直接替换类
namespace b {b
    interface Person {
        name: string
    }
    function enhancer(target: any) {
        return class {
            public name:string = 'a'
        }
    }
    @enhancer
    class Person {
        constructor() {}
    }
    let p = new Person()
    console.log(p.name)
}