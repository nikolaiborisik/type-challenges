import { Equal, Expect, NotAny } from '../helpers'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]

// Template 
type HelloWorld = any // expected to be a string
