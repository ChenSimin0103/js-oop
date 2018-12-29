// 3. 好的组合胜过继承
//抽象成混合hanshu
function mixin(target, ...sources) {
    // es6的assign方法用于连接多个对象的属性
    Object.assign(target, ...sources)
}

// 定义用于混入的属性组
const canWalk = {
    walk: function() {
        console.log('walking');
    }
}
const canEat = {
    eat: function() {
        console.log('Eating');
    }
}
const canSwim = {
    swim: function() {
        console.log('swimming');
    }
}

// 使用组合的方式创建新的构造函数
function Person() {
    this.kind = 'person'
}
// 注意：对构造函数的原型混入不同的对象，是为组合
mixin(Person.prototype, canWalk, canEat)

