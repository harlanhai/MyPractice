// 统计函数耗时时长
// 在函数内统计会造成变量污染
function test() {
  // 开始
  let startTime = Date.now();
  console.log(1);
  let endTime = Date.now();
  console.log(`执行时间：${endTime - startTime} 毫秒`);
}

Function.prototype.before = function(fn) {
  let _self = this;
  return function() {
    fn.apply(_self, arguments);
    _self.apply(_self, arguments);
  }
}