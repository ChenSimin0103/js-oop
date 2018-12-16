// 计算两个数的平均值

// 普通写法
const a = 1
const b = 3
function aver1(num1, num2) {
    return (num1 + num2) / 2
}
// 执行
aver1(a, b)
console.log(aver1(a, b));


// 面向对象写法
const caluAver = {
    a: 1,
    b: 3,
    aver2: function () {
        return (this.a + this.b) / 2
    }
}
// 执行
caluAver.aver2()
console.log(caluAver.aver2());
