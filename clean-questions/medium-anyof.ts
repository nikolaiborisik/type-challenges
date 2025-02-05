import { Equal, Expect, ExpectFalse, NotEqual } from '../helpers'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], {name: 'test'}, {1: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {name: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {1: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {name: 'test'}, {1: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]

// Template 
type AnyOf<T extends readonly any[]> = any;
