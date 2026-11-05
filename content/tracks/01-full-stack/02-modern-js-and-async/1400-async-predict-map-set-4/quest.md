---
slug: "async-predict-map-set-4"
title: "Predict the Output: Map and Set #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 1, 2, 1, 1, 2]);\ns.delete(2);\ns.add(1);\nconsole.log(s.size);\n```","options":["`0`","`undefined`","`1`","`TypeError`"],"answer":2,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 3, 4, 4, 3, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`6 [ 4, 3, 4, 4, 3, 3 ]`","`0`","`2 [ 4, 3 ]`","`undefined`"],"answer":2,"explanation":"It logs `2 [ 4, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 2, 1, 4, 3, 4]);\ns.delete(3);\ns.add(2);\nconsole.log(s.size);\n```","options":["`TypeError`","`0`","`undefined`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 2, 3, 1, 2, 4]);\nconsole.log(s.size, [...s]);\n```","options":["`4 [ 2, 3, 1, 4 ]`","`undefined`","`0`","`6 [ 2, 2, 3, 1, 2, 4 ]`"],"answer":0,"explanation":"It logs `4 [ 2, 3, 1, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 4, 2, 1, 3, 4]);\ns.delete(4);\ns.add(4);\nconsole.log(s.size);\n```","options":["`undefined`","`0`","`TypeError`","`4`"],"answer":3,"explanation":"It logs `4`."}]
---
# Predict the Output: Map and Set #4

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
