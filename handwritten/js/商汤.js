// 1、for循环输出正确的值

// 2、对象添加属性
var obj = {
  2: 3,
  3: 4,
  length: 2,
  push: Array.prototype.push,
};
console.log(obj);
obj.push(1);
obj.push(2);
console.log(obj); // {2: 1, 3: 2, length: 4}
/* 解析
第一次 push(1)：
  push 方法会将值 1 添加到索引 2 的位置（因为 length 是 2）。
  索引 2 的值从 3 被覆盖为 1。
  length 更新为 3。
  此时 obj 变为：
  {
    2: 1,  // 原来的 3 被覆盖
    3: 4,
    length: 3,
    push: Array.prototype.push,
  }
第二次 push(2)：
  push 方法会将值 2 添加到索引 3 的位置（因为 length 是 3）。
  索引 3 的值从 4 被覆盖为 2。
  length 更新为 4。
  此时 obj 变为：
  {
    2: 1,
    3: 2,  // 原来的 4 被覆盖
    length: 4,
    push: Array.prototype.push,
  }
最终，obj 的属性为：
  2: 1：索引 2 的值为 1。
  3: 2：索引 3 的值为 2。
  length: 4：长度为 4。
  push: Array.prototype.push：仍然是借用的 push 方法。
*/

// 3、写一个方法实现输入[0,1,2,3,5,6,8,10],输出'0~3,5~6,8,10'
function filterNum(arr) {
  let outStr = '',
    firstNum = '';
  for (let i = 0; i < arr.length; i++) {
    // 判断是否是第一个数字
    if (firstNum === '') {
      firstNum = arr[i].toString();
      if(i) {
        outStr += `,${firstNum}`;
      } else {
        outStr = firstNum;
      }
    }
    // 判断是否连续
    if (arr[i] + 1 !== arr[i + 1]) {
      // 不连续保存到数组
      if (firstNum !== arr[i].toString()) {
        outStr += `~${arr[i].toString()}`;
      }
      firstNum = '';
    } else {
      // outStr += arr[i].toString();
    }
  }
  return outStr;
}
const res = filterNum([0, 1, 2, 3, 5, 6, 8, 10]);
console.log(res);
