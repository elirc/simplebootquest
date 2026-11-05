---
slug: "async-predict-optional-chaining-1"
title: "Predict the Output: Optional chaining #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst user = { profile: null };\nconsole.log(user.profile?.name ?? \"anon\");\n```","options":["`anon`","`TypeError`","`TypeError: Cannot read properties of null`","`undefined`"],"answer":0,"explanation":"It logs `anon`."},{"prompt":"What does this log?\n\n```js\nconst cart = { items: [4] };\nconsole.log(cart.items?.[0], cart.coupons?.[0]);\n```","options":["`TypeError: Cannot read properties of null`","`TypeError`","`undefined`","`4 undefined`"],"answer":3,"explanation":"It logs `4 undefined`."},{"prompt":"What does this log?\n\n```js\nconst cart = { items: [1] };\nconsole.log(cart.items?.[0], cart.coupons?.[0]);\n```","options":["`undefined`","`1 undefined`","`TypeError: Cannot read properties of null`","`TypeError`"],"answer":1,"explanation":"It logs `1 undefined`."},{"prompt":"What does this log?\n\n```js\nconst user = { profile: { name: \"\" } };\nconsole.log(user.profile?.name || \"anon\", user.profile?.name ?? \"anon\");\n```","options":["`anon anon`","` `","`TypeError: Cannot read properties of null`","`anon `"],"answer":3,"explanation":"It logs `anon `."},{"prompt":"What does this log?\n\n```js\nconst cart = { items: [9] };\nconsole.log(cart.items?.[0], cart.coupons?.[0]);\n```","options":["`TypeError`","`TypeError: Cannot read properties of null`","`undefined`","`9 undefined`"],"answer":3,"explanation":"It logs `9 undefined`."}]
---
# Predict the Output: Optional chaining #1

`a?.b` returns `undefined` (instead of throwing) when `a` is `null`/`undefined`. Combine it with `??` for defaults.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
