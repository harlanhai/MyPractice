// 定义一个创建树的类
class CreateTree {
  constructor(val) {
    this.val = val; // 当前节点值
    this.left = null; // 左子节点
    this.right = null; // 右子节点
  }
}

/**
 * 树的先序遍历（根->左->右）:
 *  1. 用一个栈来保存节点
 *  2. 首先把根节点入栈，
 *  3. 然后循环栈，弹出节点时立即访问，然后将右子节点和左子节点依次入栈（右节点先入栈，这样左节点会先被处理）
 */
// 深度优先遍历 - 前序遍历（栈）
function preorderTraversal(root) {
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

/**
 * 树的中序遍历（左->根->右）:
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
console.log("先序遍历:", preorderTraversal(tree)); // 应输出 [1, 2, 4, 5, 3, 6]
console.log("中序遍历:", inorderTraversal(tree));  // 应输出 [4, 2, 5, 1, 3, 6]
console.log("后序遍历:", postorderTraversal1(tree)); // 应输出 [4, 5, 2, 6, 3, 1]
console.log("后序遍历(双栈法):", postorderTraversal2(tree)); // 应输出 [4, 5, 2, 6, 3, 1]