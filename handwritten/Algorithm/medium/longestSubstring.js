/**
 * 3. 无重复字符的最长子串
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
 *  示例 1:
      输入: s = "abcabcbb"
      输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

    示例 2:
      输入: s = "bbbbb"
      输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

    示例 3:
      输入: s = "pwwkew"
      输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。

    请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
    提示：
      0 <= s.length <= 5 * 104
      s 由英文字母、数字、符号和空格组成
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 滑动窗口左边界
  let l = 0;
  // 最长子串长度
  let maxLen = 0;
  // 记录字符最后出现的位置
  let lastMap = new Map();

  // 遍历字符串，r作为窗口的右边界
  for (let r = 0; r < s.length; r++) {
    // 如果当前字符已经在窗口中存在
    if (lastMap.has(s[r]) && lastMap.get(s[r]) >= l) {
      // 把左边界移动到重复字符的下一位
      l = lastMap.get(s[r]) + 1;
    }
    // 更新当前字符的位置
    lastMap.set(s[r], r);
    // 计算当前窗口的长度
    let curLen = r - l + 1;
    maxLen = Math.max(maxLen, curLen);
  }
  return maxLen;
};
/**
 * 解题思路：
 *  本题主要使用滑动窗口技术
 *  1. 维护一个窗口，保证窗口内的值不重复；
 *  2. 如果遇到重复字符，则将窗口的左边界移动到重复字符的下一位；
 *  3. 每次更新窗口的长度，取最大值；
 *  4. 返回最大值即为最长子串的长度；
 * 
 * 复杂度分析：
 *  时间复杂度：O(n)，最坏情况下，字符串的长度为n，窗口的右边界r需要遍历n次，左边界l也需要遍历n次，所以时间复杂度为O(n)；
 *  空间复杂度：O(min(m, n))，m是滑动窗口的大小，不同字符所用存储空间不同， n是字符串长度；
 */
lengthOfLongestSubstring(' '); // 3
