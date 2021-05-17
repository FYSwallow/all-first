/* 
    枚举
*/

namespace A {
    enum Direction {
        Up=1,
        Down,
        Left=2,
        Right,
    }
    console.log(Direction)
    let left: number = Direction.Down
    let right: string = Direction[1]
    console.log(left, right)
}