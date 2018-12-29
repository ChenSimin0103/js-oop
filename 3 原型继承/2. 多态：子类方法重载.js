// 
// 抽象继承函数
// 注意：使用Object.create()创建继承不能继承实例的方法（定义在构造函数中而不是构造函数原型中的方法），解决方法是用 : Child.prototype = new Parent()
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    // Child.prototype = new Parent()
    Child.prototype.constructor = Child
}
// 定义父类及方法
function Shape() { 
    this.hello = function() {
        console.log('hello');
    }
 }
Shape.prototype.draw = function () {
    console.log('draw a shape');
}

// 定义子类Circle 和 Square 及自己的draw方法
function Circle() { }
extend(Circle, Shape)
Circle.prototype.draw = function () {
    console.log('draw a circle');
}

function Square() { }
extend(Square, Shape)
Square.prototype.draw = function () {
    console.log('draw a square');
}

// 多态：相同的方法在不同对象中有不同的实现方式
const shapes = [
    new Shape(),
    new Circle(),
    new Square(),
]
for (s of shapes) { s.draw() }