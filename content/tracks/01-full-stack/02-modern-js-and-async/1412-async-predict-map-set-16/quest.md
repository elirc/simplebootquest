---
slug: "async-predict-map-set-16"
title: "Predict the Output: Map and Set #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 2, 2, 1, 3, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`0`","`undefined`","`3 [ 1, 2, 3 ]`","`6 [ 1, 2, 2, 1, 3, 3 ]`"],"answer":2,"explanation":"It logs `3 [ 1, 2, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 3, 1, 1, 4, 3]);\ns.delete(4);\ns.add(3);\nconsole.log(s.size);\n```","options":["`0`","`2`","`undefined`","`TypeError`"],"answer":1,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 3, 2, 1, 3, 1]);\ns.delete(4);\ns.add(3);\nconsole.log(s.size);\n```","options":["`undefined`","`0`","`3`","`TypeError`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 1, 2, 3, 2, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`6 [ 3, 1, 2, 3, 2, 3 ]`","`3 [ 3, 1, 2 ]`","`undefined`","`0`"],"answer":1,"explanation":"It logs `3 [ 3, 1, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 3, 4, 1, 2, 2]);\nconsole.log(s.size, [...s]);\n```","options":["`0`","`6 [ 1, 3, 4, 1, 2, 2 ]`","`4 [ 1, 3, 4, 2 ]`","`undefined`"],"answer":2,"explanation":"It logs `4 [ 1, 3, 4, 2 ]`."}]
---
# Predict the Output: Map and Set #16

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
