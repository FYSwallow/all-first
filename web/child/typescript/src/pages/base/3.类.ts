/* 
    类的基本定义
*/

namespace Animal1 {
    class Greeter {
        greeting:string;
        constructor(message: string) {
            this.greeting = message
        }
        greet() {
            return "Hello, " + this.greeting
        }
    }
    
    let greeter = new Greeter('Word')
    console.log(greeter.greet())
    
    /* 
        继承
    */
    
    class Animal {
        move(distanceInMeters: number = 0) {
            console.log('动物都移动了' + distanceInMeters + 'm')
        }
    }
    
    class Dog extends Animal {
        bark() {
            console.log('wang wang')
        }
    }
    
    let dog = new Dog()
    dog.move(10)
    dog.bark()
}

// 使用命名空间， 减少测试时变量名重复问题
namespace Animal2 {
    class Animal {
        /* 
            修饰符： 
            public，默认，都可访问
            private, 私有的，不能在当前类的外部访问， 包括子类
            protected，可以在子类中使用, constructor也可以使用， 但是定义之后无法实例化类，只能对子类进行实例化
            readonly， 只能子啊构造函数中被初始化，其他地方无法更改
        */

        name: string
        private maxAge: number // 包括实列对象都不能访问
        protected maxWeight: number
        static category = '生物' //只能使用类名调用
        constructor(public theName: string, readonly color: string) { // 可以简写，直接将变量定义到函数中
            this.name = theName
            this.maxAge = 100
            this.maxWeight = 50
            this.color=color
        }
        move(distanceInMeters: number = 0) {
            console.log('动物都移动了' + distanceInMeters + 'm')
        }
    }
    
    class Snake extends Animal {
        constructor(name: string, color: string) {
            super(name, color)
        }
        move(distanceInMeters = 5) {
            console.log('Slithering。。。')
            console.log(this.maxWeight)
            super.move(distanceInMeters)
        }
    }

    class Horse extends Animal {
        constructor(name:string, color: string) {
            super(name, color)
        }

        move(distanceInMeters = 20) {
            console.log("Galloping...")
            super.move(distanceInMeters)
        }
    }
    let sam: Snake = new Snake('蛇','黑色' )
    let tom: Horse = new Horse('鼠','白色')
    sam.move()
    tom.move(36)
}