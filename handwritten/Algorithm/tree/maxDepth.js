/**
 * 104. 二叉树的最大深度
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 * 给定一个二叉树 root ，返回其最大深度。
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 */
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
 */
// 使用队列 + 广度优先搜索（BFS）
var maxDepth = function (root) {
  // 判断根节点是否为空
  if (!root) {
    return 0; // 如果为空，返回0
  }

  // 使用数组作为队列
  let queue = [root];
  let depth = 0; // 初始化深度为0

  // 当队列不为空时，进行层序遍历
  while (queue.length > 0) {
    // 获取当前层的节点数
    const currentLen = queue.length;

    // 遍历当前层的所有节点
    for (let i = 0; i < currentLen; i++) {
      let node = queue.shift(); // 弹出队列的第一个节点

      // 如果左子节点存在，加入队列
      if (node.left) {
        queue.push(node.left);
      }

      // 如果右子节点存在，加入队列
      if (node.right) {
        queue.push(node.right);
      }
    }

    // 每遍历完一层，深度加 1
    depth++;
  }
  return depth; // 返回最大深度
};
/*
解题思路：
  1. 使用广度优先搜索（BFS）遍历二叉树，使用队列来存储节点，
  2. 每次处理当前层的节点，把它们的子节点加入队列，
  3. 每遍历完一层，深度加 1，最后返回深度即可。

复杂度分析：
  时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点都被访问一次。
  空间复杂度：O(n)，最坏情况下，队列中可能存储 n/2 个节点（即最后一层的节点）。
*/

// 使用栈 + 深度优先搜索（DFS）
var maxDepth = function (root) {
  // 判断根节点是否为空
  if (!root) {
    return 0; // 如果为空，返回0
  }
  // 使用栈来存储节点和当前深度
  const stack = [[root, 1]];
  let maxDepth = 0; // 初始化最大深度为0

  // 当栈不为空时，进行深度优先遍历
  while (stack.length > 0) {
    const [node, depth] = stack.pop(); // 弹出栈顶的节点和深度
    // 更新最大深度
    maxDepth = Math.max(maxDepth, depth);

    // 如果右子节点存在，加入栈
    if (node.right) {
      stack.push([node.right, depth + 1]);
    }

    // 如果左子节点存在，加入栈
    if (node.left) {
      stack.push([node.left, depth + 1]);
    }
  }
  return maxDepth; // 返回最大深度
};
/*
解题思路：
  1. 使用栈来模拟递归的过程，存储待处理的节点和该节点的深度，
  2. 定义一个全局变量来记录当前的最大深度，
  3. 每当处理一个节点时，更新全局最大深度。

复杂度分析：
  时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点都被访问一次。
  空间复杂度：O(h)，h是树的高度。
*/