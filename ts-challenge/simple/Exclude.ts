/**
  实现内置的 Exclude<T, U> 类型，但不能直接使用它本身。
  从联合类型 T 中排除 U 中的类型，来构造一个新的类型。

  例如：
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
 */
type MyExclude<T, U> = T extends U ? never : T;
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'