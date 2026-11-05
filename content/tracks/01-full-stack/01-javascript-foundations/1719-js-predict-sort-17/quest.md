---
slug: "js-predict-sort-17"
title: "Predict the Output: Default sort #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [9, 5, 21, 40, 100];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 100, 21, 40, 5, 9 ]`","`[ '9', '5', '40', '21', '100' ]`","`[ 5, 9, 21, 40, 100 ]`","`[ 100, 40, 21, 9, 5 ]`"],"answer":3,"explanation":"It logs `[ 100, 40, 21, 9, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 10, 21, 2, 40];\nconsole.log(xs.sort());\n```","options":["`[ '40', '3', '21', '2', '10' ]`","`[ 10, 2, 21, 3, 40 ]`","`[ 40, 21, 10, 3, 2 ]`","`[ 2, 3, 10, 21, 40 ]`"],"answer":1,"explanation":"It logs `[ 10, 2, 21, 3, 40 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 2, 100, 9, 40];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 100, 40, 9, 3, 2 ]`","`[ '9', '40', '3', '2', '100' ]`","`[ 100, 2, 3, 40, 9 ]`","`[ 2, 3, 9, 40, 100 ]`"],"answer":3,"explanation":"It logs `[ 2, 3, 9, 40, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [100, 40, 2, 3, 21];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 2, 3, 21, 40, 100 ]`","`[ '40', '3', '21', '2', '100' ]`","`[ 100, 40, 21, 3, 2 ]`","`[ 100, 2, 21, 3, 40 ]`"],"answer":0,"explanation":"It logs `[ 2, 3, 21, 40, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 21, 15, 40, 1];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ '40', '21', '2', '15', '1' ]`","`[ 40, 21, 15, 2, 1 ]`","`[ 1, 15, 2, 21, 40 ]`","`[ 1, 2, 15, 21, 40 ]`"],"answer":3,"explanation":"It logs `[ 1, 2, 15, 21, 40 ]`."}]
---
# Predict the Output: Default sort #17

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
