---
slug: "async-predict-map-set-21"
title: "Predict the Output: Map and Set #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 1, 4, 1, 1, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`6 [ 2, 1, 4, 1, 1, 3 ]`","`0`","`4 [ 2, 1, 4, 3 ]`","`undefined`"],"answer":2,"explanation":"It logs `4 [ 2, 1, 4, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 3, 2, 3, 3, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`0`","`6 [ 1, 3, 2, 3, 3, 3 ]`","`3 [ 1, 3, 2 ]`"],"answer":3,"explanation":"It logs `3 [ 1, 3, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 1, 4, 3, 2, 4]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`6 [ 3, 1, 4, 3, 2, 4 ]`","`0`","`4 [ 3, 1, 4, 2 ]`"],"answer":3,"explanation":"It logs `4 [ 3, 1, 4, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 3, 2, 3, 4, 4]);\nconsole.log(s.size, [...s]);\n```","options":["`4 [ 1, 3, 2, 4 ]`","`6 [ 1, 3, 2, 3, 4, 4 ]`","`0`","`undefined`"],"answer":0,"explanation":"It logs `4 [ 1, 3, 2, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 3, 1, 4, 3, 2]);\ns.delete(1);\ns.add(3);\nconsole.log(s.size);\n```","options":["`TypeError`","`undefined`","`3`","`0`"],"answer":2,"explanation":"It logs `3`."}]
---
# Predict the Output: Map and Set #21

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
