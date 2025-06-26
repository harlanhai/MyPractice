/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 * 解题思路：
 *  通过二分法来逐步缩小范围，获取与选出的数字相等
 * 复杂度分析：
 *  时间复杂度：O(logn)，二分发都是logn；
 *  空间复杂度：O(1)， 无额外的空间占用。
 */
var guessNumber = function (n) {
  let left = 1,
    right = n;
  while (left <= right) {
    // 取中间值
    let mid = Math.floor((left + right) / 2);
    // 通过 guess 函数获取是否等于随机值
    const res = guess(mid);
    if (res === -1) {
      // 你猜的数字比我选出的数字大
      right = mid - 1;
    } else if (res === 0) {
      // 你猜的数字与我选出的数字相等
      return mid;
    } else {
      // 你猜的数字比我选出的数字小
      left = mid + 1;
    }
  }
};
