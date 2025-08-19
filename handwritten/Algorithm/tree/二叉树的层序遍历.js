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
 * @return {number[][]}
 * 解题思路：二叉树的层序遍历（BFS）
 * 1. 使用广度优先搜索（BFS）遍历二叉树，使用队列来存储节点，
 * 2. 每次处理当前层的节点，把它们的子节点加入队列，
 * 3. 每遍历完一层，将当前层的节点值加入临时的数组中，最后把当前节点数组加入到结果数组中，
 * 4. 返回结果数组即可。
 */
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root]; // 队列
  const result = []; // 结果数组

  // 进行层序遍历
  while (queue.length) {
    const currentLen = queue.length; // 当前层的节点数
    const currentLevel = []; // 当前层的结果数组
    // 把同层节点保存到二级数组中
    for (let i = 0; i < currentLen; i++) {
      const node = queue.shift(); // 弹出队列的第一个节点
      if (node.left) queue.push(node.left); // 如果左子节点存在，加入队列
      if (node.right) queue.push(node.right); // 如果右子节点存在，加入队列
      currentLevel.push(node.val); // 将当前节点的值加入当前层的结果数组
    }
    result.push(currentLevel); // 将当前层的结果数组加入结果数组
  }
  return result; // 返回结果数组
};
// 复杂度分析：
// 时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点都被访问一次。
// 空间复杂度：O(n)，其中 n 是二叉树的节点数。