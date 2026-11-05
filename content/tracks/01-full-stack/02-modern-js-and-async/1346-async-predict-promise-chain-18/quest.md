---
slug: "async-predict-promise-chain-18"
title: "Predict the Output: Promise chains #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve(4)\n  .then((x) => x * 5)\n  .then((x) => x + 2)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","`22`","`boom 22`","(nothing is logged)"],"answer":2,"explanation":"It logs `boom 22`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => x * 4)\n  .then((x) => x + 5)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`17`","`error`","(nothing is logged)","`boom 17`"],"answer":3,"explanation":"It logs `boom 17`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(2)\n  .then((x) => x * 2)\n  .then((x) => x + 2)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`boom 6`","`error`","`6`"],"answer":1,"explanation":"It logs `boom 6`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => x * 4)\n  .then((x) => x + 3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`15`","`error`","`boom 15`","(nothing is logged)"],"answer":2,"explanation":"It logs `boom 15`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(4)\n  .then((x) => x * 2)\n  .then((x) => x + 3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`11`","`boom 11`","`error`","(nothing is logged)"],"answer":1,"explanation":"It logs `boom 11`."}]
---
# Predict the Output: Promise chains #18

Each `.then` gets the previous return value. A thrown error skips to the next `.catch`, and whatever `.catch` returns flows on to the following `.then`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
