---
slug: "async-predict-promise-chain-6"
title: "Predict the Output: Promise chains #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x + 3)\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`5`","(nothing is logged)","`boom 3`","`error`"],"answer":2,"explanation":"It logs `boom 3`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(2)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x + 4)\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`boom 2`","`error`","`5`"],"answer":1,"explanation":"It logs `boom 2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => x * 4)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","(nothing is logged)","`boom 12`","`11`"],"answer":2,"explanation":"It logs `boom 12`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(2)\n  .then((x) => x * 4)\n  .then((x) => x + 5)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","`boom 13`","(nothing is logged)","`13`"],"answer":1,"explanation":"It logs `boom 13`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(1)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x + 3)\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`boom 1`","`3`","`error`"],"answer":1,"explanation":"It logs `boom 1`."}]
---
# Predict the Output: Promise chains #6

Each `.then` gets the previous return value. A thrown error skips to the next `.catch`, and whatever `.catch` returns flows on to the following `.then`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
