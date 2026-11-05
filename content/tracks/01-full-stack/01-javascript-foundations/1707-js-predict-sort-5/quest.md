---
slug: "js-predict-sort-5"
title: "Predict the Output: Default sort #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [5, 1, 3, 15, 100];\nconsole.log(xs.sort());\n```","options":["`[ '5', '3', '15', '100', '1' ]`","`[ 1, 100, 15, 3, 5 ]`","`[ 100, 15, 5, 3, 1 ]`","`[ 1, 3, 5, 15, 100 ]`"],"answer":1,"explanation":"It logs `[ 1, 100, 15, 3, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 100, 15, 1, 3];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ '3', '2', '15', '100', '1' ]`","`[ 100, 15, 3, 2, 1 ]`","`[ 1, 100, 15, 2, 3 ]`","`[ 1, 2, 3, 15, 100 ]`"],"answer":1,"explanation":"It logs `[ 100, 15, 3, 2, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 21, 15, 9, 100];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 2, 9, 15, 21, 100 ]`","`[ 100, 21, 15, 9, 2 ]`","`[ 100, 15, 2, 21, 9 ]`","`[ '9', '21', '2', '15', '100' ]`"],"answer":1,"explanation":"It logs `[ 100, 21, 15, 9, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 1, 40, 100, 9];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 1, 3, 9, 40, 100 ]`","`[ 100, 40, 9, 3, 1 ]`","`[ 1, 100, 3, 40, 9 ]`","`[ '9', '40', '3', '100', '1' ]`"],"answer":0,"explanation":"It logs `[ 1, 3, 9, 40, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 15, 3, 40, 2];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 40, 15, 3, 2, 1 ]`","`[ 1, 2, 3, 15, 40 ]`","`[ '40', '3', '2', '15', '1' ]`","`[ 1, 15, 2, 3, 40 ]`"],"answer":1,"explanation":"It logs `[ 1, 2, 3, 15, 40 ]`."}]
---
# Predict the Output: Default sort #5

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
