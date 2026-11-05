---
slug: "async-predict-promise-chain-16"
title: "Predict the Output: Promise chains #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve(4)\n  .then((x) => x * 3)\n  .then((x) => x + 5)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`17`","`boom 17`","(nothing is logged)","`error`"],"answer":1,"explanation":"It logs `boom 17`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => x * 4)\n  .then((x) => x + 4)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","`boom 16`","`16`","(nothing is logged)"],"answer":1,"explanation":"It logs `boom 16`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => x * 3)\n  .then((x) => x + 4)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`boom 13`","`error`","`13`","(nothing is logged)"],"answer":0,"explanation":"It logs `boom 13`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => x * 2)\n  .then((x) => x + 5)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`11`","`boom 11`","(nothing is logged)","`error`"],"answer":1,"explanation":"It logs `boom 11`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(1)\n  .then((x) => x * 2)\n  .then((x) => x + 2)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`boom 4`","(nothing is logged)","`error`","`4`"],"answer":0,"explanation":"It logs `boom 4`."}]
---
# Predict the Output: Promise chains #16

Each `.then` gets the previous return value. A thrown error skips to the next `.catch`, and whatever `.catch` returns flows on to the following `.then`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
