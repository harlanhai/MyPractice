
/**
 * 414. 第三大的数
 * 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
  示例 1：
    输入：[3, 2, 1]
    输出：1
    解释：第三大的数是 1 。
  示例 2：
    输入：[1, 2]
    输出：2
    解释：第三大的数不存在, 所以返回最大的数 2 。
  示例 3：
    输入：[2, 2, 3, 1]
    输出：1
    解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
    此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
  提示：
    1 <= nums.length <= 104
    -231 <= nums[i] <= 231 - 1
 */
function thirdMax(nums) {
  console.log(nums);
  let uniqueArr = [];
  // Array deduplication.
  for (let i = 0; i < nums.length; i++) {
    if (uniqueArr.indexOf(nums[i]) === -1) {
      uniqueArr.push(nums[i]);
    }
  }
  
  // Array sort from largest to smallest.
  // for (let i = 0; i < uniqueArr.length; i++) {
  //   for (let j = 0; j < uniqueArr.length - i; j++) {
  //     if (uniqueArr[j] < uniqueArr[j + 1]) {
  //       let temp = uniqueArr[j];
  //       uniqueArr[j] = uniqueArr[j + 1];
  //       uniqueArr[j + 1] = temp;
  //     }
  //   }
  // }
  uniqueArr.sort((a,b) => a - b);
  if (uniqueArr.length < 3) {
    return uniqueArr[uniqueArr.length - 1];
  } else {
    return uniqueArr[uniqueArr.length - 2];
  }
}
// let val = thirdMax([3, 2, 1])
thirdMax([1,2])
// thirdMax([2, 2, 3, 1])
// console.log(val);