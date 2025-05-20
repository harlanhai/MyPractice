/**
 * 使用 JavaScript 实现树的深度优先遍历和广度优先遍历
 */
// 树的节点类
class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}
// 深度优先遍历（DFS）- 递归实现
// 解题思路：
//  使用递归函数来遍历树的每个节点
function dfsRecursive(root) {
  if (!root) return [];

  const result = [];

  function traverse(node) {
    if (!node) return;

    // 访问当前节点
    result.push(node.val);

    // 递归遍历所有子节点
    for (const child of node.children) {
      traverse(child);
    }
  }

  traverse(root);
  return result;
}

// 深度优先遍历（DFS）- 迭代实现（使用栈）
// 解题思路：
//  使用栈数据结构，注意要从右到左入栈以保持正确的遍历顺序
function dfsIterative(root) {
  if (!root) return [];

  const result = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);

    // 为了保持从左到右的顺序，入栈需要从右到左入栈
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }

  return result;
}

// 广度优先遍历（BFS）- 使用队列
// 解题思路：
//  1. 定义一个队列，先把根节点放入队列中
//  2. 当队列不为空时，循环出队列的第一个节点，
//  3. 把出队列的节点值放入结果数组中
//  4. 把出队列的节点的所有子节点入队列
//  5. 重复步骤 2-4，直到队列为空
//  6. 返回结果数组
function bfs(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.val);
    // 将所有子节点加入队列
    for (const child of node.children) {
      queue.push(child);
    }
  }

  return result;
}

// 复杂度分析：
// 所有这些迭代实现的时间复杂度都是 O(n)，其中n是节点数
// 所有这些迭代实现的空间复杂度是 O(h)，其中 h 是树的高度或宽度。

// 创建示例树进行测试
//       1
//      /|\
//     2 3 4
//    /|   |
//   5 6   7
//        /|\
//       8 9 10

const node8 = new TreeNode(8);
const node9 = new TreeNode(9);
const node10 = new TreeNode(10);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7, [node8, node9, node10]);
const node2 = new TreeNode(2, [node5, node6]);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4, [node7]);
const root = new TreeNode(1, [node2, node3, node4]);

// 测试遍历算法
console.log("深度优先遍历（递归）:", dfsRecursive(root));
// console.log("深度优先遍历（迭代）:", dfsIterative(root));
// console.log("广度优先遍历:", bfs(root));

// ---------------------- 二叉树 -----------------------------
// 定义二叉树节点类
class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// 深度优先遍历 - 前序遍历（递归）
function preorderTraversalRecursion(root) {
  if (!root) return [];
  // 保存遍历结果的数组
  const result = [];
  // 节点递归函数
  function traverse(node) {
    if (!node) return;
    result.push(node.val); // 访问根节点
    traverse(node.left); // 遍历左子树
    traverse(node.right); // 遍历右子树
  }
  // 开始递归二叉树
  traverse(root);
  return result;
}

// 深度优先遍历-中序遍历（递归）
function inorderTraversalRecursion(root) {
  if (!root) return [];
  const result = [];

  function traverse(node) {
    if (!node) return;
    // 1.先遍历左子树
    traverse(node.left);
    // 2.再访问根节点
    result.push(node.val);
    // 3.最后遍历右子树
    traverse(node.right);
  }

  traverse(root);
  return result;
}

// 深度优先遍历-后序遍历（递归）
function postorderTraversalRecursion(root) {
  if (!root) return [];
  const result = [];

  function traverse(node) {
    if (!node) return;
    // 1.先遍历左子树
    traverse(node.left);
    // 2.再遍历右子树
    traverse(node.right);
    // 3.最后访问根节点
    result.push(node.val);
  }

  traverse(root);
  return result;
}

// 二叉树的层序遍历（BFS）
// 解题思路：
//  1. 定义一个队列，先把根节点放入队列中
//  2. 当队列不为空时，循环出队列的第一个节点，
//  3. 把出队列的节点值放入结果数组中
//  4. 把出队列的节点的所有子节点入队列
//  5. 重复步骤 2-4，直到队列为空
//  6. 返回结果数组
function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    // 出队
    const node = queue.shift();
    // 获取出队的值
    result.push(node.val);

    // 将子节点入队
    for (const child of node.children) {
      queue.push(child);
    }
  }

  return result;
}

// 复杂度分析：
// 所有这些迭代实现的时间复杂度都是 O(n)，其中n是节点数
// 所有这些迭代实现的空间复杂度是 O(h)，其中 h 是树的高度或宽度。

// 创建二叉树进行测试
//       1
//      / \
//     2   3
//    / \   \
//   4   5   6

const binaryRoot = new BinaryTreeNode(
  1,
  new BinaryTreeNode(2, new BinaryTreeNode(4), new BinaryTreeNode(5)),
  new BinaryTreeNode(3, null, new BinaryTreeNode(6))
);

// console.log('\n二叉树遍历结果:');
// console.log('前序遍历-递归:', preorderTraversalTraverse(binaryRoot));
// console.log('前序遍历-栈:', preorderTraversalStack(binaryRoot));
// console.log('中序遍历:', inorderTraversalRecursion(binaryRoot));
// console.log('中序遍历:', inorderTraversalStack(binaryRoot));
// console.log('后序遍历:', postorderTraversalRecursion(binaryRoot));
// console.log('后序遍历:', postorderTraversalStack1(binaryRoot));
// console.log('后序遍历:', postorderTraversalStack2(binaryRoot));
// console.log('层序遍历:', levelOrder(binaryRoot));
