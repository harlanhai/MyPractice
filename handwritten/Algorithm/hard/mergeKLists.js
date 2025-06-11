/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/**
 * 解题思路：
 *  通过最小堆来把链表最小节点不断放入一个结果链表中
 *  1. 创建一个最小堆和一个结果链表，先把 lists 中所有链表的头放入最小堆
 *  2. 循环取出最小堆的头，把头结点放入结果链表中，如果当前链表下个节点有值，继续加入到最小堆中
 *  3. 最后输出结果链表的next。
 * 
 * 复杂度分析：
 *  时间复杂度：O(nlogk)，n代表节点数，k是链表的个数，最多同时存储 k 个节点，堆的操作时间复杂度为 O(logk)，
 *    由于需要操作 n 次，所以时间复杂度为 O(nlogk)；
 *  空间复杂度：O(n)，结果链表需要把所有节点都存储；
 */
var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;

  // 创建一个最小堆
  const minHeap = new MinHeap();
  // 创建一个虚拟头节点
  const res = new ListNode(0);
  // 创建一个移动指针
  let p = res;

  // 将所有链表的头节点加入最小堆
  for (let list of lists) {
    if (list) {
      minHeap.push(list);
    }
  }

  while (!minHeap.isEmpty()) {
    // 取出最小节点
    const minNode = minHeap.pop();
    // 将最小节点加入结果链表
    p.next = minNode;
    p = p.next;

    // 如果最小节点有下一个节点，将下一个节点加入最小堆
    if (minNode.next) {
      minHeap.push(minNode.next);
    }
  }

  return res.next;
};

// 最小堆
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].val >= this.heap[parentIndex].val) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  heapifyDown(index) {
    const length = this.heap.length;
    while (index < length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (leftChildIndex < length && this.heap[leftChildIndex].val < this.heap[smallestIndex].val) {
        smallestIndex = leftChildIndex;
      }
      if (rightChildIndex < length && this.heap[rightChildIndex].val < this.heap[smallestIndex].val) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex === index) break;

      [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
      index = smallestIndex;
    }
  }
}