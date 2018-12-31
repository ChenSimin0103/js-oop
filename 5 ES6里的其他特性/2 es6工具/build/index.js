"use strict";

var qq = [1, 2, 3];

var ww = qq.map(function (item) {
  var obj = {};
  obj[item + "\u7684\u5E73\u65B9\u662F"] = item * item;
  return obj;
});

console.log(ww);
