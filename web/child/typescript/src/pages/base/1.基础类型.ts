/* 
    boolean类型
*/

let isDone: boolean = false

console.log(isDone)

/* 
    数字类型
*/

let decLiteral: number = 6 //十进制
let hexLiteral: number = 0xffd; //十六进制
let binaryLiteral: number = 0b10110; // 二进制
let octalLiteral: number = 0o744; //八进制

console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral)

/* 
    字符串
*/

// let name:string = 'zhangsan' //ts无法声明name变量, ts内部已经声明
let username: string = "bob";
let tempStr: string = `zhangsan${username}`;
console.log(username, tempStr)
/* 
    数组
*/

let list1: number[] = [1, 2, 3]
let list2: (number | string)[] = [1, 2, 3, '4']
let list3: Array<number> = [1, 2, 3] // 数组泛型
let list4: Array<(number | string)> = [1, 2, '3']
console.log(list1, list2, list3, list4)

/* 
    元组类型
*/

let tupleList1: [string, number] = ['战三', 18] //固定长度,固定类型
console.log(tupleList1)
/* 
    枚举, 默认为索引,也可手动赋值
*/

enum Color {
    Red, Green, Blue
}

let c1: Color = Color.Green
let c2: string = Color[2]
console.log(c1, c2)

/* 
    any, 任意类型
*/

let notSure: any = 1
notSure = 'str'
notSure = false

/* 
    void, 没有返回值
*/

function warnUser(): void {
    console.log("没有返回值")
}
warnUser()
/* 
    null和undefined, 一般配合联合类型使用
*/

let unusable: null | undefined | string
unusable = 'unusableStr'
console.log(unusable)
/* 
    never, 不存在的值
*/
function error(message: string): never {
    throw new Error(message)
}

// error('无法到达的终点')

/* 
    类型断言
*/

let someValue: any = 'this is a string'
let strLength1: number = (<string>someValue).length //类型断言1
let strLength2: number = (someValue as string).length //类型断言2, jsx中只能使用as语法

console.log(strLength1, strLength2)

/* 
    object表示非原始类型
*/
/* 
declare function create(o:object| null): void 

create({prop: 0})

 */