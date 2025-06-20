
/**
 * 21. 合并两个有序链表
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 迭代法
 * 解题思路：
 *  1. 首先定义一个结果链表，保存合并后的链表数据
 *  2. 通过迭代循环list1和list2，把它们较小的值赋值给结果链表
 *  3. 处理最后一个节点数据，返回结果链表
 * 复杂度分析：
 *  时间复杂度：O(n)，n是两个链表较大的那个
 *  空间复杂度：O(1)，没有使用额外的空间
 */
var mergeTwoLists = function(list1, list2) {
  const resList = new ListNode(0);
  let currentNode = resList;

  while(list1 && list2) {
    if(list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = list1 || list2;
  return resList.next;
};