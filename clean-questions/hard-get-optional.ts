import { Equal, Expect } from '../helpers'

type cases = [
    Expect<Equal<GetOptional<{ foo: number, bar?: string }>, { bar?: string }>>,
    Expect<Equal<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }>>,
]
// Template 
type GetOptional<T> = any
