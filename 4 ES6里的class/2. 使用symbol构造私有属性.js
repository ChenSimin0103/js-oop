// 注意：向外隐藏内部变量和方法
// 使用symbol注册的内部属性或方法，只能通过注册时使用的symbol去访问
const _radius = Symbol()
const _draw = Symbol()

class Circle {
    constructor(radius){
        // this.radius = radius
        this[_radius] = radius
    }

    [_draw](){
        console.log('draw');
    }
}

const c = new Circle(5)

console.log(c[_radius]);
