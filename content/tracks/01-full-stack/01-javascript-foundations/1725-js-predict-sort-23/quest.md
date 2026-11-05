---
slug: "js-predict-sort-23"
title: "Predict the Output: Default sort #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [10, 2, 40, 21, 3];\nconsole.log(xs.sort());\n```","options":["`[ '40', '3', '21', '2', '10' ]`","`[ 2, 3, 10, 21, 40 ]`","`[ 40, 21, 10, 3, 2 ]`","`[ 10, 2, 21, 3, 40 ]`"],"answer":3,"explanation":"It logs `[ 10, 2, 21, 3, 40 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 100, 5, 15, 3];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 100, 15, 10, 5, 3 ]`","`[ 3, 5, 10, 15, 100 ]`","`[ 10, 100, 15, 3, 5 ]`","`[ '5', '3', '15', '100', '10' ]`"],"answer":0,"explanation":"It logs `[ 100, 15, 10, 5, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [15, 9, 100, 10, 2];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 2, 9, 10, 15, 100 ]`","`[ '9', '2', '15', '100', '10' ]`","`[ 100, 15, 10, 9, 2 ]`","`[ 10, 100, 15, 2, 9 ]`"],"answer":2,"explanation":"It logs `[ 100, 15, 10, 9, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [15, 5, 21, 1, 3];\nconsole.log(xs.sort());\n```","options":["`[ 1, 15, 21, 3, 5 ]`","`[ '5', '3', '21', '15', '1' ]`","`[ 21, 15, 5, 3, 1 ]`","`[ 1, 3, 5, 15, 21 ]`"],"answer":0,"explanation":"It logs `[ 1, 15, 21, 3, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 1, 2, 9, 15];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ '9', '5', '2', '15', '1' ]`","`[ 1, 15, 2, 5, 9 ]`","`[ 15, 9, 5, 2, 1 ]`","`[ 1, 2, 5, 9, 15 ]`"],"answer":2,"explanation":"It logs `[ 15, 9, 5, 2, 1 ]`."}]
---
# Predict the Output: Default sort #23

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
