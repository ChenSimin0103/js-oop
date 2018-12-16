// 工厂模式
// 定义
function createCircle(radius) {
    // 其实这里是return new Object({...args}) 的简写
    return {
        radius,
        draw: function () {
            console.log(`draw a radius=${this.radius} circle`);
        }
    }
}
// 使用
const circle = createCircle(7)
circle.draw()

// 使用构造函数：首字母大写，使用new来实例化
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log(`draw a radius=${this.radius} circle`);
    }
}
// 使用
// new 操作符创建了一个空对象，设置它的this指向构造函数，然后从构造函数返回这个对象
const circle2 = new Circle(9)
circle2.draw()

// 还有其他的构造函数，如：
// new Object()
// new Array()
// new Function()
// new String()
// new Boolean()
// new Number()
// new Symbol()