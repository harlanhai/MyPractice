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
 * @return {number}
 * 方法一：使用深度优先搜索（DFS）
解题思路：
  1. 使用深度优先搜索来解决，
  2. 如果当前节点为空，返回 0；
  3. 如何左子树为空，返回右子树的深度 + 1；
  4. 如果右子树为空，返回左子树的深度 + 1；
  5. 如果左右子树都不为空，返回 Math.min(左子树深度，右子树深度) + 1；
  6. 返回的深度即为最小深度。
 */
var minDepth = function (root) {
  if (!root) return 0;

  // 判断左子树是否为空
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  // 判断右子树是否为空
  if (!root.right) {
    return minDepth(root.left) + 1;
  }
  // 如果左右子树都不为空，返回左右子树深度的最小值 + 1
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
// 复杂度分析：
//  时间复杂度：O(n)，其中 n 是二叉树的节点数。最坏情况下，每个节点都被访问一次
//  空间复杂度：O(h)，其中 h 是二叉树的高度。最坏情况下，为 O(n)，其中 n 是二叉树的节点数

/**
 * 方法二： 使用广度优先搜索（BFS）
 * 解题思路：
 *  1. 使用队列来存储节点，进行层序遍历，队列中存储节点和当前深度，
 *  2. 每次处理当前层的节点，把它们的子节点加入队列，
 *  3. 每遍历完一层，深度加 1，
 *  4. 如果当前节点是叶子节点，返回深度。
 */
var minDepth = function (root) {
  if (!root) return 0;

  const queue = [[root, 1]];

  // 进行层序遍历
  while (queue.length) {
    const [queueNode, depth] = queue.shift(); // 弹出队列的第一个节点
    // 判断当前节点是否是叶子节点
    if (queueNode.left === null && queueNode.right === null) {
      return depth; // 返回当前深度
    }
    // 如果左子节点存在，加入队列
    if (queueNode.left) {
      queue.push([queueNode.left, depth + 1]);
    }
    // 如果右子节点存在，加入队列
    if (queueNode.right) {
      queue.push([queueNode.right, depth + 1]);
    }
  }
};
// 复杂度分析：
//  时间复杂度：O(n)，其中 n 是二叉树的节点数。最坏情况下，每个节点都被访问一次
//  空间复杂度：O(w)，其中 w 是二叉树的最大宽度
