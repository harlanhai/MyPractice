/**
 * @param {string} s
 * @return {boolean}
 * 算法思路：
 *  1. 使用一个栈来保存左括号
 *  2. 创建一个括号映射关系
 *  3. 循环遍历字符串 s 遇到左括号入栈，遇到右括号和栈顶元素匹配判断
 *  4. 循环遍历结束后如何栈为空说明所有括号都匹配成功，不为空说明
 * 
 * 复杂度分析：
 *  时间复杂度：字符串 s 所有字符都要遍历一次，所以复杂度为 O(n)；
 *  空间复杂度：最坏的情况是字符串都是左括号，栈需要要保存整个字符串长度，所有复杂度也为 O(n)；
 */
var isValid = function (s) {
  const leftStack = [];
  const mapObj = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // 如果是右括号，取栈中数据匹配
    if (char in mapObj) {
        // 获取栈顶元素
        const stackChar = leftStack.length ? leftStack.pop() : "@";
        // 检查是否匹配
        if(mapObj[char] !== stackChar) {
            return false;
        }
    } else {
        // 左括号入栈
        leftStack.push(char);
    }
  }
  return leftStack.length === 0;
};

console.log(isValid("()"))
console.log(isValid("(]"))
console.log(isValid('([])'));
