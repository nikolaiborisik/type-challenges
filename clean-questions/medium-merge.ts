import { Equal, Expect, ExpectFalse, NotEqual } from '../helpers'

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
};

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
	a: number;
	b: number;
  }>>
]

// Template 
type Merge<F, S> = any;
