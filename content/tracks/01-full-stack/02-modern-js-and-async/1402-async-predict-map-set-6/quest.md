---
slug: "async-predict-map-set-6"
title: "Predict the Output: Map and Set #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 3, 3, 4, 4, 2]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`0`","`6 [ 2, 3, 3, 4, 4, 2 ]`","`3 [ 2, 3, 4 ]`"],"answer":3,"explanation":"It logs `3 [ 2, 3, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 1, 3, 1, 4, 1]);\ns.delete(3);\ns.add(1);\nconsole.log(s.size);\n```","options":["`0`","`2`","`undefined`","`TypeError`"],"answer":1,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 4, 4, 3, 4, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`3 [ 2, 4, 3 ]`","`0`","`6 [ 2, 4, 4, 3, 4, 3 ]`","`undefined`"],"answer":0,"explanation":"It logs `3 [ 2, 4, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 4, 4, 4, 3, 1]);\ns.delete(1);\ns.add(4);\nconsole.log(s.size);\n```","options":["`2`","`TypeError`","`0`","`undefined`"],"answer":0,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 4, 4, 3, 1, 1]);\nconsole.log(s.size, [...s]);\n```","options":["`6 [ 1, 4, 4, 3, 1, 1 ]`","`3 [ 1, 4, 3 ]`","`0`","`undefined`"],"answer":1,"explanation":"It logs `3 [ 1, 4, 3 ]`."}]
---
# Predict the Output: Map and Set #6

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
