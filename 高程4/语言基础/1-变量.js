/* 3.3变量 */


/**
 * 1. var声明作用域 
 */

(function () {
    function test() {
        var message = "hi" // 函数的局部变量, 改变量将在函数退出的时候销毁
    }

    test()
    // console.log(message) //报错
})();

(function () {
    function test2() {
        message = 'hi'; //全局变量, 严格模式下给未声明的变量赋值会报错
    }

    test2()
    console.log(message) // 'hi'    
})();
/**
 * 2.var 声明提升
 */

(function () {
    function foo() {
        console.log(age)
        var age = 26
    }
    foo() // 'undefined',变量提升相当于把所有声明提升到代码顶部,赋值位置不变
})();

/**
 * let声明, let声明的变量不能在同一块级重复声明,也不能在声明之前调用,如果在声明之前调用,会产生暂时性死区
 */

//  var 声明是函数作用域,不存在块级作用域
(function () {
    if (true) {
        var name = "李四"
        console.log(name)
    }
    console.log(name)

    if (true) {
        let name2 = '王五'
        console.log(name2)
    }
    // console.log(name2) 报错,let声明的是块级作用域,全局环境下无法访问

    // 与var不同,let在全局作用域下声明的变量不会成为window得属性,而var则会, node中不存在window对象
    var name3 = '马六'
    // console.log(window.name3) 

    let name4 = '找七'
    // console.log(window.name4)
})();

/* 
    <script>
        let name = "李四"
    </script>
    <script>
        let name = "王五" // 当之前声明过，会报错
 
    </script>
*/

/**
 * for循环中的打印i的值
 */

(function () {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, 0)
    }

    // 使用var打印i的值
    for (var i = 0; i < 5; i++) {
        (function (j) { // 立即执行函数表达式,使用j存储i的值
            setTimeout(() => {
                console.log(j)
            }, 0)
        })(i)
    }
})();

/**
 * const 声明, const声明后的变量不能重新赋值
 */

/**
 *  数据类型： Undefined, Null,Boolean, String, Number, Symbol
 */

//  1.typeof操作符。 typeof是一个操作符，但也可以使用参数

(function () {
    let message = 'hi'
    console.log(typeof message) //'string'
    console.log(typeof (message)) // 'string'
})();

/**
 *  Boolean类型
 */

(function () {
    console.log(Boolean('')) //false
    console.log(Boolean('123')) // true
    console.log(Boolean(0)) // false
    console.log(Boolean(123)) // true
    console.log(Boolean(NaN)) // false
    console.log(Boolean(Infinity)) // true
    console.log(Boolean({})) // true
    console.log(Boolean(undefined)) // false
})();

/**
 * Number类型。 八进制以0开头，十六进制以0x开头。 0.1 + 0.2 != 0.3,用0除以任何数，都会返回NAN。 如果分子是非0， 分母为0，则返回Infinity
 * 
 * NAN 不等于包括NAN的任何值
 * 
 * Number转换规则
 *  a. boolean值， true => 1, flase => 0
 *  b. 数值， 直接返回
 *  c. null, 返回0。
 *  d. undefined, 返回NaN
 *  e. string。 
 *      1). 数字字符
 *      2). 如果以0x开头，则直接返回该十六进制对应的十进制整数
 *      3). 如果是空字符串，则返回0
 *      4). 其他情况则返回NaN
 */

 (function () {
     console.log(isNaN(NaN)) // true
     console.log(isNaN(10)) // false
     console.log(isNaN("10")) // false
     console.log(isNaN("blue")) // NAN
     console.log(isNaN(true)) // false, 可以转换为1

     console.log(Number('123saf'))
 })()

