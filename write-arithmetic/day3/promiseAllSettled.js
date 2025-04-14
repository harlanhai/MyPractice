/**
 * 33. 实现`Promise.allSettled()`
 * https://bigfrontend.dev/zh/problem/implement-Promise-allSettled/aisolution
 */
if (!Promise.allSettled) {
  // foreach 循环
  // Promise.allSettled = function(promises) {
  //   const result = [];
  //   let count = 0;
  //   promises.forEach((promise, idx) => {
  //     Promise.resolve(promise).then(value => {
  //       result[idx] = { status: "fulfilled", value} 
  //     }, reason => {
  //       result[idx] = { status: "rejected", reason} 
  //     }).finally(() => {
  //       count++;
  //       if(count === promises.length) {
  //         resolve(result);
  //       }
  //     })
  //   })
  // }

  // promise.all
  Promise.allSettled = function(promises) {
    return Promise.all(
      promises.map(p => Promise.resolve(p).then(
        value => ({status: "fulfilled", value}),
        reason => ({status: "rejected", reason})
      ))
    )
  }
}
const promise1 = Promise.resolve("Hello World");
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'error'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'done'));
Promise.allSettled([promise1, promise2, promise3]).then(console.log);