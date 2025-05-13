/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 解题思路：
 *  本题没有给出头节点，我们只能通过把node的下一个节点复制到要删除的节点来实现。
 * 
 * 复杂度分析：
 *  由于时间和空间都是常数，所以都是 O(1)
 */
var deleteNode = function(node) {
  // 把node.next替换到当前node节点
  node.val = node.next.val;
  // 修改链表指向，删除node.next;
  node.next = node.next.next;
};