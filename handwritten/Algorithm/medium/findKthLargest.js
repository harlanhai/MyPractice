/**
 * 215. 数组中的第K个最大元素
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * 解题思路：
 *  本题主要使用小顶堆来解决
 *  1. 创建一个打下为 k 的小顶堆，堆顶为最小值
 *  2. 如果堆小于 k，直接插入后排序，如果大于 k
 *  3. 判断改值是否小于堆顶元素，大于：先删除堆顶元素，从新排序后，把该值放入堆，小于：不处理
 *  3. 返回堆的堆顶元素
 *
 * 复杂度分析：
 *  时间复杂度：O(nlogk)，n为数组的长度，k为目标元素的大小；
 *  空间复杂度：O(k)，目标元素的大小；
 */
var findKthLargest = function (nums, k) {
  // 设置大小为 k 的小堆
  const minHeap = [];

  // 堆的插入
  function heapInsert(val) {
    minHeap.push(val);
    let i = minHeap.length - 1;
    // 第一个元素不做处理
    while (i > 0) {
      // 获取父节点下标
      const parent = Math.floor((i - 1) / 2);
      // 父级元素 <= 当前插入元素，跳出循环，不作处理
      if (minHeap[parent] <= minHeap[i]) break;
      // 父级元素 > 当前插入元素，与父级元素交换
      [minHeap[parent], minHeap[i]] = [minHeap[i], minHeap[parent]];
      // 继续往根节点遍历
      i = parent;
    }
  }

  // 堆的删除
  function heapDel() {
    if (minHeap.length === 1) return minHeap.pop();
    // 保存堆顶元素
    const result = minHeap[0];
    // 用最后一个元素替换堆顶元素
    minHeap[0] = minHeap.pop();
    let i = 0;
    // 减小堆的大小，从根节点开始，不断与子节点比较并交换，
    // 确保父节点  < 子节点
    while (true) {
      let minIndex = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      // 对比左子节点
      if (left < minHeap.length && minHeap[left] < minHeap[minIndex]) {
        minIndex = left;
      }
      // 对比右子节点
      if (right < minHeap.length && minHeap[right] < minHeap[minIndex]) {
        minIndex = right;
      }
      // 如果当前节点已经是最小，跳出循环
      if (minIndex === i) break;

      // 节点交换
      [minHeap[i], minHeap[minIndex]] = [minHeap[minIndex], minHeap[i]];
      i = minIndex;
    }
    return result;
  }

  // 开始构建大小为 k 的小堆
  for (let num of nums) {
    if (minHeap.length < k) {
      heapInsert(num);
    } else if (num > minHeap[0]) {
      heapDel();
      heapInsert(num);
    }
  }

  return minHeap[0];
};
/**
 * 解题思路：
 *  本题主要使用快速排序的分区思想
 *  1. 选择数组第一个元素当作基准元素（pivot）；
 *  2. 将数组分区，分成小于 pivot，等于 pivot，大于 pivot；
 *  3. 找到包含目标元素的分区进行递归；
 *
 * 复杂度分析：
 *  时间复杂度：O(n)，最坏情况下为：O(n²)；
 *  空间复杂度：O(1)，没有使用额外的空间；
 */
var findKthLargest = function (nums, k) {
  // 三路分区快速选择
  function quickSelect(left, right, targetIndex) {
    // 基础情况
    if (left >= right) return nums[left];

    // 随机选择pivot避免最坏情况O(n²)
    const randomIndex = left + Math.floor(Math.random() * (right - left + 1));
    [nums[left], nums[randomIndex]] = [nums[randomIndex], nums[left]];

    const pivot = nums[left];
    let lt = left; // 小于pivot的右边界
    let gt = right; // 大于pivot的左边界
    let i = left + 1; // 当前检查位置

    // 三路分区：将数组分为 < pivot | = pivot | > pivot
    while (i <= gt) {
      if (nums[i] < pivot) {
        // 当前元素小于pivot，放到左边区域
        [nums[lt], nums[i]] = [nums[i], nums[lt]];
        lt++;
        i++;
      } else if (nums[i] > pivot) {
        // 当前元素大于pivot，放到右边区域
        [nums[i], nums[gt]] = [nums[gt], nums[i]];
        gt--;
        // 注意：i不自增，因为交换过来的元素还未检查
      } else {
        // 当前元素等于pivot，保持在中间区域
        i++;
      }
    }

    // 分区完成后：
    // [left, lt) 的元素 < pivot
    // [lt, gt] 的元素 = pivot
    // (gt, right] 的元素 > pivot

    if (targetIndex < lt) {
      // 目标在左边区域
      return quickSelect(left, lt - 1, targetIndex);
    } else if (targetIndex > gt) {
      // 目标在右边区域
      return quickSelect(gt + 1, right, targetIndex);
    } else {
      // 目标在中间区域（等于pivot的区域）
      return nums[targetIndex];
    }
  }

  // 第k大元素 = 第(n-k+1)小元素
  const targetIndex = nums.length - k;
  return quickSelect(0, nums.length - 1, targetIndex);
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
