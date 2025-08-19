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

// 深度优先遍历 - 前序遍历（栈）
function preorderTraversalStack(root) {
  if (!root) return [];
  // 初始化栈
  let stackTree = [root];
  // 保存遍历结果的数组
  const result = [];
  // 栈循环完后结束
  while (stackTree.length > 0) {
    const curNode = stackTree.pop(); // 获取栈顶节点
    if (curNode === null) return;
    result.push(curNode.val); // 访问根节点
    // 先进右节点
    if (curNode.right) stackTree.push(curNode.right);
    // 再进左节点
    if (curNode.left) stackTree.push(curNode.left);
  }
  return result;
}