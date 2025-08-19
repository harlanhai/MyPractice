/**
 * 206. 反转链表
 * https://leetcode.cn/problems/reverse-linked-list/
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
 * 方法一：迭代
 *  1. 把当前节点的next指向前节点；
 *  2. 把前节点替换成当前节点；
 *  3. 当前节点的next等于当前节点；
 *  4. 返回前节点。
 * 复杂度分析
    时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次。
    空间复杂度：O(1)。
 */
var reverseList = function(head) {
  let preNode = null;
  let currentNode = head;
  while (currentNode) {
      // 临时保存下一个节点
      const next = currentNode.next;
      // 设置下一个节点的前节点
      currentNode.next = preNode;
      // 前节点更新为当前节点
      preNode = currentNode;
      // 当前节点更新为下一个节点
      currentNode = next;
  }
  return preNode;
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