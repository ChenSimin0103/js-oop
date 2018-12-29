class Shape {
    constructor(color) {
        this.color = color
    }
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        // 调用super方法向父类传构造器参数
        super(color)
        this.radius = radius
    }
    draw() {
        super.move()
        console.log('draw')
    }
}

const me = new Circle('red', 4)
console.log(me);
