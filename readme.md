# TODO for TypeScript

Utility function to indicate unfinished code by throwing with a message of "Not yet implemented".

This can be useful if you are prototyping and are just looking to have your code typecheck.

The difference between [`unimplemented`][unimplemented] and `todo` is that while `todo` conveys an intent of implementing the functionality later and the message is "Not yet implemented", [`unimplemented`][unimplemented] makes no such claims. Its message is "Not implemented".

[unimplemented]: https://github.com/LinusU/ts-unimplemented

Advantages over simply throwing an error:

- You can easily search your codebase for `todo()`
- The error thrown will have the code `ERR_TODO`
- Very clear what intentions it conveys

## Installation

```sh
npm install --save ts-todo
```

## Usage

```typescript
import todo from 'ts-todo'

// Here's an example of some in-progress code. We have a interface Foo:
interface Foo {
  bar(): string
  baz(): number
}

// We want to implement Foo on one of our types, but we also want to work on just bar() first.
// In order for our code to compile, we need to implement baz(), so we can use todo:
class MyClass implements Foo {
  bar () {
    return 'test'
  }

  baz () {
    return todo()
  }
}
```

## Related Packages

- [`ts-unimplemented`](https://github.com/LinusU/ts-unimplemented)
- [`ts-unreachable`](https://github.com/LinusU/ts-unreachable)
- [`ts-unwrap`](https://github.com/LinusU/ts-unwrap)

## Prior Art

- Rust [`todo` macro](https://doc.rust-lang.org/std/macro.todo.html)
