/**
 * JSON对象和数组深拷贝
 * @param {*} obj
 * @returns newObj 返回的对象
 */
function deepClone(obj) {
  let _tmp, result;
  _tmp = JSON.stringify(obj);
  result = JSON.parse(_tmp);
  return result;
}
/**
 * 对象深拷贝
 * @param {object} o 传入的对象
 * @returns {object} newObj 返回的对象
 */
function deepCloneObj(o) {
  let newObj = {};
  for (let key in o) {
    if (typeof o[key] == "object") {
      newObj[key] = deepClone(o[key]);
    } else {
      newObj[key] = o[key];
    }
  }
  return newObj;
}
/**
 * 对象和数组深拷贝
 * @param {*} obj
 * @returns newObj 返回的对象
 */
function deepClone(obj) {
  // let result = typeof obj.splice === "function" ? [] : {},
  console.log(typeof obj.splice);
  let result = Array.isArray(obj) ? [] : {},
    key;
  if (obj && typeof obj === "object") {
    for (key in obj) {
      if (obj[key] && typeof obj[key] === "object") {
        //如果对象的属性值为object的时候，递归调用deepClone，即再把某个值对象复制一份到新的对象的对应值中
        result[key] = deepClone(obj[key]);
      } else {
        //如果对象的属性值不为object的时候，直接复制参数对象的每一个键/值到新对象对应的键/值中
        result[key] = obj[key];
      }
    }
    return result;
  }
  return obj;
}
/**
 * Reflect 对象和数组深拷贝
 * @param {*} obj
 * @returns newObj 返回的对象
 */
function deepClone(obj) {
  if (!isObject(obj)) {
    throw new Error("obj 不是一个对象！");
  }
  let isArray = Array.isArray(obj);
  let cloneObj = isArray ? [...obj] : { ...obj };
  Reflect.ownKeys(cloneObj).forEach((key) => {
    cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
  });
  return cloneObj;
}

/**
 * 最终版-对象和数组深拷贝
 * @param {*} obj
 * @returns newObj 返回的对象
 */
function deepCopy(obj, weakMap = new WeakMap()) {
  if (!isObject(obj)) return obj;
  if (weakMap.get(obj)) return weakMap.get(obj);
  // 如果是函数
  if (isFunc(obj)) {
    let result = null;
    // 获得函数的主体
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    // 获得参数
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = obj.toString();
    // 判断是否是箭头函数
    if (obj.prototype) {
      const param = paramReg.exec(funcString);
      const body = bodyReg.exec(funcString);
      if (body) {
        if (param) {
          const paramArr = param[0].split(",");
          result = new Function(...paramArr, body[0]);
        } else {
          result = new Function(body[0]);
        }
      }
    } else {
      result = eval(funcString);
    }
    weakMap.set(obj, result);
    return result;
  }

  // 如果是数组
  if (Array.isArray(obj)) {
    let result = [];
    for (let val of obj) {
      result.push(deepCopy(val, weakMap));
    }
    weakMap.set(obj, result);
    return result;
  }
  // 如果是Date
  if (isDate(obj)) {
    let result = new obj.constructor(obj);
    weakMap.set(obj, result);
    return result;
  }
  // 如果是map
  if (isSet(obj)) {
    let result = new Set();
    obj.forEach((val) => {
      result.add(deepCopy(val, weakMap));
    });
    weakMap.set(obj, result);
    return result;
  }
  // 如果是set
  if (isMap(obj)) {
    let result = new Map();
    obj.forEach((val, key) => {
      result.set(key, deepCopy(key, weakMap));
    });
    weakMap.set(obj, result);
    return result;
  }
  // 如果是正则
  if (isRegExp(obj)) {
    const reFlags = /\w*$/;
    const result = new obj.constructor(obj.source, reFlags.exec(obj));
    result.lastIndex = obj.lastIndex;
    weakMap.set(obj, result);
    return result;
  }
  let result = {};
  weakMap.set(obj, result);
  // 考虑symbol类型的属性名
  let symbols = Object.getOwnPropertySymbols(obj);
  if (symbols.length > 0) {
    for (let key of symbols) {
      let val = obj[key];
      result[key] = isObject(val) ? deepCopy(val, weakMap) : val;
    }
  }
  // 非symbol类型属性名
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let val = obj[key];
      result[key] = isObject(val) ? deepCopy(val, weakMap) : val;
    }
  }
  return result;
}

function isObject(obj) {
  return (typeof obj === "object" || typeof obj === "function") && obj !== null;
}
function isFunc(obj) {
  return typeof obj === "function";
}
function isArray(obj) {
  return Array.isArray(obj);
}
function isDate(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function isMap(obj) {
  return Object.prototype.toString.call(obj) === "[object Map]";
}
function isSet(obj) {
  return Object.prototype.toString.call(obj) === "[object Set]";
}
function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
}
// 测试
let arr = [{ name: "harlan", age: 30, desc: undefined }];
let newArr = deepClone(arr);
console.log(newArr);
