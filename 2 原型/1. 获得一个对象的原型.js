// 定义一个对象
let person = { name: 'simin' }
// 获取原型属性
let objectBase = Object.getPrototypeOf(person)
// 获取属性描述
let descript = Object.getOwnPropertyDescriptor(objectBase, 'toString')
// console.log(descript)

// { value: [Function: toString],  
//     writable: true,
//     enumerable: false,
//     configurable: true }
// 属性解释：方法实现:value ; 可重写 ; 不可遍历出来（迭代器，for-in）
// configuraable 表示属性是否能被删除，置为false后不能再置为true

// 自定义name的属性
Object.defineProperty(person, 'name', {
    configurable: false,
    writable: false,
    enumerable: false,
})
// 将无法遍历此属性
console.log(Object.keys(person))
// 将无法删除此属性
delete person.name