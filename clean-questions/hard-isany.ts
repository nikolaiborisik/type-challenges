import { Equal, Expect } from '../helpers'

type cases = [
  Expect<Equal<IsAny<any>, true>>,
  
  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
]

// Template 
type IsAny<T> = any
