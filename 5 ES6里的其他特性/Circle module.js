// 实现细节
const _radius = new WeakMap();

// 暴露公共接口
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  // 定义原型方法
  draw() {
    console.log('radius in Circle is ' + _radius.get(this));
  }
}

const c = new Circle();
const r = _radius.get(c);

// module.exports = Circle;

export default Circle

// 注意：因为只公开了 Circle 类，所以外部引用 Circle 时，无法通过 _radius,get(c) 得到内部变量，实现了抽象，隐藏内部实现细节
