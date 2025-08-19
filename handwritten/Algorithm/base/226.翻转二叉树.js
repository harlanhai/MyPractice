/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 递归解法：
 *  通过前序递归遍历把所有节点都遍历一遍，同时把当前节点的左右节点互换。
 * 
 * 复杂度分析：
 *  时间复杂度：O(n)，树的节点数都要遍历一次；
 *  空间复杂度：O(h)，递归栈空间最大为树的深度。
 */
var invertTree = function(root) {
  if(!root) return root;
  function reverse(node) {
    // 临时存储节点
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    if(node.left) reverse(node.left)
    if(node.right) reverse(node.right)
  }
  reverse(root)
  return root;
};