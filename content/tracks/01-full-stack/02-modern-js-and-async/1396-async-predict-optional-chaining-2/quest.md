---
slug: "async-predict-optional-chaining-2"
title: "Predict the Output: Optional chaining #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst api = { get: null };\nconsole.log(api.get?.(\"x\") ?? \"no getter\");\n```","options":["`undefined`","`no getter`","`TypeError`","`TypeError: Cannot read properties of null`"],"answer":1,"explanation":"It logs `no getter`."},{"prompt":"What does this log?\n\n```js\nconst cart = { items: [6] };\nconsole.log(cart.items?.[0], cart.coupons?.[0]);\n```","options":["`6 undefined`","`TypeError: Cannot read properties of null`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `6 undefined`."},{"prompt":"What does this log?\n\n```js\nconst cart = { items: [3] };\nconsole.log(cart.items?.[0], cart.coupons?.[0]);\n```","options":["`TypeError: Cannot read properties of null`","`TypeError`","`undefined`","`3 undefined`"],"answer":3,"explanation":"It logs `3 undefined`."},{"prompt":"What does this log?\n\n```js\nconst cart = { items: [7] };\nconsole.log(cart.items?.[0], cart.coupons?.[0]);\n```","options":["`TypeError`","`TypeError: Cannot read properties of null`","`undefined`","`7 undefined`"],"answer":3,"explanation":"It logs `7 undefined`."},{"prompt":"What does this log?\n\n```js\nconst cart = { items: [2] };\nconsole.log(cart.items?.[0], cart.coupons?.[0]);\n```","options":["`undefined`","`TypeError`","`TypeError: Cannot read properties of null`","`2 undefined`"],"answer":3,"explanation":"It logs `2 undefined`."}]
---
# Predict the Output: Optional chaining #2

`a?.b` returns `undefined` (instead of throwing) when `a` is `null`/`undefined`. Combine it with `??` for defaults.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
