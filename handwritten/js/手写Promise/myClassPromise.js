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
class myPromise {
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFufilledCbs = [];
    this.onRejectedCbs = [];

    // new myPromise后立即执行
    executor(this.resolve, this.reject);
  }

  resolve = (val) => {
    if (this.status === 'pending') {
      this.status = 'fulfilled';
      this.value = val;

      // 判断是否有成功的回调函数
      this.onFufilledCbs.forEach(fn => fn())
    }
  };

  reject = (val) => {
    if (this.status === 'pending') {
      this.status = 'reject';
      this.reason = val;

      // 判断是否有失败的回调函数
      this.onRejectedCbs.forEach(fn => fn())
    }
  };
  // 调用then方法
  then(onFufilled, onRejected) {
    if (this.status === 'fulfilled') {
      onFufilled(this.value);
    } else if (this.status === 'reject') {
      onRejected(this.reason);
    } else if (this.status === 'pending') { 
      // 保存成功回调函数
      this.onFufilledCbs.push(() => {
        onFufilled(this.value)
      })
      // 保存失败回调函数
      this.onRejectedCbs.push(() => {
        onRejected(this.reason)
      })
    }
  }
}

new myPromise(function (resolve, reject) {
  setTimeout(() => {
    resolve(123);
  }, 1000);
}).then(function (x) {
  console.log(x);
});
