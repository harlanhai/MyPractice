/**
 * 顺序搜索
 * 算法思路：
 *  循环数组找到目标元素返回下标
 * 复杂度分析：
 *  时间复杂度：最好情况下是 O(1)，最坏情况下 O(n)；
 *  空间复杂度：O(1)，只使用了常数级别的额外空间。
 */
function sequentialSearch(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === target)
      return i;
  }
  return -1;
}
// 测试数据
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sequentialSearch(arr, 5)); // 输出: 4
console.log(sequentialSearch(arr, 10)); // 输出: -1