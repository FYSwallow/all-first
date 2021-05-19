/* 
    装饰器工厂函数
*/

function color(val: string) {
    return function(target: string) {

    }
}/* 
    装饰器
*/

namespace A {
    // 类装饰器
    // 1. 普通装饰器
    function logClass(params: any) {
        //params就是原型对象
        console.log(params);
        // 拓展类属性
        params.prototype.name = "wangwu";
        params.prototype.do = function () {
            console.log("这是动态增加的方法");
        };
    }

    @logClass //装饰器后面不能加;
    class Person {
        constructor() {}

        talk() {
            console.log("讲话");
        }
    }

    let p = new Person();
    console.log(p);
}

namespace B {
    // 类装饰器
    // 1. 装饰器工厂（可传参）
    function logClass(params: string) {
        return function (target: any) {
            //target就是原型对象
            console.log(target, params);
            target.prototype.desc = params;
        };
    }

    @logClass("这是装饰器工厂") //装饰器后面不能加;
    class Person {
        constructor() {}

        talk() {
            console.log("讲话");
        }
    }

    let p = new Person();
    console.log(p);
}

namespace C {
    /* 类装饰器重载构造函数 */
    function logClass(target: any) {
        return class extends target {
            name: string = "修改后的名字";
            getName() {
                console.log(this.name);
            }
        };
    }

    @logClass
    class Person {
        public name: String | undefined;
        constructor(name: string) {
            this.name = name;
        }

        getName() {
            console.log(this.name);
        }
    }
    let p = new Person("zhansan");
    console.log(p);
}

namespace D {
    /* 属性装饰器 */
    function logPrototype(params: string) {
        return function (target: any, attr: any) {
            //target就是原型对象,attr表示装饰的属性
            console.log(target);
            console.log(attr);
            target[attr] = params;
        };
    }

    class Person {
        @logPrototype("张三")
        public name: string | undefined;
        constructor() {}

        talk() {
            console.log("讲话");
        }
    }

    let p = new Person();
    console.log(p);
}

namespace E {
    /* 方法装饰器 */
    function logMethod(params: any) {
        return function (target: any, attr: any, desc: any) {
            //target就是原型对象,attr表示装饰的属性, desc表示方法的描述
            console.log(target);
            console.log(attr);
            console.log(desc); // desc下的value就是对应的方法
            
            //修改装饰器的方法为参数都为string类型
            let oldMethod = desc.value;
            desc.value = function (...args: any[]) {
                args = args.map((item) => String(item)); //装饰器将所有类型转换为string类型
                oldMethod.apply(this, args);
            };
        };
    }

    class Person {
        public name: string | undefined;
        constructor() {}

        @logMethod("张三")
        talk(...args: any[]) {
            console.log(args);
        }
    }

    let p = new Person();
    console.log(p);
    p.talk("123", 456);
}

namespace E {
    /* 方法参数装饰器 */
    function logParams(params: any) {
        return function (target: any, paramsName: any, paramsIndex: any) {
            //target就是原型对象,paramsName表示方法的名称, paramsIndex表示参数的索引
            console.log(target);
            console.log(paramsName);
            console.log(paramsIndex); 

        };
    }

    class Person {
        public name: string | undefined;
        constructor() {}

        talk(@logParams('params') params: string ) {
            console.log(params)
        }
    }

    let p = new Person();
    console.log(p);
}
