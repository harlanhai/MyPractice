/**
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
 * 83. 删除排序链表中的重复元素
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 解题思路：
 *  1. 题目给出链表已经排序，所以重复元素肯定会连续存在，
 *  2. 只保留第一个重复的元素，后面的全部删除，
 *  3. 循环遍历链表，判断当前节点和下一个节点是否相同，
 *  4. 相同时，删除下一个节点，把指针直接指向下下个节点，不相同，移动到下一个节点，
 *  5. 返回链表头。
 *
 * 复杂度分析：
 *  时间复杂度：O(n)，n是链表的长度，我们需要遍历一遍链表；
 *  空间复杂度：O(1)，本题只用到了常量存储空间；
 */
var deleteDuplicates = function (head) {
  let currNode = head;
  // 遍历链表
  while (currNode && currNode.next) {
    // 判断当前节点是否和下一个节点相同
    if (currNode.val === currNode.next.val) {
      // 相同时，删除下一个节点，把指针直接指向下下个节点
      currNode.next = currNode.next.next;
    } else {
      // 不相同，移动到下一个节点
      currNode = currNode.next;
    }
  }
  return head;
};
