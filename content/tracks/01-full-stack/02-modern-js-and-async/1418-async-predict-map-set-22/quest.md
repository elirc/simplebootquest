---
slug: "async-predict-map-set-22"
title: "Predict the Output: Map and Set #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 3, 3, 2, 3, 1]);\ns.delete(1);\ns.add(3);\nconsole.log(s.size);\n```","options":["`undefined`","`TypeError`","`2`","`0`"],"answer":2,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 1, 2, 3, 2, 3]);\ns.delete(2);\ns.add(1);\nconsole.log(s.size);\n```","options":["`2`","`TypeError`","`0`","`undefined`"],"answer":0,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 1, 3, 2, 4, 2]);\ns.delete(1);\ns.add(1);\nconsole.log(s.size);\n```","options":["`TypeError`","`0`","`4`","`undefined`"],"answer":2,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 3, 2, 4, 2, 1]);\nconsole.log(s.size, [...s]);\n```","options":["`6 [ 1, 3, 2, 4, 2, 1 ]`","`undefined`","`4 [ 1, 3, 2, 4 ]`","`0`"],"answer":2,"explanation":"It logs `4 [ 1, 3, 2, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 2, 4, 4, 3, 1]);\nconsole.log(s.size, [...s]);\n```","options":["`4 [ 4, 2, 3, 1 ]`","`0`","`undefined`","`6 [ 4, 2, 4, 4, 3, 1 ]`"],"answer":0,"explanation":"It logs `4 [ 4, 2, 3, 1 ]`."}]
---
# Predict the Output: Map and Set #22

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
