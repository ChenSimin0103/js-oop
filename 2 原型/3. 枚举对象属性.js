// Object.keys() 只能枚举实例属性，返回一个数组
console.log(Object.keys(c1));

// for-in 可以枚举实例属性和原型属性，
let keys = []
for(let key in c1) {
    keys.push(key)
}
console.log(keys);

