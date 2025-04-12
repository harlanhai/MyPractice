/**
 * 使用 ES6 实现 apply
 * @param {*} context | 在函数运行时使用的 this 值
 * @param  {...any} args | 一个数组或者类数组对象
 * @returns
 */
Function.prototype.myApply = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Not a function");
  }
  const fn = this;
  let result = null;
  context = context || window;
  argus = argus && argus[0] | [];
  context.fn = fn;
  result = context.fn(...argus);
  delete context.fn;
  return result;
};
