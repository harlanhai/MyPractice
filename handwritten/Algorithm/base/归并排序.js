/**
 * 实现归并排序
 * @param {*} arr 
 * @returns 
 * 算法思路：
 *  1. 把原数组通过从中间分割成单个元素的数组
 *  2. 再把数组重组并排序，通过递归循环来
 * 复杂度分析：
 *  时间复杂度：O(nlogn)，二分是logn，拆合的循环是 n；
 *  空间复杂度：O(n)，保存合并后的数组；
 */
function mergeSort(arr) {
  // 数组长度小于 1 退出递归
  if (arr.length <= 1) {
    return arr;
  }

  // 拆分数组
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  // 递归排序左右两边数组
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

// 合并数组
function merge(leftArr, rightArr) {
  let result = [];
  let leftIndex = 0, rightIndex = 0;

  // 比较两个数组元素，将较小的放入结果数组
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex++]);
    } else {
      result.push(rightArr[rightIndex++]);
    }
  }

  // 将剩余元素放入结果数组
  while(leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex++])
  }
  while(rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex++])
  }
  return result;
}
const arr1 = [64, 34, 25, 12, 22, 11, 90];
mergeSort(arr1)