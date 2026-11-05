---
slug: "js-predict-sort-3"
title: "Predict the Output: Default sort #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [21, 5, 10, 3, 15];\nconsole.log(xs.sort());\n```","options":["`[ 10, 15, 21, 3, 5 ]`","`[ '5', '3', '21', '15', '10' ]`","`[ 3, 5, 10, 15, 21 ]`","`[ 21, 15, 10, 5, 3 ]`"],"answer":0,"explanation":"It logs `[ 10, 15, 21, 3, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 5, 21, 100, 40];\nconsole.log(xs.sort());\n```","options":["`[ 100, 2, 21, 40, 5 ]`","`[ '5', '40', '21', '2', '100' ]`","`[ 100, 40, 21, 5, 2 ]`","`[ 2, 5, 21, 40, 100 ]`"],"answer":0,"explanation":"It logs `[ 100, 2, 21, 40, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 1, 10, 5, 2];\nconsole.log(xs.sort());\n```","options":["`[ 40, 10, 5, 2, 1 ]`","`[ 1, 10, 2, 40, 5 ]`","`[ 1, 2, 5, 10, 40 ]`","`[ '5', '40', '2', '10', '1' ]`"],"answer":1,"explanation":"It logs `[ 1, 10, 2, 40, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 100, 10, 21, 1];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 100, 21, 10, 9, 1 ]`","`[ 1, 10, 100, 21, 9 ]`","`[ 9, 21, 100, 10, 1 ]`","`[ 1, 9, 10, 21, 100 ]`"],"answer":2,"explanation":"It logs `[ 9, 21, 100, 10, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 100, 3, 2, 9];\nconsole.log(xs.sort());\n```","options":["`[ 2, 3, 5, 9, 100 ]`","`[ '9', '5', '3', '2', '100' ]`","`[ 100, 2, 3, 5, 9 ]`","`[ 100, 9, 5, 3, 2 ]`"],"answer":2,"explanation":"It logs `[ 100, 2, 3, 5, 9 ]`."}]
---
# Predict the Output: Default sort #3

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
