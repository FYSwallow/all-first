/* 
    函数声明的两种方式
*/

namespace funcBlock1 {
    function add1(x: number, y:number): number {
        return x + y
    }

    let add2: (val1: number, val2: number) => number = function(x: number, y: number):number{
        return x + y
    }

    /* ts也可自动推断类型 */
    let add3 = function(x: number, y: number):number {
        return x + y
    }
    let add4: (val1: number, val2: number) => number = function(x, y) {
        return x + y
    }

}


/* 
    参数的类型
*/
namespace funcBlock2 {
    // 默认参数
    function build(first: string, two: string = 'test') {
        return first + two
    }
    console.log(build('wang'))
    console.log(build('wang', 'run'))

    // 可选参数, 必须放在参数最后位置
    function build2(first: string, two?: string): string {
        return first + two
    }
    //剩余参数
    function build3(first: string, two: string, ...rest:Array<number | string>): string {
        let result: string = ''
        rest.forEach(item => {
            result += item
        })
        return first+ two +result
    }

    console.log(build3('first', 'two', 10, 12, 'last'))
}

/* 
    this指向问题和箭头函数
*/

namespace funcBlock3 {
    let deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function() {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
    
                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    }
    
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    
    alert("card: " + pickedCard.card + " of " + pickedCard.suit);
}