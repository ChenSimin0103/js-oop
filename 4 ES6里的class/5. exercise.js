// 练习：创建一个有 栈(stack)功能的 class

// 内部属性和方法使用 WeakMap
const _items = new WeakMap()

class Stack {
    constructor() {
        _items.set(this, [])
    }

    // 挂在原型上的方法
    // 入栈
    push(obj) {
        const items = _items.get(this)
        // 校验
        if(obj === undefined || obj === null) throw new Error('不能传入空值')
        
        items.push(obj)
        return obj
    }
    // 出栈
    pop() {
        const items = _items.get(this)
        // 校验
        if(items.length === 0) throw new Error('栈是空的')
        
        return items.pop()
    }
    // 查看栈顶元素
    peek() {
        const items = _items.get(this)
        // 校验
        if(items.length === 0) throw new Error('栈是空的')

        return items[items.length - 1]
    }
    // 定义只读属性count
    get count () {
        return _items.get(this).length
    }
}

const me = new Stack()