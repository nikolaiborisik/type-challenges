import { Equal, Expect } from '../helpers'

type cases = [
    Expect<Equal<RequiredKeys<{ a: number, b?: string }>, "a">>,
    Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined }>, "a">>,
    Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined, c: string, d: null }>, "a" | "c" | "d">>,
    Expect<Equal<RequiredKeys<{}>, never>>
]

// Template 
type RequiredKeys<T> = any
