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
})()

