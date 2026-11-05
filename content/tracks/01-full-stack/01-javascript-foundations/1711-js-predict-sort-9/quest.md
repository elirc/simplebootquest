---
slug: "js-predict-sort-9"
title: "Predict the Output: Default sort #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [1, 21, 15, 10, 9];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 1, 9, 10, 15, 21 ]`","`[ 9, 21, 15, 10, 1 ]`","`[ 21, 15, 10, 9, 1 ]`","`[ 1, 10, 15, 21, 9 ]`"],"answer":1,"explanation":"It logs `[ 9, 21, 15, 10, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 2, 5, 40, 15];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 40, 15, 9, 5, 2 ]`","`[ 2, 5, 9, 15, 40 ]`","`[ 15, 2, 40, 5, 9 ]`","`[ '9', '5', '40', '2', '15' ]`"],"answer":0,"explanation":"It logs `[ 40, 15, 9, 5, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 21, 5, 9, 2];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 2, 5, 9, 10, 21 ]`","`[ '9', '5', '21', '2', '10' ]`","`[ 21, 10, 9, 5, 2 ]`","`[ 10, 2, 21, 5, 9 ]`"],"answer":0,"explanation":"It logs `[ 2, 5, 9, 10, 21 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 1, 10, 5, 40];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ '5', '40', '3', '10', '1' ]`","`[ 1, 10, 3, 40, 5 ]`","`[ 1, 3, 5, 10, 40 ]`","`[ 40, 10, 5, 3, 1 ]`"],"answer":2,"explanation":"It logs `[ 1, 3, 5, 10, 40 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [21, 40, 15, 2, 10];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ '40', '21', '2', '15', '10' ]`","`[ 2, 10, 15, 21, 40 ]`","`[ 40, 21, 15, 10, 2 ]`","`[ 10, 15, 2, 21, 40 ]`"],"answer":2,"explanation":"It logs `[ 40, 21, 15, 10, 2 ]`."}]
---
# Predict the Output: Default sort #9

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
