---
slug: "js-predict-sort-24"
title: "Predict the Output: Default sort #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [1, 21, 40, 3, 5];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 5, 40, 3, 21, 1 ]`","`[ 40, 21, 5, 3, 1 ]`","`[ 1, 3, 5, 21, 40 ]`","`[ 1, 21, 3, 40, 5 ]`"],"answer":0,"explanation":"It logs `[ 5, 40, 3, 21, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 40, 10, 100, 21];\nconsole.log(xs.sort());\n```","options":["`[ 3, 10, 21, 40, 100 ]`","`[ 100, 40, 21, 10, 3 ]`","`[ 10, 100, 21, 3, 40 ]`","`[ '40', '3', '21', '100', '10' ]`"],"answer":2,"explanation":"It logs `[ 10, 100, 21, 3, 40 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 21, 40, 5, 9];\nconsole.log(xs.sort());\n```","options":["`[ 2, 5, 9, 21, 40 ]`","`[ 2, 21, 40, 5, 9 ]`","`[ '9', '5', '40', '21', '2' ]`","`[ 40, 21, 9, 5, 2 ]`"],"answer":1,"explanation":"It logs `[ 2, 21, 40, 5, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [100, 5, 15, 10, 9];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ '9', '5', '15', '100', '10' ]`","`[ 100, 15, 10, 9, 5 ]`","`[ 10, 100, 15, 5, 9 ]`","`[ 5, 9, 10, 15, 100 ]`"],"answer":1,"explanation":"It logs `[ 100, 15, 10, 9, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 10, 9, 2, 5];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 10, 2, 40, 5, 9 ]`","`[ '9', '5', '40', '2', '10' ]`","`[ 2, 5, 9, 10, 40 ]`","`[ 40, 10, 9, 5, 2 ]`"],"answer":3,"explanation":"It logs `[ 40, 10, 9, 5, 2 ]`."}]
---
# Predict the Output: Default sort #24

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
