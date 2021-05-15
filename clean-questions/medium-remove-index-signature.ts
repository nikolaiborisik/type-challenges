import { Equal, Expect, ExpectFalse, NotEqual } from '../helpers'


type Foo = {
  [key: string]: any;
  foo(): void;
}


type Bar = {
  [key: number]: any;
  bar(): void;
}

type Baz = {
  bar(): void;
  baz: string
}


type cases = [
  Expect<Equal< RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal< RemoveIndexSignature<Bar>, { bar(): void }>>,
  Expect<Equal< RemoveIndexSignature<Baz>, { bar(): void, baz: string }>>
]

// Template 
type RemoveIndexSignature<T> = any
