/**
 * 快速排序
 * @param {*} arr 
 * 算法思路：
 *  1. 选择数组中间元素作为基准值
 *  2. 把小于基准值的元素放入一个数组，大于基准值的放入另一个数组
 *  3. 递归左右数组，并把基准值放中间位置
 *  4. 合并所有数组并返回
 * 
 * 算法复杂度：
 *  时间复杂度：最坏情况 O(n²)，平均情况是 O(logn)，n 是循环数组的长度，logn 是递归的最大深度；
 *  空间复杂度：O(n)或 O(logn)，n 是保存分割数组的空间，logn 是递归的空间。
 */
function quickSort(arr) {
  // 小于 2 个元素不用排序
  if (arr.length < 2) {
    return arr;
  }
  
  // 定义基准值
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  // 定义小于基准值的数组
  const lessPivotArr = [];
  // 定义大于基准值的数组
  const greaterPivotArr = [];

  // 循环数组
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot){
      lessPivotArr.push(arr[i])
    } else {
      greaterPivotArr.push(arr[i])
    }
  }
  return [...quickSort(lessPivotArr), pivot, ...quickSort(greaterPivotArr)]
}

// Test data
const arr = [5, 3, 7, 6, 2, 9];
console.log(quickSort(arr));  // 输出: [2, 3, 5, 6, 7, 9]