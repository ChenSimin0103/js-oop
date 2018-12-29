function Circle(radius) {
    this.radius = radius,
    this.draw = function() {
        this.move()
        console.log('draw' + this.radius);
    }
}

// 往原型上挂新方法，但此方法会被实例属性，也就是在构造函数中声明实现的覆盖(就近原则)
// 可以复写Circle对象的原型上的方法，比如 toString()
Circle.prototype.move = function() {
    console.log('move in Circle.prototype');
}
Circle.prototype.draw = function() {
    console.log('draw in Circle.prototype');
}

const c1 = new Circle(1)
const c2 = new Circle(2)

// 注意：神奇的一点是，实例方法里可以调用原型方法，原型方法也里可以调用实例方法（虽然实例方法在原型方法之后）

// 注意：通过每个对象的原型方法 hasOwnProperty('属性名')，只能在控制台访问，可以得知某个属性是原型方法还是实例方法(原型和实例上都有的话，是真正在用的那个)


