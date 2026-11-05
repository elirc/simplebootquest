---
slug: "async-predict-map-set-11"
title: "Predict the Output: Map and Set #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 2, 3, 3, 4, 1]);\ns.delete(1);\ns.add(2);\nconsole.log(s.size);\n```","options":["`TypeError`","`undefined`","`0`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 1, 2, 2, 3, 2]);\nconsole.log(s.size, [...s]);\n```","options":["`4 [ 4, 1, 2, 3 ]`","`0`","`6 [ 4, 1, 2, 2, 3, 2 ]`","`undefined`"],"answer":0,"explanation":"It logs `4 [ 4, 1, 2, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 1, 4, 2, 1, 3]);\ns.delete(3);\ns.add(1);\nconsole.log(s.size);\n```","options":["`3`","`undefined`","`0`","`TypeError`"],"answer":0,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 3, 4, 1, 4, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`4 [ 2, 3, 4, 1 ]`","`6 [ 2, 3, 4, 1, 4, 3 ]`","`0`"],"answer":1,"explanation":"It logs `4 [ 2, 3, 4, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 1, 1, 1, 1, 3]);\ns.delete(3);\ns.add(1);\nconsole.log(s.size);\n```","options":["`TypeError`","`1`","`0`","`undefined`"],"answer":1,"explanation":"It logs `1`."}]
---
# Predict the Output: Map and Set #11

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
