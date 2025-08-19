// 使用JavaScript实现插入排序
// 算法思路：
//  1. 从数组的第二个元素开始插入，
//  2. 循环已排序部分，将大于当前元素的元素往后移一位，当前元素插入该位置
//  3. 返回数组
// 复杂度分析：
//  时间复杂度：O(n²)，两层循环；
//  空间复杂度：O(1)，原数组上修改，没有额外的空间。
function insertionSort(arr) {
  // 创建数组副本，避免修改原数组
  const len = arr.length;

  // 遍历数组，从第二个元素开始循环
  for (let i = 1; i < len; i++) {
    // 定义当前元素
    const currentEle = arr[i];
    // 定义已排序部分最后元素索引
    let j = i - 1;

    // 循环已排序部分，将大于当前元素的元素往后移一位
    while(j >= 0 && arr[j] > currentEle) {
      arr[j + 1] = arr[j];
      j--;
    }
    // 当前元素插入该位置
    arr[j + 1] = currentEle;
  }
  return arr;
}

let array = [12, 11, 13, 5, 6];
console.log('Sorted array is:', insertionSort(array));
