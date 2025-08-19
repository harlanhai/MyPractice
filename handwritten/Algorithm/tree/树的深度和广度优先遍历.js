/**
 * 使用 JavaScript 实现树的深度优先遍历和广度优先遍历
 */
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
