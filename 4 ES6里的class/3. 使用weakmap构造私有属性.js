// weakmap: 弱映射对象，其实是一个字典，如果key没有再被使用，就会被回收
// 使用set方法建立映射关系，使用get方法查询映射关系
const _radius = new WeakMap()
const _move = new WeakMap()

class Circle {
    constructor(radius){
        // 建立 本实例到radius属性 的 映射
        _radius.set(this, radius);
        // 注意这里使用箭头函数消除作用域，以保证其他内部函数能调用它，且this指向正确
        _move.set(this, ()=>{
            console.log('move', this);
        })
    }
    // 放在原型上方法
    draw() {
        // 这样调用内部方法
        _move.get(this)();
        console.log(_radius.get(this));
    }
    // 使用getter和setter暴露内部变量（就像es5里用Object.defineproty 实现的一样）
    get radius() {
        console.log('捕获get radius 事件');
        return _radius.get(this)
    }
    set radius(val) {
        // 在此可做校验
        _radius.set(this, val)
    }
}

const c = new Circle(1)
