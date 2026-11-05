---
slug: "async-predict-promise-chain-5"
title: "Predict the Output: Promise chains #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve(1)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x + 2)\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","`boom 1`","`2`","(nothing is logged)"],"answer":1,"explanation":"It logs `boom 1`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(1)\n  .then((x) => x * 5)\n  .then((x) => x + 5)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","(nothing is logged)","`boom 10`","`10`"],"answer":2,"explanation":"It logs `boom 10`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => x * 3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","(nothing is logged)","`boom 9`","`8`"],"answer":2,"explanation":"It logs `boom 9`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x + 5)\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","(nothing is logged)","`7`","`boom 3`"],"answer":3,"explanation":"It logs `boom 3`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(2)\n  .then((x) => x * 3)\n  .then((x) => x + 5)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`boom 11`","`11`","`error`"],"answer":1,"explanation":"It logs `boom 11`."}]
---
# Predict the Output: Promise chains #5

Each `.then` gets the previous return value. A thrown error skips to the next `.catch`, and whatever `.catch` returns flows on to the following `.then`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
