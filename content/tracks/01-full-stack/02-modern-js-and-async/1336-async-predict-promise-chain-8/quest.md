---
slug: "async-predict-promise-chain-8"
title: "Predict the Output: Promise chains #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve(1)\n  .then((x) => x * 4)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`3`","`boom 4`","`error`","(nothing is logged)"],"answer":1,"explanation":"It logs `boom 4`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(2)\n  .then((x) => x * 4)\n  .then((x) => x + 3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`error`","(nothing is logged)","`boom 11`","`11`"],"answer":2,"explanation":"It logs `boom 11`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(4)\n  .then((x) => x * 4)\n  .then((x) => x + 3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`error`","`19`","`boom 19`"],"answer":3,"explanation":"It logs `boom 19`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .then((x) => x + 2)\n  .then((x) => x - 1)\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["`boom 3`","`error`","`4`","(nothing is logged)"],"answer":0,"explanation":"It logs `boom 3`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve(3)\n  .then((x) => x * 3)\n  .then((x) => x + 5)\n  .then((x) => { throw new Error(\"boom \" + x); })\n  .catch((e) => e.message)\n  .then((v) => console.log(v));\n```","options":["(nothing is logged)","`error`","`boom 14`","`14`"],"answer":2,"explanation":"It logs `boom 14`."}]
---
# Predict the Output: Promise chains #8

Each `.then` gets the previous return value. A thrown error skips to the next `.catch`, and whatever `.catch` returns flows on to the following `.then`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
