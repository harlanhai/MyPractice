/**
 * 判断链表中是否有环
 */
function hasCycle(head) {
  let slow = head;
  let fast = head;
  // 判断快指针是否等于null，等于null说明链表没有环
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast)
      return true;
  }
  return false;
}
// 时间复杂度： O(log n)