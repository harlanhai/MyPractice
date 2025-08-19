// 使用JavaScript实现选择排序
// 算法思路：
//  1. 一级循环，循环一遍数组，
//  2. 二级循环，从一级下标+1开始循环
//  3. 设一级循环当前位置为最小值的索引，然后再剩余部分开始遍历判断是否有比当前值更小的
//  4. 有比当前值更小的则替换掉最小下标值，二级循环结束后把当前值替换成最小下标的值
//  5. 返回数组
// 复杂度分析：
//  时间复杂度：O(n²)，两层 for 循环；
//  空间复杂度：O(1)，原数组上修改，没有额外的空间。
function selectionSort(arr) {
  // 创建数组副本，避免修改原数组
  const len = arr.length;

  // 遍历数组
  for(let i = 0; i < len; i++) {
    // 设当前位置为最小值的索引
    let minIndex = i;

    // 在剩余未排序部分中找到最小值的索引
    for(let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 判断当前索引是不是最小值
    if(minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

let arr = [5, 3, 2, 4, 1];
console.log(selectionSort(arr)); // 输出: [1, 2, 3, 4, 5]