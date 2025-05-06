/**
 * func: 手写Promise
 * author: Harlan
 * promise/A+ 规范
    promise 有三个状态：pending，fulfilled，or rejected；「规范 Promise/A+ 2.1」
    new promise时， 需要传递一个executor()执行器，执行器立即执行；
    executor接受两个参数，分别是resolve和reject；
    promise  的默认状态是 pending；
    promise 有一个value保存成功状态的值，可以是undefined/thenable/promise；「规范 Promise/A+ 1.3」
    promise 有一个reason保存失败状态的值；「规范 Promise/A+ 1.5」
    promise 只能从pending到rejected, 或者从pending到fulfilled，状态一旦确认，就不会再改变；
    promise 必须有一个then方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 和 promise 失败的回调 onRejected；「规范 Promise/A+ 2.2」
    如果调用 then 时，promise 已经成功，则执行onFulfilled，参数是promise的value；
    如果调用 then 时，promise 已经失败，那么执行onRejected, 参数是promise的reason；
    如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调onRejected；
    then 的参数 onFulfilled 和 onRejected 可以缺省，如果 onFulfilled 或者 onRejected不是函数，将其忽略，且依旧可以在下面的 then 中获取到之前返回的值；「规范 Promise/A+ 2.2.1、2.2.1.1、2.2.1.2」
    promise 可以 then 多次，每次执行完 promise.then 方法后返回的都是一个"新的promise"；「规范 Promise/A+ 2.2.7」
    如果 then 的返回值 x 是一个普通值，那么就会把这个结果作为参数，传递给下一个 then 的成功的回调中；
    如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个 then 的失败的回调中；「规范 Promise/A+ 2.2.7.2」
    如果 then 的返回值 x 是一个 promise，那么会等这个 promise 执行完，promise 如果成功，就走下一个 then 的成功；如果失败，就走下一个 then 的失败；如果抛出异常，就走下一个 then 的失败；「规范 Promise/A+ 2.2.7.3、2.2.7.4」
    如果 then 的返回值 x 和 promise 是同一个引用对象，造成循环引用，则抛出异常，把异常传递给下一个 then 的失败的回调中；「规范 Promise/A+ 2.3.1」
    如果 then 的返回值 x 是一个 promise，且 x 同时调用 resolve 函数和 reject 函数，则第一次调用优先，其他所有调用被忽略；「规范 Promise/A+ 2.3.3.3.3」
 */
function myPromise(executor) {
  const _this = this;
  _this.status = "pending"; // 定义改变前的状态
  _this.value = undefined; // 保存成功状态的值
  _this.reason = undefined; // 保存失败状态的值
  _this.onResolvedCbs = []; // 保存成功的回调
  _this.onRejectedCbs = []; // 保存失败的回调

  // 成功时调用此方法
  function resolve(value) {
    // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
    if (_this.status === "pending") {
      _this.value = value;
      _this.status = "resolved";
      // 依次执行成功的回调
      _this.onResolvedCbs.forEach((fn) => fn());
    }
  }
  // 失败或异常时调用此方法
  function reject(reason) {
    // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
    if (_this.status === "pending") {
      _this.value = reason;
      _this.status = "rejected";
      // 依次执行失败的回调
      _this.onRejectedCbs.forEach((fn) => fn());
    }
  }
  try {
    // 立即执行，将 resolve 和 reject 函数传给使用者
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}
// 定义promise的then方法
myPromise.prototype.then = function (onFulfilled, onRejected) {
  const _this = this;
  if (_this.status === "resolved") {
    onFulfilled(_this.value);
  } else if (_this.status === "rejected") {
    onRejected(_this.reason);
  } else if (_this.status === "pending") {
    // 如果promise的状态是 pending，需要将 onFulfilled 和 onRejected 函数存放起来，等待状态确定后，再依次将对应的函数执行
    _this.onResolvedCbs.push(() => {
      onFulfilled(_this.value);
    });
    _this.onRejectedCbs.push(() => {
      onRejected(_this.reason);
    });
  }
};
// 测试
new myPromise(function (resolve, reject) {
  setTimeout(() => {
    resolve(1);
  }, 3000);
}).then(function (x) {
  console.log(x);
});
