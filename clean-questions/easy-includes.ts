import { Equal, Expect, ExpectFalse, NotEqual } from '../helpers'

type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars','Esidisi','Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
]

// Template 
type Includes<T extends readonly any[], U> = any;
