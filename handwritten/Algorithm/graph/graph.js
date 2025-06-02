// 图的 DFS 遍历
// 解题思路：
// 1. 通过递归调用把每个节点的所有邻居节点都访问一遍。
// 2. 使用一个 Set 来记录已访问的节点，避免重复访问。
// 3. 使用一个数组来存储遍历的结果。
// 时间复杂度：O(n + s)，其中 n 是顶点数，s 是边数
// 空间复杂度：O(n)，用于存储访问状态
function dfsGraph(graph, start) {
  const visited = new Set(); // 用于记录已访问的节点
  const result = []; // 存储遍历结果

  function dfs(node) {
    if (visited.has(node)) return; // 如果节点已访问，直接返回
    visited.add(node); // 标记当前节点为已访问
    result.push(node); // 将当前节点添加到结果中

    // 遍历当前节点的所有邻居
    for (const neighbor of graph[node] || []) {
      dfs(neighbor); // 递归调用 dfs
    }
  }

  dfs(start); // 从起始节点开始遍历
  return result; // 返回遍历结果
}

// 图的 BFS 遍历
// 解题思路：
// 1. 使用队列来存储待访问的节点
// 2. 使用一个 Set 来记录已访问的节点，避免重复访问
// 3. 使用一个数组来存储遍历的结果
// 时间复杂度：O(n + s)，其中 n 是顶点数，s 是边数
// 空间复杂度：O(n)，用于存储访问状态和队列
function bfsGraph(graph, start) {
  // 初始化一个队列
  const queue = [start];
  const visited = new Set(); // 用于记录已访问的节点
  const result = []; // 存储遍历结果

  while(queue.length > 0) {
    // 从队列中取出一个节点
    const node = queue.shift();
    // 如果节点已存在，跳过，继续下一个
    if (visited.has(node)) continue;

    // 存储当前节点
    visited.add(node);
    // 将当前节点添加到结果中
    result.push(node);

    // 将当前节点的所有邻居添加到队列中
    for (const sibling of graph[node] || []) {
      if (!visited.has(sibling)) {
        queue.push(sibling); // 只添加未访问的邻居
      }
    }
  }
  return result; // 返回遍历结果
}

/****************** test *******************/
// 辅助函数：创建图的邻接表
function createGraph() {
  return {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B', 'F'],
    E: ['C', 'F'],
    F: ['D', 'E'],
  };
}

// 演示和测试
console.log('图的结构:');
const graph = createGraph();
for (let vertex in graph) {
  console.log(`${vertex} -> [${graph[vertex].join(', ')}]`);
}

// 执行DFS遍历
const result = dfsGraph(graph, 'A');
console.log('DFS遍历结果:', result.join(' -> ')); // 输出: A -> B -> D -> F -> E -> C

// 执行BFS遍历
console.log('BFS遍历结果A:', bfsGraph(graph, 'A')); // 输出: A -> B -> C -> D -> E -> F
console.log('BFS遍历结果B:', bfsGraph(graph, 'B')); // 输出: A -> B -> C -> D -> E -> F