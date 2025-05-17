/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 边界情况处理
  if (s.length === 0 || t.length === 0 || s.length < t.length) {
    return '';
  }
  // 统计 t 中每个字符的出现次数
  const tMap = new Map();
  for (let c of t) {
    tMap.set(c, (tMap.get(c) || 0) + 1);
  }

  // 需要匹配的字符种类数
  const required = tMap.size;
  // 当前窗口中已匹配的字符种类数
  let formed = 0;

  // 窗口中字符的计数
  const wMap = new Map();

  // 定义双指针
  let left = 0,
    right = 0;

  // 记录最小窗口信息
  let minLen = Infinity;
  let minLeft = 0;

  while (right < s.length) {
    // 扩大窗口，加入右边界字符
    const char = s[right];
    wMap.set(char, (wMap.get(char) || 0) + 1);
    // 检查当前字符是否满足了t中的要求
    if (tMap.has(char) && wMap.get(char) === tMap.get(char)) {
      formed++;
    }

    // 尝试收缩窗口，直到无法满足条件
    while (left <= right && formed === required) {
      const char = s[left];
      // 更新最小窗口
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minLeft = left;
      }
      // 移除左边界字符
      wMap.set(char, wMap.get(char) - 1);
      if (tMap.has(char) && wMap.get(char) < tMap.get(char)) {
        formed--;
      }
      // 收缩窗口
      left++;
    }
    // 扩大窗口
    right++;
  }
  return minLen === Infinity ? '' : s.substring(minLeft, minLeft + minLen);
};
/**
  解题思路：
    本题主要使用滑动窗口技术
    1. 使用Map记录字符串t中每个字符的出现次数；
    2. 使用双指针维护一个滑动窗口
    3. 右指针扩大窗口，直到包含所有 t 中的字符
    4. 左指针收缩窗口，尝试找到最小覆盖子串
    5. 重复步骤 3-4，记录最小的符合条件的子串
  复杂度分析：
    时间复杂度：O(|s| + |t|)，每个字符最多被访问两次
    空间复杂度：O(|s| + |t|)，两个哈希表存储字符频次
 */
s = "ADOBECODEBANC", t = "ABC"
console.log(minWindow(s, t));