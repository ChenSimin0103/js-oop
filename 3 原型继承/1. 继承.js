function Shape(color) {
    this.color = color
}
Shape.prototype.show = function () {
    console.log('show this shape');
}

function Circle(radius, color) {
    Shape.call(this, color)

    this.radius = radius
}
Circle.prototype.draw = function () {
    console.log('draw');
}

// 使用Object.create()实现继承，同时注意重设构造器属性
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

// 创建
const s = new Shape()
const c = new Circle(1, 'blue')