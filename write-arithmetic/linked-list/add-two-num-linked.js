/**
 * https://leetcode.cn/problems/add-two-numbers/
    给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
    请你将两个数相加，并以相同形式返回一个表示和的链表。
    你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
    示例 1：
        输入：l1 = [2,4,3], l2 = [5,6,4]
        输出：[7,0,8]
        解释：342 + 465 = 807.
    示例 2：
        输入：l1 = [0], l2 = [0]
        输出：[0]
    示例 3：
        输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
        输出：[8,9,9,9,0,0,0,1]
    提示：
        每个链表中的节点数在范围 [1, 100] 内 0 <= Node.val <= 9
        题目数据保证列表表示的数字不含前导零
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 解题思路：
 *  1. 把两个链表依次从头开始循环并相加，直到两个链表都为空，
 *  2. 处理两数相加超出十进一问题和最后链表结束有可能大于10，
 *  3. 把相加的值保存到一个新链表中，处理下链表头，
 *  4. 把两个非空链表的next赋值给l1，l2，
 *  5. 直至循环结束返回新链表头。
 * 
 * 复杂度分析：
 *  时间复杂度：O(max(m,n))，m，n是两个非空链表的长度，改题需要把两个链表全部遍历一遍，长度为最长的那个非空链表；
 *  空间复杂度：O(max(m,n))，m，n是两个非空链表的长度，我们需要一个新链表保存相加的值，长度也是m，n链表较长的。
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0,
    head = null,
    tail = null;
  while (l1 || l2) {
    const firstNum = l1 ? l1.val : 0;
    const secondNum = l2 ? l2.val : 0;
    const nodeVal = firstNum + secondNum + carry;
    if (!head) {
      head = new ListNode(nodeVal % 10);
      tail = head;
    } else {
      tail.next = new ListNode(nodeVal % 10);
      tail = tail.next;
    }
    carry = Math.floor(nodeVal / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  console.log(tail);
  return head;
};
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

