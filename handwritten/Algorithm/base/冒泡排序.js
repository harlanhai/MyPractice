// 冒泡排序
// 算法思路：
//  通过循环比较，把较大的数往后放，较小的往前放
// 时间复杂度： O(n²)，空间复杂度：O(1)
function bubbleSort(arr) {
  const len = arr.length;
  for(let i = 0; i < len - 1; i++){
    for(let j = 0; j < len - 1 - i; j++) {
      // 判断后面一位是否大于前一位
      if (arr[j] > arr[j+1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let arr = [5, 3, 8, 4, 6];
console.log(bubbleSort(arr));  // 输出：[3, 4, 5, 6, 8]