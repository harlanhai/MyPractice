/**
 * 数组去重
 */
const _deleteRepeat = array => {
  // ① 基本数据
  // const uniqueArr = [...new Set(array)];
  // ② 基本数据
  // const uniqueArr = array.filter((item, index) => array.indexOf(item) === index)
  // ③ 数组对象
  const uniqueArr = [...new Map(array.map(item => [item.id, item])).values]
  return uniqueArr;
}
_deleteRepeat([-1,1,2,2])