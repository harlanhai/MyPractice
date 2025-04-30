/**
 * https://leetcode.cn/problems/binary-tree-preorder-traversal/description/
 * 144. 二叉树的前序遍历
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
  例1：
    输入：root = [1,null,2,3]
    输出：[1,2,3]
  例2：
    输入：root = [1,2,3,4,5,null,8,null,null,6,7,9]
    输出：[1,2,4,5,6,7,3,8,9]
 */
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 1. 递归解法：
 *  通过递归方法把二叉树的左右节点各自递归调用，空节点直接返回，一直到最后的子节点
 * 复杂度分析：
 *  时间复杂度：由于递归的次数是所有二叉树节点，所以复杂度为O(n)
 *  空间复杂度：由于递归需要一个数组存储所有二叉树节点的值，所以复杂度也为O(n)
 */
// var preorderTraversal = function (root) {
//   const res = [];
//   function preorder(node) {
//     console.log(node)
//     if(node === null) return;
//     res.push(node.val);
//     preorder(node.left);
//     preorder(node.right)
//   }
//   preorder(root);
//   return res;
// };
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 1. 迭代解法：
 *  1.1 第一步，先把根节点放到一个栈中；
 *  1.2 第二步，依次把子节点的右节点放入栈中，再把左节点放入栈中（根据栈先进后出原则）；
 *  1.3 第三步，出栈，循环第二步操作直至栈空。
 * 
 * 复杂度分析：
 *  时间复杂度：由于迭代的次数是所有二叉树节点，所以复杂度为O(n)
 *  空间复杂度：迭代需要一个数组存储栈，所以复杂度也为O(n)
 */
var preorderTraversal = function (root) {
  if (!root) return [];

  const res = [];
  // 把根节点root放到栈中
  const stackTree = [root];
  // 栈循环完后结束
  while (stackTree.length > 0) {
    // 获取栈顶节点
    const currentNode = stackTree.pop();
    if (currentNode === null) return;
    // 获取当前节点值
    res.push(currentNode.val);
    // 先进右节点
    if (currentNode.right) stackTree.push(currentNode.right);
    // 再进左节点
    if (currentNode.left) stackTree.push(currentNode.left);
  }
  return res;
};

// To create binary tree [1,null,2,3]
//    1
//     \
//      2
//       \
//        3
// const root = new TreeNode(1, undefined, new TreeNode(2, undefined, new TreeNode(3)));
const root = new TreeNode(1, undefined, new TreeNode(2, undefined, new TreeNode(3)));
console.log('get preorderTraversal: ', preorderTraversal(root));
