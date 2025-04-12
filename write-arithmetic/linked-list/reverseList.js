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
 * 方法一：迭代
 * 复杂度分析
    时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次。
    空间复杂度：O(1)。
 */
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr) {
      // Temporarily stores the next node.
      const next = curr.next;
      // Set next node for current node.
      curr.next = prev;
      // Set previous node to equal the current node.
      prev = curr;
      // Set current node to equal the next node.
      curr = next;
  }
  return prev;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 方法二：递归
 * 复杂度分析
    时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次。
    空间复杂度：O(1)。
 */
var reverseListByRecursion = function(head) {
  if (head == null || head.next == null) {
    return head;
  }
  const newHead = reverseListByRecursion(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};