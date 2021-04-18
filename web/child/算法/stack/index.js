/* 
    实现一个栈类,该对象存在的方法
    1. 添加一个新元素到栈顶: push
    2. 移除栈顶元素： pop
    3. 返回栈顶元素： peek（不修改栈顶元素）
    4. 判断栈元素是否为空: isEmpty
    5. 移除栈里的所有元素： clear
    6. 返回栈里的元素个数： size
*/

function Stack() {
    this.items = [];
}

Stack.prototype.push = function(item) {
    this.items.push(item)
}
Stack.prototype.pop = function() {
    return this.items.pop()
}
Stack.prototype.peek = function() {
    return this.items[this.items.length - 1]
}
Stack.prototype.isEmpty = function() {
    return this.items.length === 0
}
Stack.prototype.size = function() {
    return this.items.length
}
Stack.prototype.clear = function() {
    this.items = []
}


