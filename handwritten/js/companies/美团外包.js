/**
 * func: 统计字符出现的次数
 */
const statisticsStrNum = (str = "") => {
  let strObj = {};
  if (str) {
    const strNum = str.replace(/\s*/g, "");
    for (let i = 0; i < strNum.length; i++) {
      strObj[strNum[i]] = strObj[strNum[i]] ? strObj[strNum[i]] + 1 : 1;
    }
  }
  return strObj;
};
console.log(statisticsStrNum("qwe qwe qwe"));
// {q:3,w:3,e:3}
