---
slug: "js-predict-sort-10"
title: "Predict the Output: Default sort #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [1, 21, 5, 2, 15];\nconsole.log(xs.sort());\n```","options":["`[ 1, 15, 2, 21, 5 ]`","`[ '5', '21', '2', '15', '1' ]`","`[ 1, 2, 5, 15, 21 ]`","`[ 21, 15, 5, 2, 1 ]`"],"answer":0,"explanation":"It logs `[ 1, 15, 2, 21, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [15, 2, 9, 3, 21];\nconsole.log(xs.sort());\n```","options":["`[ 15, 2, 21, 3, 9 ]`","`[ 2, 3, 9, 15, 21 ]`","`[ 21, 15, 9, 3, 2 ]`","`[ '9', '3', '21', '2', '15' ]`"],"answer":0,"explanation":"It logs `[ 15, 2, 21, 3, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [100, 15, 1, 9, 21];\nconsole.log(xs.sort());\n```","options":["`[ 1, 100, 15, 21, 9 ]`","`[ 1, 9, 15, 21, 100 ]`","`[ 100, 21, 15, 9, 1 ]`","`[ '9', '21', '15', '100', '1' ]`"],"answer":0,"explanation":"It logs `[ 1, 100, 15, 21, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [21, 15, 40, 5, 1];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 1, 5, 15, 21, 40 ]`","`[ 1, 15, 21, 40, 5 ]`","`[ '5', '40', '21', '15', '1' ]`","`[ 40, 21, 15, 5, 1 ]`"],"answer":0,"explanation":"It logs `[ 1, 5, 15, 21, 40 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 5, 100, 21, 3];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 1, 100, 21, 3, 5 ]`","`[ 100, 21, 5, 3, 1 ]`","`[ 1, 3, 5, 21, 100 ]`","`[ '5', '3', '21', '100', '1' ]`"],"answer":1,"explanation":"It logs `[ 100, 21, 5, 3, 1 ]`."}]
---
# Predict the Output: Default sort #10

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
