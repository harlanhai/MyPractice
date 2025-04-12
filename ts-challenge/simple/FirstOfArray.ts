/**
 * First of Array 第一个元素
 * Implement a generic First<T> that takes an Array T and returns its first element's type.
 * 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
 * For example:
    type arr1 = ['a', 'b', 'c']
    type arr2 = [3, 2, 1]

    type head1 = First<arr1> // expected to be 'a'
    type head2 = First<arr2> // expected to be 3
*/
// 解题思路：
// 判断泛型是否是数组类型，如果是数组类型则返回第一个元素的类型，否则返回 never
type MyFirst<T extends unknown[]> = T extends [] ? never : T[0];
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = MyFirst<arr1> // expected to be 'a'
type head2 = MyFirst<arr2> // expected to be 3