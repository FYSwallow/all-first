
/* 高级类型 */
namespace A {
    /* 交叉类型 */
    function extond<T, U>(first: T, second: U): T & U {
        let result = <T & U>{};
        for (const key in first) {
            (<any>result)[key] = (<any>first)[key]
        }
        for (const key in second) {
            if (!(<any>result).hasOwnProperty(key)) {
                (<any>result)[key] = (<any>second)[key]
            }
        }
        return result
    }

    class Person {
        constructor(public name: string) { }
    }
    interface Loggable {
        log(): void;
    }
    class Consolelogger implements Loggable {
        log() { }
    }

    var jim = extond(new Person('张三'), new Consolelogger())
    console.log(jim)
}


namespace B {
    /* 类型别名 */
    type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;
    function getName(n: NameOrResolver): Name {
        if (typeof n === 'string') {
            return n
        } else {
            return n()
        }
    }
}

namespace C {
    /* 类型别名使用泛型 */
    type Container<T> = { value: T };
    type Tree<T> = {
        value: T;
        left: Tree<T>;
        right: Tree<T>;
    }
}

namespace D {
    /* 类型别名和接口区别 */
    // 1.extends形式不同
    interface Parent {
        name: string;
    }
    interface Child extends Parent {
        age: number
    }

    type Parent1 = {
        name: string;
    }
    type Child1 = Parent1 & { age: number }

    interface Child2 extends Parent1 {//接口可以拓展类型别名
        age: number;
    }

    type Child3 = Parent & { age: number } // 类型别名可以拓展接口
}

namespace E {
    // type可以声明基本类型, 联合类型, 元组
    type Name = string;
    interface Dog {
        wong: () => void;
    }
    interface Cat {
        miao: () => void;
    }

    type Pet = Dog | Cat;
    type PetList = [Dog | Cat]
}