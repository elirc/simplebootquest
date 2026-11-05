---
slug: "async-predict-promise-chain-7"
title: "Predict the Output: Promise chains #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => x * 2)\n  .then((x) => x + 2)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`8`","`boom 8`","`error`"],"answer":2,"explanation":"It logs `boom 8`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => x * 3)\n  .then((x) => x + 3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`12`","`error`","`boom 12`","(nothing is logged)"],"answer":2,"explanation":"It logs `boom 12`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(1)\n  .then((x) => x * 3)\n  .then((x) => x + 5)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`error`","`8`","`boom 8`"],"answer":3,"explanation":"It logs `boom 8`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(1)\n  .then((x) => x * 2)\n  .then((x) => x + 4)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`6`","`error`","(nothing is logged)","`boom 6`"],"answer":3,"explanation":"It logs `boom 6`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(4)\n  .then((x) => x * 4)\n  .then((x) => x + 4)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`error`","`20`","`boom 20`"],"answer":3,"explanation":"It logs `boom 20`."}]
---
# Predict the Output: Promise chains #7

Each `.then` gets the previous return value. A thrown error skips to the next `.catch`, and whatever `.catch` returns flows on to the following `.then`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
