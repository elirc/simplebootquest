---
slug: "js-predict-sort-14"
title: "Predict the Output: Default sort #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [5, 3, 40, 1, 15];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 5, 40, 3, 15, 1 ]`","`[ 1, 15, 3, 40, 5 ]`","`[ 40, 15, 5, 3, 1 ]`","`[ 1, 3, 5, 15, 40 ]`"],"answer":0,"explanation":"It logs `[ 5, 40, 3, 15, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 15, 3, 1, 40];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 40, 15, 9, 3, 1 ]`","`[ 1, 3, 9, 15, 40 ]`","`[ 9, 40, 3, 15, 1 ]`","`[ 1, 15, 3, 40, 9 ]`"],"answer":2,"explanation":"It logs `[ 9, 40, 3, 15, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 100, 9, 1, 5];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 1, 100, 40, 5, 9 ]`","`[ '9', '5', '40', '100', '1' ]`","`[ 1, 5, 9, 40, 100 ]`","`[ 100, 40, 9, 5, 1 ]`"],"answer":3,"explanation":"It logs `[ 100, 40, 9, 5, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 100, 9, 15, 5];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 9, 5, 2, 15, 100 ]`","`[ 100, 15, 9, 5, 2 ]`","`[ 100, 15, 2, 5, 9 ]`","`[ 2, 5, 9, 15, 100 ]`"],"answer":0,"explanation":"It logs `[ 9, 5, 2, 15, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [15, 3, 9, 40, 2];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ '9', '40', '3', '2', '15' ]`","`[ 2, 3, 9, 15, 40 ]`","`[ 40, 15, 9, 3, 2 ]`","`[ 15, 2, 3, 40, 9 ]`"],"answer":2,"explanation":"It logs `[ 40, 15, 9, 3, 2 ]`."}]
---
# Predict the Output: Default sort #14

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
