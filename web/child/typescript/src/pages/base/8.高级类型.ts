
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
    type PetList = [Dog | Cat];
}

namespace F {
    //typeof类型保护
    function padLeft(val: string, padding: string | number) {
        if (typeof padding === 'string') {
            return padding + val
        }
        if (typeof padding === 'number') {
            return padding + val
        }
    }
}

namespace E {
    // instanceof 类型保护
    interface Padder {
        getPaddingString: () => string;
    }
    class SpaceRepeating implements Padder {
        constructor(private numSpaces: number) { }
        getPaddingString(): string {
            return this.numSpaces + ''
        }
    }
    class StringPadder implements Padder {
        constructor(private val: string) { }
        getPaddingString() {
            return this.val
        }
    }

    function getRandomPadder() {
        return Math.random() < 0.5
            ? new SpaceRepeating(4)
            : new StringPadder("hello")
    }

    let padder: Padder = getRandomPadder()
    if (padder instanceof SpaceRepeating) {
        padder
    }
    if (padder instanceof StringPadder) {
        padder
    }
}

namespace G {
    // 索引类型,(K extends keyof T)K属于T类型中的一个索引
    function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
        return names.map(itme => o[itme])
    }

    function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
        return o[name]
    }
}

namespace H {
    // 映射类型
    interface Person {
        name: string;
        age: number;
    }

    // 将就类型中每个属性转换为只读属性
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    }
    // 将每个属性转换为可选属性
    type Partial<T> = {
        [P in keyof T]?: T[P];
    }

    type ReadOnlyPerson = ReadOnly<Person>
    type PartialPerson = Partial<Person>
}

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
}
function unproxify<T>(t: Proxify<T>): T {
    let result = {} as T;
    for (const k in t) {
        result[k] = t[k].get();
    }
    return result;
}

