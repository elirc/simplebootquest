---
slug: "async-predict-promise-chain-11"
title: "Predict the Output: Promise chains #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve(1)\n  .then((x) => x * 4)\n  .then((x) => x + 4)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`error`","`boom 8`","`8`"],"answer":2,"explanation":"It logs `boom 8`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(1)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x + 4)\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`4`","`boom 1`","`error`"],"answer":2,"explanation":"It logs `boom 1`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => x * 2)\n  .then((x) => x + 4)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","(nothing is logged)","`10`","`boom 10`"],"answer":3,"explanation":"It logs `boom 10`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(2)\n  .then((x) => x * 2)\n  .then((x) => x + 3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","`7`","(nothing is logged)","`boom 7`"],"answer":3,"explanation":"It logs `boom 7`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(1)\n  .then((x) => x * 3)\n  .then((x) => x + 3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`error`","`boom 6`","`6`"],"answer":2,"explanation":"It logs `boom 6`."}]
---
# Predict the Output: Promise chains #11

Each `.then` gets the previous return value. A thrown error skips to the next `.catch`, and whatever `.catch` returns flows on to the following `.then`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
