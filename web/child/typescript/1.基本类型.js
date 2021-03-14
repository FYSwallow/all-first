"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var name = 'nihao';
var age = 18;
var flag = false;
var arr1 = ['1', 'q'];
var arr2 = ['1', 'q'];
var myArray;
myArray = ['a', 'b'];
// 元组类型, 具有固定长度和类型的数组
var point = ['1', 'q'];
// 枚举类型， 可以赋值，默认为索引
var Gender;
(function (Gender) {
    Gender[Gender["BOY"] = 0] = "BOY";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));
console.log(Gender);
console.log(0 /* RED */);
// 联合类型
var u = undefined;
u = 'abc';
// 永远不存在的值的类型never
function error(message) {
    throw new Error(message);
}
create({});
//类型断言
var someString = 'this is a string';
var strLength = someString.length;
console.log(strLength);
var myObj = {
    size: 12,
    label: '我的介绍',
    width: 10,
    height: 12
};
// myObj.width = 12 //只读属性不可修改
// ReadonlyArray数组不可修改
var arr = [1, 2, 3, 4];
var ro = arr;
// ro[1] = 2 //不可修改
// 函数类型接口
// 1.函数表达式方式， 在ts中=>表示函数的定义，左边代表输入类型， 右边表示输出类型
var mySum = function (a, b) {
    return a + b;
};
var mySearch;
mySearch = function (a, b) {
    return (a + b).length > 0;
};
// 可选参数
function buildName(a, b, c) {
    if (c === void 0) { c = '先生'; }
    /* 添加默认值表示可选参数 */
    return a + b + c;
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return '';
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
var a;
(function (a) {
    function enhancer(target) {
        target.prototype.xx = 'xxx';
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.xx);
})(a || (a = {}));
