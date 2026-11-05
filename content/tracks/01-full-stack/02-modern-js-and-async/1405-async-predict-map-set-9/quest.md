---
slug: "async-predict-map-set-9"
title: "Predict the Output: Map and Set #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 1, 3, 3, 4, 2]);\nconsole.log(s.size, [...s]);\n```","options":["`0`","`4 [ 1, 3, 4, 2 ]`","`6 [ 1, 1, 3, 3, 4, 2 ]`","`undefined`"],"answer":1,"explanation":"It logs `4 [ 1, 3, 4, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 2, 2, 3, 3, 1]);\nconsole.log(s.size, [...s]);\n```","options":["`6 [ 1, 2, 2, 3, 3, 1 ]`","`3 [ 1, 2, 3 ]`","`undefined`","`0`"],"answer":1,"explanation":"It logs `3 [ 1, 2, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 4, 3, 1, 4, 1]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`6 [ 2, 4, 3, 1, 4, 1 ]`","`4 [ 2, 4, 3, 1 ]`","`0`"],"answer":2,"explanation":"It logs `4 [ 2, 4, 3, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 2, 2, 4, 4, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`0`","`undefined`","`6 [ 1, 2, 2, 4, 4, 3 ]`","`4 [ 1, 2, 4, 3 ]`"],"answer":3,"explanation":"It logs `4 [ 1, 2, 4, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 2, 3, 3, 2, 1]);\nconsole.log(s.size, [...s]);\n```","options":["`0`","`4 [ 4, 2, 3, 1 ]`","`6 [ 4, 2, 3, 3, 2, 1 ]`","`undefined`"],"answer":1,"explanation":"It logs `4 [ 4, 2, 3, 1 ]`."}]
---
# Predict the Output: Map and Set #9

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
