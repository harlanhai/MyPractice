/**
实现 TS 内置的 Pick<T, K>，但不可以使用它。
从类型 T 中选择出属性 K，构造成一个新的类型。
例如：
    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    type TodoPreview = MyPick<Todo, 'title' | 'completed'>

    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    }
 * */ 

// 解题思路：
// 1. 使用 K extends T 过滤出需要过滤的属性值
// 2. 使用 key in K 来获取过滤出的 K 的键值
type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

// 调用 MyPick 实例
interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}