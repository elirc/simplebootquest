---
slug: "async-predict-promise-chain-1"
title: "Predict the Output: Promise chains #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve(2)\n  .then((x) => x * 2)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`3`","(nothing is logged)","`boom 4`","`error`"],"answer":2,"explanation":"It logs `boom 4`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(4)\n  .then((x) => x * 5)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`error`","`boom 20`","`19`"],"answer":2,"explanation":"It logs `boom 20`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(2)\n  .then((x) => x * 5)\n  .then((x) => x + 4)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","`boom 14`","(nothing is logged)","`14`"],"answer":1,"explanation":"It logs `boom 14`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(4)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x + 5)\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`8`","`boom 4`","(nothing is logged)","`error`"],"answer":1,"explanation":"It logs `boom 4`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(2)\n  .then((x) => x * 3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","(nothing is logged)","`5`","`boom 6`"],"answer":3,"explanation":"It logs `boom 6`."}]
---
# Predict the Output: Promise chains #1

Each `.then` gets the previous return value. A thrown error skips to the next `.catch`, and whatever `.catch` returns flows on to the following `.then`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
