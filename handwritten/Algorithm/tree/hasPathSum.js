/**
 * 112. 路径总和
 * https://leetcode.cn/problems/path-sum/description/
 *  给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
 *  叶子节点 是指没有子节点的节点。
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 * 方法1: 递归解法
 *  1. 分别递归检查左子树和右子树，
 *  2. 每次递归时减去当前节点的值，作为下个节点的目标值。
 *  3. 如果到达叶子节点，检查路径和是否等于目标值。
 *  4. 如果是叶子节点且路径和等于目标值，返回true。
 *  5. 否则继续递归检查子节点。
 * 
 *  时间复杂度: O(n) - 每个节点都要访问一次
 *  空间复杂度: O(h) - h为树的高度，递归调用栈的空间复杂度
 */
var hasPathSum = function(root, targetSum) {
  // 是否为空
  if (!root) return false;

  // 如果是叶子节点，检查路径和是否等于目标值
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  // 递归检查左子树和右子树
  const newTargetSum = targetSum - root.val;
  return hasPathSum(root.left, newTargetSum) || hasPathSum(root.right, newTargetSum); 
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 * 方法2: 迭代解法（栈）
 *  1.使用一个栈来保存节点和目标数-上个节点的值，
 *  2.每次从栈中弹出一个节点，检查是否为叶子节点且路径和等于目标值，
 *  3.如果是叶子节点且路径和等于目标值，返回true。
 *  4.否则，将子节点和更新后的目标值压入栈中继续处理。
 * 
 *  时间复杂度: O(n) - 每个节点访问一次
 *  空间复杂度: O(h) - h为树的高度，栈的空间复杂度
 */
var hasPathSumIterative = function(root, targetSum) {
  if (!root) return false;
  // 保存节点和最新的目标值
  const stack = [{ node: root, sum: targetSum }];

  while (stack.length > 0) {
    const { node, sum } = stack.pop();

    // 如果是叶子节点，检查路径和是否等于目标值
    if (!node.left && !node.right && node.val === sum) {
      return true;
    }

    // 减去当前节点的值
    const newSum = sum - node.val;

    // 将子节点加入栈中
    if (node.left) {
      stack.push({ node: node.left, sum: newSum });
    }
    if (node.right) {
      stack.push({ node: node.right, sum: newSum });
    }
  }

  return false;
}