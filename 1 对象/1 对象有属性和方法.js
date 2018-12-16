// 定义对象
const circle = {
    // 对象的属性 property
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    // 对象的方法 method
    caluArea: function () {
        const area = 3.14 * this.radius * this.radius
        console.log(area);
    }
}

// 访问属性
console.log(circle.location);
// 使用方法
console.log(circle.caluArea());
