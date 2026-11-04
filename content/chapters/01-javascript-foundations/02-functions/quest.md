---
slug: js-functions
title: Functions
type: code
language: js
xp: 10
---
# Functions

Functions package up logic so you can reuse it and give it a name.

```js
// Function declaration — hoisted, usable before it's defined
function add(a, b) {
  return a + b;
}

// Arrow function — concise, great for callbacks
const multiply = (a, b) => a * b;
```

### Default parameters

Parameters can have defaults that kick in when an argument is `undefined`:

```js
function greet(name, greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}
greet('Ada');          // "Hello, Ada!"
greet('Ada', 'Hey');   // "Hey, Ada!"
```

### Functions are values

You can store functions in variables, pass them as arguments, and return them from other functions. A function that returns a function is a powerful pattern:

```js
function makeMultiplier(factor) {
  return (n) => n * factor;
}
const double = makeMultiplier(2);
double(5); // 10
```

The inner function "remembers" `factor` even after `makeMultiplier` has returned. That's called a **closure**, and you'll use it constantly (React hooks are built on them!).

## Your task

1. `greet(name, greeting)` returns `"<greeting>, <name>!"`, with `greeting` defaulting to `"Hello"`.
2. `makeCounter()` returns a function. Each call to that function returns the next number, starting at `1`. Two counters must not share state.
