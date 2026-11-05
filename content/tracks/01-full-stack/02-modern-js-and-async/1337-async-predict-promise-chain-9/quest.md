---
slug: "async-predict-promise-chain-9"
title: "Predict the Output: Promise chains #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve(4)\n  .then((x) => x * 5)\n  .then((x) => x + 5)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","`boom 25`","(nothing is logged)","`25`"],"answer":1,"explanation":"It logs `boom 25`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(4)\n  .then((x) => x * 3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`boom 12`","(nothing is logged)","`error`","`11`"],"answer":0,"explanation":"It logs `boom 12`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(4)\n  .then((x) => x * 4)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`15`","(nothing is logged)","`boom 16`","`error`"],"answer":2,"explanation":"It logs `boom 16`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(2)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x + 2)\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`3`","(nothing is logged)","`error`","`boom 2`"],"answer":3,"explanation":"It logs `boom 2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(2)\n  .then((x) => x * 4)\n  .then((x) => x + 2)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","`10`","(nothing is logged)","`boom 10`"],"answer":3,"explanation":"It logs `boom 10`."}]
---
# Predict the Output: Promise chains #9

Each `.then` gets the previous return value. A thrown error skips to the next `.catch`, and whatever `.catch` returns flows on to the following `.then`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
