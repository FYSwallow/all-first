/* 
    链表基本内容
    向链表尾部添加一个节点： push(node)
    向链表某个位置插入一个节点： insert(node, position)
    返回链表中特定位置的元素： getElementAt(index)
    从链表中移除一个元素： remove(element)
    返回元素在链表中的索引： indexOf(element)
    从链表的特定位置移除一个元素： removeAt(position)
    链表中是否不包含任何元素： isEmpty()
    返回链表包含的个数： size()
    返回表示整个链表的字符串： toString()
*/

function LinkedList() {
    this.count = 0
    this.head = null
}

function Node(element) { // 链表节点
    this.element = this.element
    this.next = undefined
}

LinkedList.prototype.push = function(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
        this.head = node
    } else {
        current = this.head
        while(current.next) {
            current = current.next
        }
        current.next = node
    }
    this.count ++ //链表长度加1
}

LinkedList.prototype.removeAt = function(position) {
    if (position >= 0 && position < this.count) {
        let current = this.head
        if (position === 0) {
            this.head = current.next
        } else {
            let index = 0, previous
            while (index < position) {
                previous = current
                current = current.next
                index ++
            }
            previous.next = current.next
        }
        this.count --
        return current.element
    }
    return undefined
}
LinkedList.prototype.getElementAt = function(position) {
    if (position >= 0 && position < this.count) {
        let current = this.head, index = 0
        while (index < position) {
            current = current.next
            index ++
        }
        return current
    }
    return undefined
}
LinkedList.prototype.insert = function(element, position) {
    if (position >= 0 && position < this.count) {
        const node = new Node(element)
        if (index === 0) {
            const current = this.head
            node.next = current
            this.head = node
        } else {
            const previous = this.getElementAt(position - 1)
            const current = previous.next
            previous.next = node
            node.next = current
        }
        this.count++
        return true
    }
    return false
}
LinkedList.prototype.indexOf = function(element) {
    if (position >= 0 && position < this.count) {
        let current = this.head, index = 0
        while (index<this.count && current!=null) {
            if (current.element === element) {
                return index
            }
            index++
        }
        return -1
    }
    return -1
}
LinkedList.prototype.remove = function(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
}
LinkedList.prototype.size = function() {
   return this.count
}
LinkedList.prototype.isEmpty = function() {
   return this.count === 0
}
LinkedList.prototype.getHead = function() {
   return this.head
}
