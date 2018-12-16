// 隐藏实现细节和复杂内容
// 创建私有属性和方法 Object.defineProperty()
function Circle(radius) {
    this.radius = radius;
    const _defaultLocation = { x: 1, y: 1 }
    const _draw = function() {
        console.log('draw the circle');
    }
    this.draw = function () {
        console.log(`draw a radius=${this.radius} circle`);
    }
    // 自定义属性，来限制属性的可读可写操作，实现内部属性不能被修改的需求
    Object.defineProperty(this, '_defaultLocation', {
        get: function () {
            return _defaultLocation
        },
        set: function (val) {
            // 在此可写对val的参数校验
            console.log(' _defaultLocation cannot changed!')
        }
    })
    // 自定义方法
}

const circle = new Circle()
console.log(circle._defaultLocation)
circle._defaultLocation = {x: 1, y:2}


