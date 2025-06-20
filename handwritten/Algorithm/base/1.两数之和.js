/**
 * 1. 两数之和
 * https://leetcode.cn/problems/two-sum/description/
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。你可以按任意顺序返回答案。

示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]

示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]
 */
// 解法一：双循环
var twoSum1 = function (nums, target) {
  let splitArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        splitArr = [i, j];
        break;
      }
    }
  }
  return splitArr;
};
// 解题思路：
//  使用双循环，遍历每个元素，检查数组中是否存在一个其他元素，使得它们的和等于目标值。
// 时间复杂度：O(n²)，其中 n 为数组的长度，由于使用了双重循环，所以时间复杂度为 O(n²)。
// 空间复杂度：O(1)。除了返回值以外，使用的空间为常数。

// 解法二：使用map缓存值
var twoSum2 = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let targetNum = target - nums[i];
    if (map.has(targetNum)) {
      return [map.get(targetNum), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return splitArr;
};
// 解题思路：
//  1.使用 Map 对象存储已经遍历过的元素值和它的索引，
//  2.遍历整个数组，计算目标值减去当前元素的差值，如果这个差值在哈希表中存在，那么就找到了答案。
// 时间复杂度：O(n)，其中 n 为数组的长度，只循环了一遍数组。
// 空间复杂度：O(n)。使用的空间为数组的长度。
const nums = [2, 7, 11, 15],
  target = 9;
twoSum2(nums, target);
