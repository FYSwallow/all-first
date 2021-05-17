/* 
    泛型
*/

namespace A {
    function loggingIdentity<T>(arg: T): T {
        // console.log(arg.length) // T不存在长度这个属性
        return arg
    }
}
namespace B {
    function loggingIdentity<T>(arg: T[]): T[] {
        console.log(arg.length)
        return arg
    }

    // 字面量方式
    function identity<T>(arg: T) : T {
        return arg
    }
    let myIdentity:{<T>(arg:T): T} = identity
}

namespace C {
    /* 泛型接口 */
    interface GenderIdentity{
        <T>(arg: T) : T
    }
    function identity <T>(arg: T): T {
        return arg
    }

    let myIdentity: GenderIdentity = identity
}

namespace D {
    /* 接口泛型传参 */
    interface GenderIdentity<T> {
        (arg: T): T;
    }
    function identity<T>(arg: T):T{
        return arg
    }

    let myIdentity: GenderIdentity<number> = identity
}


namespace E {
    // 泛型类
    class Genderumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
        constructor(val: T) {
            function sum(x:T,y: T): T {
                return x
            }
            this.zeroValue = val;
            this.add = sum
        }
    }

    let myGenderNumber = new Genderumber<number>(10)
}

namespace E {
    // 泛型约束
    interface Lengthwise {
        length: number;
    }

    function myIdentity<T extends Lengthwise>(arg: T) : T {
        console.log(arg.length) //泛型以及被约束为具有length属性, 
        return arg
    }
    // myIdentity(10) //10不具有length属性, 报错
}