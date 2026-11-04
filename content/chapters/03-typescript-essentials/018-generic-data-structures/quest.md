---
slug: "ts-generic-classes"
title: "Generic Classes: Stack & Queue"
type: "code"
language: "ts"
xp: 20
hints: ["Back both classes with a private array.", "For brackets: push openers, and on a closer, pop and compare with its matching opener."]
resources: [{"title": "TS Handbook: Classes", "url": "https://www.typescriptlang.org/docs/handbook/2/classes.html"}]
---
# Generic Classes: Stack & Queue

Classes can be generic too: one implementation, any element type, full type safety.

```ts
class Box<T> {
  constructor(private value: T) {}   // parameter property: declares and assigns
  get(): T { return this.value; }
}
new Box(42).get();   // number
```

TypeScript adds **access modifiers**: `private` and `protected` are compile-time only, while JavaScript's `#private` is enforced at runtime too.

Two fundamental structures:

- **Stack** (last in, first out): undo history, the call stack, browser back.
- **Queue** (first in, first out): job queues, print queues, the event loop.

## Your task

1. `class Stack<T>` with `push(item)`, `pop(): T | undefined`, `peek(): T | undefined`, and `size` and `isEmpty` getters.
2. `class Queue<T>` with `enqueue(item)`, `dequeue(): T | undefined`, `peek()`, `size`.
3. `isBalanced(text)` uses your `Stack` to check that brackets `()[]{}` are balanced and correctly nested.
