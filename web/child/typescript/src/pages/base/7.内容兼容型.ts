/* 类型兼容型 */

namespace A {
    interface Named {
        name: string;
    }
    class Person {
        name: string;
        constructor() {
            this.name = '张三'
        }
    }

    class Animal {
        color: string;
        constructor() {
            this.color = 'red'
        }
    }

    let p: Named;
    p = new Person(); //类中包含了接口中定义的属性, 可兼容
    // p = new Animal(); // 报错, 未实现接口中定义的那么
}
namespace B {

    /* 类型兼容型 */
    interface Named {
        name: string;
    }
    // let x: Named= {name: '张三', age: 456}; // 报错
    let x: Named;
    let y = { name: '张三', age: 456 }
    x = y
    let z = { weight: 60 }
    // x = z // z中不包含name属性, 能兼容的规则必须是包含接口定义的属性
}


namespace C {
    /* 函数型兼容 */
    let x = (a: number) => 0;
    let y = (a: number, s: string) => 0;
    // x = y; //报错, x的参数中不包含y的全部参数
    y = x; //成功
}
namespace C {
    /* 函数参数双向协变 */
    enum EventType {
        Mouse,
        Keyboard
    }
    interface Event {
        timestamp: number;
    }
    interface MouseEvent extends Event {
        x: number;
        y: number;
    }
    interface KeyEvent extends Event {
        Keycode: number;
    }

    function listenEvent(eventType: EventType, handler: (n: Event) => void) {

    }
    listenEvent(EventType.Mouse, (e: Event) => console.log(123))
    // listenEvent(EventType.Mouse, (e:KeyEvent) => console.log(123))

}

namespace D {
    /* 不同枚举类型不能兼容 */
    enum Status {
        Ready,
        Waiting,
    }
    enum Color {
        Red,
        Blue,
        Green
    }
    let status = Status.Ready
    // status = Color.Red // error, 不同枚举类型会报错
}

namespace E {
    /* 类的兼容 */
    class Status {
        description: string;
        constructor() {
            this.description = '这是描述状态的'
        }
    }

    class Color {
        description: string;
        constructor() {
            this.description = '这是描述颜色的'
        }
    }
    let a: Status = new Color(); //类只校验实例对象的属性
    let b: Color = new Status(); 
}

