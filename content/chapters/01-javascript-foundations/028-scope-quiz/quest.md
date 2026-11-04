---
slug: "js-scope-quiz"
title: "Checkpoint: Scope & Functions"
type: "quiz"
xp: 10
questions: [{"prompt": "What does `(x) => { x * 2 }` return?", "options": ["x * 2", "undefined", "A syntax error"], "answer": 1, "explanation": "Braces start a block, which needs an explicit return."}, {"prompt": "Where is a `const` declared inside an `if` block visible?", "options": ["Everywhere in the file", "Only inside that block", "Inside the whole function"], "answer": 1}, {"prompt": "Which of these is a pure function?", "options": ["(arr) => arr.sort()", "(a, b) => a + b", "() => Date.now()"], "answer": 1, "explanation": "`sort` mutates its input, and `Date.now()` returns a different value every call."}, {"prompt": "A recursive function without a base case will…", "options": ["Return undefined", "Throw \"Maximum call stack size exceeded\"", "Run forever silently"], "answer": 1}, {"prompt": "What does a rest parameter `...args` give you?", "options": ["A string", "A real array of the remaining arguments", "An object"], "answer": 1}]
---
# Checkpoint: Scope & Functions

**Scope** decides where a variable can be seen. `let` and `const` are **block-scoped**: they only exist inside the nearest `{ }`. `var` is function-scoped and hoisted, which is one more reason to avoid it.

```js
if (true) {
  const inside = 1;
}
console.log(inside); // ReferenceError
```

Answer every question correctly to earn the XP.
