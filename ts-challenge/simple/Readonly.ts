/**
实现 Readonly
要求：
不要使用内置的Readonly<T>，自己实现一个。
该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。
也就是不可以再对该对象的属性赋值。
例如：
    interface Todo {
        title: string
        description: string
    }
    
    const todo: MyReadonly<Todo> = {
        title: "Hey",
        description: "foobar"
    }
    
    todo.title = "Hello" // Error: cannot reassign a readonly property
    todo.description = "barFoo" // Error: cannot reassign a readonly property
 */

// 解题思路：
// 1. 使用in循环遍历T的key
// 2. 把属性添加readonly
type MyReadonly<T> = {
    readonly [key in keyof T]: T[key]
}