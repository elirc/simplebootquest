---
slug: "async-predict-map-set-10"
title: "Predict the Output: Map and Set #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 2, 1, 3, 2, 4]);\ns.delete(2);\ns.add(2);\nconsole.log(s.size);\n```","options":["`undefined`","`TypeError`","`0`","`4`"],"answer":3,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 2, 4, 4, 2, 1]);\ns.delete(3);\ns.add(2);\nconsole.log(s.size);\n```","options":["`3`","`undefined`","`TypeError`","`0`"],"answer":0,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 2, 4, 3, 1, 3]);\ns.delete(4);\ns.add(2);\nconsole.log(s.size);\n```","options":["`TypeError`","`0`","`undefined`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 4, 4, 2, 3, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`0`","`3 [ 3, 4, 2 ]`","`undefined`","`6 [ 3, 4, 4, 2, 3, 3 ]`"],"answer":1,"explanation":"It logs `3 [ 3, 4, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 2, 1, 4, 1, 1]);\ns.delete(4);\ns.add(2);\nconsole.log(s.size);\n```","options":["`0`","`TypeError`","`2`","`undefined`"],"answer":2,"explanation":"It logs `2`."}]
---
# Predict the Output: Map and Set #10

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
