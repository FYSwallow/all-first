/* 
    实现一个队列
    向队列尾部添加一个新的项： enqueue
    移除队列第一项： dequeue
    返回队列的第一项： peek
    判断队列是否为空： isEmpty
    返回队列的长度： size
    清空队列： clear
*/

function Queue() {
    this.items = []
}

Queue.prototype.enqueue = function(item) {
    this.items.push(item)
}
Queue.prototype.dequeue = function() {
    this.items.shift()
}
Queue.prototype.peek = function() {
    return this.items[0]
}
Queue.prototype.size = function() {
    return this.items.length
}
Queue.prototype.isEmpty = function() {
    return this.size() === 0
}

/* 
    使用数组去删除队列第一项时性能不好，使用对象去保存
*/

function ObjQueue() {
    this.items = {} //保存队列
    this.count = 0 //队列长度
    this.delIndex = 0 //队列删除元素的位置
}

ObjQueue.prototype.enqueue = function(item) {
    this.items[this.count++] = item
}
ObjQueue.prototype.dequeue = function() {
    if (this.isEmpty()) {
        return undefined
    }
    const result = this.items[this.delIndex]
    delete this.items[this.delIndex++]
    return result
}
ObjQueue.prototype.peek = function() {
    if (this.isEmpty()) {
        return undefined
    }
    return this.items[this.delIndex]
}

ObjQueue.prototype.size = function() {
    return this.count - this.delIndex
}

ObjQueue.prototype.isEmpty = function() {
    return this.count === this.delIndex
}

ObjQueue.prototype.clear = function() {
    this.items = {}
    this.count = 0
    this.delIndex = 0
}