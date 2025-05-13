/**
 * 349. 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 解题思路：
 * 解法一：
 *  1. 通过Set对象来去重数组
 *  2. 通过filter方法来过滤数组，返回交集
 * 解法二：
 *  1. 选择较小的数组创建 Set，减少空间占用
 *  2. 遍历另一个数组，判断是否在 Set 中
 */
// 解法一
var intersection = function (nums1, nums2) {
  // 将数组转换为 Set，自动去重
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // 返回两个集合的交集
  return [...set1].filter((num) => set2.has(num));
};
// 解法二 使用一个 Set 优化
function intersection2(nums1, nums2) {
  // 选择较小的数组创建 Set，提高效率
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const set1 = new Set(nums1);
  const result = [];

  // 遍历另一个数组
  for (const num of nums2) {
    if (set1.has(num)) {
      result.push(num);
      set1.delete(num); // 避免重复添加
    }
  }

  return result;
}
// 解法三 双指针（需要先排序）
function intersection(nums1, nums2) {
  // 排序两个数组
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0,
    j = 0;
  const result = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      // 避免重复添加相同元素
      if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
        result.push(nums1[i]);
      }
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}
// nums1 = [1,2,2,1], nums2 = [2,2]
(nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4]);
console.log(intersection(nums1, nums2));
/*
复杂度分析
解法一（Set + filter）：
  时间复杂度：O(m + n)，m和n分别是两个数组的长度，Set的构造和filter方法都需要遍历一次数组。
  空间复杂度：O(m + n)，m和n分别是两个数组的长度，需要使用两个存储空间来保存去重后的数组。
  
解法二（单 Set）：
  时间复杂度：O(m + n)，m和n分别是两个数组的长度，for循环和Set的has方法都需要遍历一次数组。
  空间复杂度：O(min(m, n))，m和n分别是两个数组的长度，只需要把较短的数组保存起来。

解法三（双指针）：
  时间复杂度：O(mlogm + nlogn)
  空间复杂度：O(1)
*/
