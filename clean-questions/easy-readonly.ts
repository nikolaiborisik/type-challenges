import { Equal, Expect } from '../helpers'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
}

// Template 
type MyReadonly<T> = any
