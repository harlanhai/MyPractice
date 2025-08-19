// 定义一个创建树的类
class CreateTree {
  constructor(val) {
    this.val = val; // 当前节点值
    this.left = null; // 左子节点
    this.right = null; // 右子节点
  }
}

/**
 * 树的中序遍历（左->根->右）:
 * 迭代实现（使用栈）：
 *  1. 使用一个栈存储节点, 定义一个指针 current node 来追踪当前位置
 *  2. while 循环把所有左节点入栈，然后弹出访问，再转向右节点
 *  3. 如果右节点存在，则继续向左走，直到没有左子树为止
 */
function inorderTraversal(root) {
  if (!root) return [];
  // 初始化栈
  let stackTree = [];
  // 保存遍历结果的数组
  const result = [];
  // 当前节点
  let curNode = root;
  // 根据当前节点和栈的状态进行循环
  while (curNode || stackTree.length > 0) {
    // 把所有的左节点入栈
    while (curNode) {
      stackTree.push(curNode);
      curNode = curNode.left;
    }
    // 获取栈顶节点
    curNode = stackTree.pop();
    // 把当前节点值放入结果数组
    result.push(curNode.val);
    // 最后把当前节点替换成右节点
    curNode = curNode.right;
  }
  return result;
}
/**
 * 树的中序遍历（左->根->右）:
 * 递归实现：
 *  1. 先递归遍历左子树
 *  2. 再访问根节点
 *  3. 最后递归遍历右子树
 */  
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

// 复杂度分析：
// 所有这些迭代实现的时间复杂度都是 O(n)，其中n是节点数
// 所有这些迭代实现的空间复杂度是 O(h)，其中 h 是树的高度或宽度。

// 示例用法
function createExampleTree() {
  /*
        1
       / \
      2   3
     / \   \
    4   5   6
  */
  const root = new CreateTree(1);
  root.left = new CreateTree(2);
  root.right = new CreateTree(3);
  root.left.left = new CreateTree(4);
  root.left.right = new CreateTree(5);
  root.right.right = new CreateTree(6);
  return root;
}

// 测试
const tree = createExampleTree();
console.log("中序遍历:", inorderTraversal(tree));  // 应输出 [4, 2, 5, 1, 3, 6]