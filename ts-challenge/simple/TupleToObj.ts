/**
 * Tuple to Object 元组转换成对象
 * Given an array, transform it into an object type and the key/value must be in the provided array.
 * 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。
 * 例如：
    const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
    type result = TupleToObject<typeof tuple> 
    // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
 */
// 解题思路：
// 1. 根据参数可以得出参数是一个字符串且只读的元组，即类型转换方法的参数为：readonly string[]
// 2. 使用泛型 T 继承 readonly string[]
// 3. 使用 in 循环遍历 T 的值
type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P
} 

const tuple = ['tesla', '333', 'model X', 'model Y'] as const
type result = TupleToObject<typeof tuple> 