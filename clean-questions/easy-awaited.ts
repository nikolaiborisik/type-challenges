import { Equal, Expect } from '../helpers'

type X = Promise<string>
type Y = Promise<{ field: number }>

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>,
]

// Template 
type Awaited = any
