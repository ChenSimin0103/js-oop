const qq = [1,2,3]

const ww = qq.map(item=>{
  const obj = {}
  obj[`${item}的平方是`] = item*item
  return obj
})

console.log(ww)