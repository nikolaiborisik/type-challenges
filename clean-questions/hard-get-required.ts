import { Equal, Expect, ExpectFalse, NotEqual } from '../helpers'

type cases = [
    Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
    Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
]

// Template 
type GetRequired<T> = any
