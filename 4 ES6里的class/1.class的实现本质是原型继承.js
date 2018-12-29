class Circle {
    constructor(radius){
        // 创建，添加 实例的属性和方法
        this.radius = radius,
        this.move = function(){
            console.log('move');
        }
    }
    // 创建，添加 原型方法
    draw() {
        console.log('draw');
    }
    // 静态方法
    static parse(str) {
        const radius = JSON.parse(str).r
        return new Circle(radius)
    }
}

// 创建实例
const c = new Circle(7)
// 调用静态方法创建
const c2 = Circle.parse('{"r":66}')