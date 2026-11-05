---
slug: "async-predict-map-set-3"
title: "Predict the Output: Map and Set #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 1, 2, 2, 4, 1]);\nconsole.log(s.size, [...s]);\n```","options":["`0`","`undefined`","`3 [ 1, 2, 4 ]`","`6 [ 1, 1, 2, 2, 4, 1 ]`"],"answer":2,"explanation":"It logs `3 [ 1, 2, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([3, 3, 2, 3, 1, 3]);\ns.delete(3);\ns.add(3);\nconsole.log(s.size);\n```","options":["`0`","`undefined`","`3`","`TypeError`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 1, 2, 1, 1, 3]);\ns.delete(4);\ns.add(1);\nconsole.log(s.size);\n```","options":["`3`","`0`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 2, 2, 4, 3, 3]);\nconsole.log(s.size, [...s]);\n```","options":["`undefined`","`0`","`3 [ 2, 4, 3 ]`","`6 [ 2, 2, 2, 4, 3, 3 ]`"],"answer":2,"explanation":"It logs `3 [ 2, 4, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([4, 3, 1, 2, 2, 3]);\ns.delete(4);\ns.add(3);\nconsole.log(s.size);\n```","options":["`0`","`undefined`","`3`","`TypeError`"],"answer":2,"explanation":"It logs `3`."}]
---
# Predict the Output: Map and Set #3

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
