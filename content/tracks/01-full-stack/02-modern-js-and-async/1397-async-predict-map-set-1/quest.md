---
slug: "async-predict-map-set-1"
title: "Predict the Output: Map and Set #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst m = new Map([[1, \"one\"], [\"1\", \"string one\"]]);\nconsole.log(m.get(1), m.size);\n```","options":["`undefined 1`","`one undefined`","`undefined`","`one 2`"],"answer":3,"explanation":"It logs `one 2`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([1, 4, 1, 4, 1, 2]);\nconsole.log(s.size, [...s]);\n```","options":["`6 [ 1, 4, 1, 4, 1, 2 ]`","`undefined`","`3 [ 1, 4, 2 ]`","`0`"],"answer":2,"explanation":"It logs `3 [ 1, 4, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([{ id: 1 }, { id: 1 }]);\nconsole.log(s.size);\n```","options":["`undefined`","`TypeError`","`2`","`0`"],"answer":2,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst m = new Map();\nm.set(\"a\", 1).set(\"b\", 2).set(\"a\", 3);\nconsole.log(m.size, m.get(\"a\"));\n```","options":["`2 1`","`undefined 3`","`undefined`","`2 3`"],"answer":3,"explanation":"It logs `2 3`."},{"prompt":"What does this log?\n\n```js\nconst s = new Set([2, 3, 4, 2, 2, 4]);\ns.delete(2);\ns.add(3);\nconsole.log(s.size);\n```","options":["`undefined`","`TypeError`","`2`","`0`"],"answer":2,"explanation":"It logs `2`."}]
---
# Predict the Output: Map and Set #1

A `Set` keeps unique values (by `===`, so two equal-looking objects are different). A `Map` keeps insertion order and allows any key type.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
