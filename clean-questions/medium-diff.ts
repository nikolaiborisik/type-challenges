import { Equal, Expect, ExpectFalse, NotEqual } from '../helpers'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>
]

// Template 
type Diff<O, O1> = any
