//1.手写函数柯里化
function curry(fn) {
  // fn为原始函数（返回执行结果）
  // args为包装器参数（保存函数循环调用参数）
  return function curried(...args) {
    // 判断传入的参数是否需要柯里化
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      // 当柯里化参数(curryParams)小于调用原始函数(sum)的参数时，执行迭代
      return (...nextParams) => curried(...args, ...nextParams);
    }
  }
}
function sum(a, b, c) {
  return a + b + c;
}
let curriedSum = curry(sum);

console.log("curry1:", curriedSum(1, 2, 3)); // 6, still callable normally
// console.log("curry2:", curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log('curry3:', curriedSum(1)(2)(3)); // 6, full currying
// curriedSum(1)(2)(3)