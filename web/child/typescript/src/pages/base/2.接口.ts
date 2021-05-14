/* 
    接口
*/

interface LabelledValue {
    label: string;
}

function printLabel(labelObj: LabelledValue) {
    console.log(labelObj.label);
}

//可选状态
interface SquareConfig {
    color?: string;
    width?: number;
}

interface SquareItem {
    color: string;
    area: number;
}
function createSquare(config: SquareConfig): SquareItem {
    let newSquare: SquareItem = { color: "red", area: 50 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

console.log(createSquare({ color: "blue" }));

/* 
    只读属性
*/
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 20 // 不可修改

/* 
只读数组
*/
let a: ReadonlyArray<number> = [1, 2, 3];
// a[0] = 3 // 不可修改

/* 
    函数属性
*/
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string): boolean {
    return subString.includes(source);
};
/* 
    函数形参变量与接口定义的参数可以不一致
*/
mySearch = function (src: string, sub: string): boolean {
    return sub.includes(src);
};
/* 
    函数中也可不去定义类型，ts会自动推断类型
*/
mySearch = function (src, sub) {
    return sub.includes(src);
};

console.log(mySearch("hellow", "hellow TS"));

/* 
    接口定义数组
 */

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ['read', 'green', 'blue']
console.log(myArray[0])

/* 

interface NumberDictionary {
    [index: string]: number; //索引为string类型的值都为number类型， name与之相斥
    length: number;
    name: string;
} 
*/

/* 
    类接口
*/

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date):void;
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {

    }
    constructor (date: Date) {
        this.currentTime = date
    }
    
}

// 继承接口
interface Shape {
    color:string;
}

interface Square extends Shape {
    sideLength: number;
}

let square:Square = <Square>{} 
square.color='red'
square.sideLength=10

//也可继承多个接口
interface PenStroke {
    penWidth: number;
}

interface MoreExtends extends Shape, PenStroke {
    sideArea: number
}

let square2: MoreExtends = <MoreExtends>{}
square2.penWidth = 10
square2.sideArea = square2.penWidth * square2.penWidth
