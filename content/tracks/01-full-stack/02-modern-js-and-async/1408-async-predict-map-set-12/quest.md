---
slug: "async-predict-map-set-12"
title: "Predict the Output: Map and Set #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 4, 3, 2, 2, 4]);\nconsole.log(s.size, [...s]);\n```","options":["`3 [ 3, 4, 2 ]`","`undefined`","`0`","`6 [ 3, 4, 3, 2, 2, 4 ]`"],"answer":0,"explanation":"It logs `3 [ 3, 4, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 2, 1, 2, 2, 4]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`0`","`3 [ 4, 2, 1 ]`","`6 [ 4, 2, 1, 2, 2, 4 ]`"],"answer":2,"explanation":"It logs `3 [ 4, 2, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 2, 4, 1, 3, 2]);\ns.delete(3);\ns.add(2);\nconsole.log(s.size);\n```","options":["`3`","`TypeError`","`0`","`undefined`"],"answer":0,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 1, 4, 3, 4, 4]);\ns.delete(4);\ns.add(1);\nconsole.log(s.size);\n```","options":["`TypeError`","`2`","`0`","`undefined`"],"answer":1,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 3, 1, 1, 1, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`3 [ 2, 3, 1 ]`","`0`","`6 [ 2, 3, 1, 1, 1, 3 ]`","`undefined`"],"answer":0,"explanation":"It logs `3 [ 2, 3, 1 ]`."}]
---
# Predict the Output: Map and Set #12

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
