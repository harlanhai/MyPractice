/**
 * leetcode 989. 数组形式的整数加法
 * 地址：https://leetcode-cn.com/problems/add-to-array-form-of-integer/
 * 整数的 数组形式  num 是按照从左到右的顺序表示其数字的数组。
 * 例如，对于 num = 1321 ，数组形式是 [1,3,2,1] 。
 * 给定 num ，整数的 数组形式 ，和整数 k ，返回 整数 num + k 的 数组形式 。
 * 提示：
 *  1 <= num.length <= 104
 *  0 <= num[i] <= 9
 *  num 不包含任何前导零，除了零本身
 *  1 <= k <= 104
 */ 
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
// 解法一，使用for循环逐位相加解法
const addToArrayForm1 = function (num, k) {
  const len = num.length, resArr = [];
  for (let i = len - 1; i >= 0; --i) {
    // 让数组最后一位和目标数组k的个位相加
    let sum = num[i] + k % 10;
    // 去掉数字k的个位数
    k = Math.floor(k / 10);
    // 当前位置的数大于10需要进一，把他加到新的数字k上
    // 并让当前位的数字减10，即为当前的真实数字
    if (sum >= 10) {
      k++;
      sum -= 10;
    }
    resArr.push(sum);
  }
  // 当整数k的位数大于数组时，循环把k的数字放入数组中
  for (; k > 0; k = Math.floor(k / 10)) {
    resArr.push(k % 10);
  }
  return resArr.reverse();
};
// 解法二，使用for循环逐位相加解法
var addToArrayForm2 = function(num, k) {
  const res = [];
  const n = num.length;
  for (let i = n - 1; i >= 0 || k > 0; --i, k = Math.floor(k / 10)) {
      if (i >= 0) {
          k += num[i];
      }
      res.push(k % 10);
  }
  res.reverse();
  return res;
};

// 解法三，使用while循环逐位相加解法
const addToArrayForm3 = function(num, k) {
  let res = [];
  let i = num.length - 1, carry = 0;
  // 当数组num和k都循环完后跳出
  while(i >= 0 || k !== 0) {
      const num1 = i >= 0 ? num[i] : 0;
      const num2 = k !== 0 ? k % 10 : 0;
      const sum = num1 + num2 + carry;
      // 把相加的个位数放到数组中
      res.push(sum % 10);
      // 获取十位上的数字，向前一位进
      carry = Math.floor(sum / 10);
      i--;
      // k 删除个位数字
      k = Math.floor(k / 10);
  }
  // 如果循环最后大于10时，carry的值直接放到数组最后
  if (carry) res.push(carry);
  return res.reverse();
};

// 复杂度分析
// 时间复杂度：O(max(n,logk))，其中 n 为数组的长度。
// 空间复杂度：O(1)。除了返回值以外，使用的空间为常数。
// addToArrayForm([1,2,6,], 534);
// console.log(addToArrayForm([2], 809));
// addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 534);
