/**
 * 933. 最近的请求次数
 * https://leetcode.cn/problems/number-of-recent-calls/description/
 * 写一个 RecentCounter 类来计算特定时间范围内最近的请求。
  请你实现 RecentCounter 类：
    RecentCounter() 初始化计数器，请求数为 0 。
    int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
    保证 每次对 ping 的调用都使用比之前更大的 t 值。
    示例 1：
    输入：
      ["RecentCounter", "ping", "ping", "ping", "ping"]
      [[], [1], [100], [3001], [3002]]
    输出：
      [null, 1, 2, 3, 3]

    解释：
    RecentCounter recentCounter = new RecentCounter();
    recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
    recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
    recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
    recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
 */

/**
 * 解题思路：
 *  1. 使用队列保存请求队列
 *  2. 每次有新请求时，判断队列是否有超出3000ms的请求，移除所有超出的值
 *  3. 返回队列长度即为最近的请求次数
 * 
 * 复杂度分析：
 *  时间复杂度：
 *    最坏情况：可能需要移除队列中所有元素，复杂度为O(n)，n是调用ping的总次数；
 *    正常情况：每个元素最多入队和出队一次，平均时间为常数级，复杂度为O(1)；
 *    shift方法：由于每个元素只会被shift一次，所有平均复杂度为O(1)；
 *  空间复杂度：
 *    最坏情况下会保存3000毫秒内发生的所有请求数，O(n)，n是3000毫秒内发生的所有请求数。
 */
var RecentCounter = function() {
  // 初始化请求队列
  this.tQueue = [];
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
  // 新请求添加到队列
  this.tQueue.push(t);
  // 判断队列中是否有超出3000ms的请求，有则移除
  while(this.tQueue.length > 0 && this.tQueue[0] < (t - 3000)) {
    this.tQueue.shift();
  }
  // 返回队列长度
  return this.tQueue.length;
};

/** 
* Your RecentCounter object will be instantiated and called as such:
* var obj = new RecentCounter()
* var param_1 = obj.ping(t)
*/