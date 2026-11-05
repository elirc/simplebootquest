---
slug: "async-predict-map-set-8"
title: "Predict the Output: Map and Set #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 3, 2, 3, 4, 3]);\ns.delete(3);\ns.add(3);\nconsole.log(s.size);\n```","options":["`undefined`","`3`","`TypeError`","`0`"],"answer":1,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 1, 2, 1, 1, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`6 [ 4, 1, 2, 1, 1, 3 ]`","`0`","`4 [ 4, 1, 2, 3 ]`"],"answer":3,"explanation":"It logs `4 [ 4, 1, 2, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 4, 4, 4, 3, 4]);\ns.delete(2);\ns.add(4);\nconsole.log(s.size);\n```","options":["`undefined`","`2`","`TypeError`","`0`"],"answer":1,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 4, 1, 3, 1, 2]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`6 [ 1, 4, 1, 3, 1, 2 ]`","`4 [ 1, 4, 3, 2 ]`","`0`"],"answer":2,"explanation":"It logs `4 [ 1, 4, 3, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 3, 4, 1, 4, 2]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`0`","`6 [ 2, 3, 4, 1, 4, 2 ]`","`4 [ 2, 3, 4, 1 ]`"],"answer":3,"explanation":"It logs `4 [ 2, 3, 4, 1 ]`."}]
---
# Predict the Output: Map and Set #8

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
