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

export default Circle