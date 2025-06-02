/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * 解法一：哈希表 + 排序
 * 时间复杂度：O(nlogn)，主要是排序的时间复杂度；
 * 空间复杂度：O(n)，用于存储哈希表；
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  // 1. 统计每一个元素的频率
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  // 2. 将频率转换成数组并按降序排序
  const res = Array.from(map.entries());
  res.sort((a, b) => b[1] - a[1]);

  // 3. 取前 K 个元素
  return res.slice(0, k).map((item) => item[0]);
};

/**
 * 解法二：桶排序
 * 解题思路：
 *  1. 统计每一个元素的频率
 *  2. 创建桶，桶的索引表示频率
 *  3. 将元素放入对应频率的桶中
 *  4. 按频率从高到底收集元素
 *  5. 截取 k 位数组
 * 时间复杂度：O(n)，n 为数组长度；
 * 空间复杂度：O(n)，用于存储哈希表和桶；
 */
var topKFrequentBucket = function (nums, k) {
  const map = new Map();
  // 1. 统计每一个元素的频率
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  // 2. 创建桶，桶的索引表示频率
  const buckets = new Array(nums.length + 1);
  for(let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // 3. 将元素放入对应频率的桶中
  for (let [num, freq] of map) {
    buckets[freq].push(num);
  }

  // 4. 按频率从高到底收集元素
  const res = [];
  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
    if(buckets[i].length > 0) {
      res.push(...buckets[i])
    }
  }

  // 5. 截取 k 位数组 
  return res.slice(0, k);
};

console.log(topKFrequentBucket([1, 1, 1, 2, 2, 3], 2));
