// LeetCode 133. 克隆图 - 测试文件

// 节点定义
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

// 解法一： 广度优先遍历 (BFS)
// 解题思路：
//  1. 用 Map 来存储已复制的节点和用队列来进行 bfs，
//  2. 克隆起始节点，并把起始节点放入队列，
//  3. 循环队列，在循环体中把当前节点的相邻节点全部遍历一遍，
//  4. 如果未复制，复制邻居节点并把邻居节点放入队列，
//  5. 如果已复制，把邻居节点放入当前节点的邻居节点数组中，
//  6. 最后，返回复制的起始节点。
// 时间复杂度：O(n + m)，其中 n 是节点数，m 是边数
// 空间复杂度：O(n), 队列最坏情况下为 O(n - 1)
function cloneGraphBfs(node) {
  if (!node) return null;

  // 使用一个 Map 来存储已复制的节点
  const copedMap = new Map();
  // 使用队列来进行 BFS
  const queue = [node];
  
  // 克隆起始节点
  copedMap.set(node, new Node(node.val))

  // 循环队列
  while(queue.length) {
    // 获取队列头节点
    const currentNode = queue.shift();
    // 遍历当前节点的所有邻居
    for(let neighbor of currentNode.neighbors) {
      // 判断是否已复制过改节点
      if (!copedMap.has(neighbor)) {
        // 未复制，放入 Map 中存储
        copedMap.set(neighbor, new Node(neighbor.val));
        // 把当前节点放入队列中
        queue.push(neighbor)
      }
      // 已复制，建立克隆节点间的连接
      copedMap.get(currentNode).neighbors.push(copedMap.get(neighbor))
    }
  }
  return copedMap.get(node);
}

// 解法二： 深度优先遍历 (DFS)
// 解题思路：
// 1. 使用递归来遍历图中的每个节点
// 2. 使用 Map 来存储已复制的节点，避免重复复制
// 3. 对每个节点，克隆它并递归克隆它的所有邻居
// 时间复杂度：O(n + m)，其中 n 是节点数，m 是边数
// 空间复杂度：O(n), 递归栈深度最坏情况下为 O(n)
function cloneGraphDfs(node) {
  if (!node) return null; // 如果节点为空，直接返回 null

  // 使用 Map 来存储已复制的节点
  const map = new Map();
  // 递归函数，复制节点及其邻居
  function dfs(node) {
    if (map.has(node)) {
      // 如果节点已复制，直接返回
      return map.get(node);
    }
    // 节点不存在，克隆一个新节点
    const cloneNode = new Node(node.val);
    // 将克隆的节点存入 Map
    map.set(node, cloneNode);
    // 遍历当前节点的所有邻居
    for (const neighbor of node.neighbors) {
      // 递归调用 dfs 复制邻居节点
      cloneNode.neighbors.push(dfs(neighbor));
    }
    return cloneNode; // 返回克隆的节点
  }
  // 从起始节点开始
  return dfs(node);
}

// 测试用例1: 四个节点的正方形图 [[2,4],[1,3],[2,4],[1,3]]
console.log("=== 测试用例1: 四个节点的正方形图 ===");
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

const cloned1 = cloneGraphDfs(node1);
console.log("克隆的图：", cloned1);
// console.log("原图节点1值:", node1.val);
// console.log("克隆图节点1值:", cloned1.val);
// console.log("是否为同一对象:", node1 === cloned1); // false
// console.log("邻居数量:", node1.neighbors.length, "->", cloned1.neighbors.length);