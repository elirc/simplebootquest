---
slug: "async-predict-map-set-7"
title: "Predict the Output: Map and Set #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 4, 3, 4, 2, 4]);\ns.delete(3);\ns.add(4);\nconsole.log(s.size);\n```","options":["`0`","`undefined`","`2`","`TypeError`"],"answer":2,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 2, 4, 4, 4, 1]);\ns.delete(3);\ns.add(2);\nconsole.log(s.size);\n```","options":["`undefined`","`3`","`TypeError`","`0`"],"answer":1,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 1, 3, 2, 3, 1]);\nconsole.log(s.size, [...s]);\n```","options":["`4 [ 4, 1, 3, 2 ]`","`0`","`6 [ 4, 1, 3, 2, 3, 1 ]`","`undefined`"],"answer":0,"explanation":"It logs `4 [ 4, 1, 3, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 2, 4, 2, 4, 4]);\nconsole.log(s.size, [...s]);\n```","options":["`2 [ 4, 2 ]`","`undefined`","`0`","`6 [ 4, 2, 4, 2, 4, 4 ]`"],"answer":0,"explanation":"It logs `2 [ 4, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 4, 3, 1, 2, 2]);\ns.delete(3);\ns.add(4);\nconsole.log(s.size);\n```","options":["`0`","`undefined`","`3`","`TypeError`"],"answer":2,"explanation":"It logs `3`."}]
---
# Predict the Output: Map and Set #7

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
