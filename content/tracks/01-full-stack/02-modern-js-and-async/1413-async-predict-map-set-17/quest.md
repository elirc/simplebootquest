---
slug: "async-predict-map-set-17"
title: "Predict the Output: Map and Set #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 1, 3, 4, 2, 2]);\nconsole.log(s.size, [...s]);\n```","options":["`6 [ 4, 1, 3, 4, 2, 2 ]`","`0`","`undefined`","`4 [ 4, 1, 3, 2 ]`"],"answer":3,"explanation":"It logs `4 [ 4, 1, 3, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 1, 3, 4, 1, 3]);\ns.delete(2);\ns.add(1);\nconsole.log(s.size);\n```","options":["`TypeError`","`undefined`","`0`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 3, 2, 4, 3, 2]);\nconsole.log(s.size, [...s]);\n```","options":["`0`","`6 [ 1, 3, 2, 4, 3, 2 ]`","`undefined`","`4 [ 1, 3, 2, 4 ]`"],"answer":3,"explanation":"It logs `4 [ 1, 3, 2, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 2, 3, 1, 2, 2]);\ns.delete(1);\ns.add(2);\nconsole.log(s.size);\n```","options":["`2`","`0`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 3, 4, 1, 1, 2]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`0`","`4 [ 4, 3, 1, 2 ]`","`6 [ 4, 3, 4, 1, 1, 2 ]`"],"answer":2,"explanation":"It logs `4 [ 4, 3, 1, 2 ]`."}]
---
# Predict the Output: Map and Set #17

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
