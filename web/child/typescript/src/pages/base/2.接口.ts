/* 
    接口
*/

interface LabelledValue {
    label: string;
}

function printLabel(labelObj: LabelledValue) {
    console.log(labelObj.label)
}

//可选状态
interface SquareConfig {
    color?: string;
    width?: number;
}

interface SquareItem {
    color: string;
    area: number;
}
function createSquare(config: SquareConfig):SquareItem {
    let newSquare: SquareItem = {color: 'red', area: 50}
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

console.log(createSquare({color: 'blue'}))