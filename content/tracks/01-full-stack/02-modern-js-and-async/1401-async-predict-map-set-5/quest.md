---
slug: "async-predict-map-set-5"
title: "Predict the Output: Map and Set #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 2, 4, 1, 2, 3]);\ns.delete(3);\ns.add(2);\nconsole.log(s.size);\n```","options":["`0`","`TypeError`","`undefined`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 1, 2, 2, 3, 2]);\ns.delete(1);\ns.add(1);\nconsole.log(s.size);\n```","options":["`0`","`TypeError`","`3`","`undefined`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 3, 4, 4, 1, 1]);\ns.delete(3);\ns.add(3);\nconsole.log(s.size);\n```","options":["`undefined`","`0`","`TypeError`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 4, 2, 3, 3, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`4 [ 1, 4, 2, 3 ]`","`0`","`6 [ 1, 4, 2, 3, 3, 3 ]`"],"answer":1,"explanation":"It logs `4 [ 1, 4, 2, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 1, 4, 3, 1, 4]);\nconsole.log(s.size, [...s]);\n```","options":["`6 [ 2, 1, 4, 3, 1, 4 ]`","`4 [ 2, 1, 4, 3 ]`","`0`","`undefined`"],"answer":1,"explanation":"It logs `4 [ 2, 1, 4, 3 ]`."}]
---
# Predict the Output: Map and Set #5

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
