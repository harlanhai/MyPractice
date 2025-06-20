/**
 * 使用JavaScript实现二分搜索（二分查找）
 * 算法思路：
 *  1. 定义左右两个变量来保存查找的数组下标
 *  2. 通过左节点加右节点除以2来不断缩短数组长度
 *  3. 找到和目标相等的值返回下标，没有返回-1
 * 复杂度分析：
 *  时间复杂度： O(logn)，二分都是logn；
 *  空间复杂度：O(1)，无额外空间占用。
 */
function binarySearch(arr, target) {
  // 获取数组起始节点下标和末尾节点下标
  let left = 0;
  let right = arr.length -1;

  // 循环判断
  while(left <= right) {
    // 获取中间下标
    let mid = Math.floor((right + left) / 2);
    console.log("middle index: ", mid);
    if(arr[mid] === target) {
     return mid;
    } else if(arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
// 使用示例：
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
const target = 6;
console.log(binarySearch(array, target)); // 输出：6