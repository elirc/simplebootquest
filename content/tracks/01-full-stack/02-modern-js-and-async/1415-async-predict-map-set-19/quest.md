---
slug: "async-predict-map-set-19"
title: "Predict the Output: Map and Set #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 2, 4, 1, 1, 1]);\nconsole.log(s.size, [...s]);\n```","options":["`6 [ 3, 2, 4, 1, 1, 1 ]`","`0`","`4 [ 3, 2, 4, 1 ]`","`undefined`"],"answer":2,"explanation":"It logs `4 [ 3, 2, 4, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 1, 2, 1, 3, 2]);\ns.delete(3);\ns.add(1);\nconsole.log(s.size);\n```","options":["`0`","`TypeError`","`2`","`undefined`"],"answer":2,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 4, 2, 4, 2, 3]);\ns.delete(3);\ns.add(4);\nconsole.log(s.size);\n```","options":["`0`","`TypeError`","`2`","`undefined`"],"answer":2,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 3, 4, 1, 1, 4]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`6 [ 3, 3, 4, 1, 1, 4 ]`","`0`","`3 [ 3, 4, 1 ]`"],"answer":3,"explanation":"It logs `3 [ 3, 4, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 1, 1, 4, 2, 2]);\ns.delete(3);\ns.add(1);\nconsole.log(s.size);\n```","options":["`TypeError`","`undefined`","`0`","`3`"],"answer":3,"explanation":"It logs `3`."}]
---
# Predict the Output: Map and Set #19

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
