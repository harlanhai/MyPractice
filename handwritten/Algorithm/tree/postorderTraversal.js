// 定义一个创建树的类
class CreateTree {
  constructor(val) {
    this.val = val; // 当前节点值
    this.left = null; // 左子节点
    this.right = null; // 右子节点
  }
}

/**
 * 深度优先遍历-后序遍历（双栈）
 * 解题思路：
 *  1. 定义两个栈，
 *  2. 第一个栈按照 “根->右->左” 遍历节点，第二个栈保存第一个栈的节点值，
 *  3. 最后把第二个栈弹出的节点值放入结果数组
 */ 
function postorderTraversal1(root) {
  if (!root) return [];
  const result = [];
  const stact1 = [root];
  const stact2 = [];
  // 先把节点值放入栈
  while (stact1.length > 0) {
    const curNode1 = stact1.pop();
    stact2.push(curNode1);
    // 先把左节点放入栈
    if (curNode1.left) stact1.push(curNode1.left);
    // 再把右节点放入栈
    if (curNode1.right) stact1.push(curNode1.right);
  }
  // 把栈顶节点值放入结果数组
  while (stact2.length > 0) {
    const curNode2 = stact2.pop();
    result.push(curNode2.val);
  }
  return result;
}


// 深度优先遍历-后序遍历（单栈）
// 解题思路：
//  1. 用一个栈来保存节点，定义一个指针 lastVisitedNode 来追踪上一个访问的节点
//  2. 如果当前节点存在，则把当前节点放入栈中，
//  3. 如果当前节点不存在，则获取栈顶节点，如果栈顶节点的右节点存在且没有被访问过，则继续遍历右子树
//  4. 如果栈顶节点的右节点不存在或者已经被访问过，则访问栈顶节点，并把栈顶节点弹出，更新 lastVisitedNode 为当前节点
//  5. 重复步骤 2-4，直到栈为空
//  6. 返回结果数组
function postorderTraversal2(root) {
  if (!root) return [];
  const result = [];
  const stack = [];
  let currentNode = root;
  let lastVisitedNode = null;

  // 先把节点值放入栈
  while (currentNode || stack.length > 0) {
    if (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      // 获取栈的最后一个元素（栈顶）
      const peekNode = stack[stack.length - 1];
      // 如果右节点存在且没有被访问过，则继续遍历右子树
      if (peekNode.right && peekNode.right !== lastVisitedNode) {
        currentNode = peekNode.right;
      } else {
        // 访问当前节点
        result.push(peekNode.val);
        lastVisitedNode = stack.pop();
      }
    }
  }
  return result;
}

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
console.log("后序遍历:", postorderTraversal1(tree)); // 应输出 [4, 5, 2, 6, 3, 1]
console.log("后序遍历(双栈法):", postorderTraversal2(tree)); // 应输出 [4, 5, 2, 6, 3, 1]