/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(x, y) {
  if (x === y) {
    // 如果 x 和 y 严格相等，直接返回 true
    // 这里的判断包含了 +0 和 -0 的情况
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // 如果 x 和 y 不严格相等，返回 false
    // 这里包含了 NaN 的情况
    return x !== x && y !== y;
  }
}
