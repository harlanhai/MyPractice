/**
 * 141. 环形链表  https://leetcode.cn/problems/linked-list-cycle/description/
  给你一个链表的头节点 head ，判断链表中是否有环。
  如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
  注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
  如果链表中存在环 ，则返回 true 。 否则，返回 false 。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * 解题思路：
 *  1. 通过快慢指针来判断链表中是否有环，
 *  2. 慢指针每次走一步，快指针每次走两步，
 *  3. 如果存在环，快慢指针肯定会相遇，即快指针等于慢指针，返回true，否则返回false。
 *
 * 复杂度分析：
 *  时间复杂度：O(n)，n 是链表的长度，我们需要遍历一遍链表；
 *  空间复杂度：O(1)，本题只用到了常量存储空间；
 */
var hasCycle = function(head) {
  // 过滤空指针和只有一个节点的链表
  if (!head || !head.next) {
    return false;
  }
  // 初始化快慢指针
  let slow = head;
  let fast = head;

  // 遍历链表，当fast为null时，说明不存在环
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
