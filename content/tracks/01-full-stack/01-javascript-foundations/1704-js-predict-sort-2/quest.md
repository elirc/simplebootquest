---
slug: "js-predict-sort-2"
title: "Predict the Output: Default sort #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [21, 9, 1, 100, 40];\nconsole.log(xs.sort());\n```","options":["`[ '9', '40', '21', '100', '1' ]`","`[ 1, 9, 21, 40, 100 ]`","`[ 1, 100, 21, 40, 9 ]`","`[ 100, 40, 21, 9, 1 ]`"],"answer":2,"explanation":"It logs `[ 1, 100, 21, 40, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [21, 9, 10, 100, 5];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 10, 100, 21, 5, 9 ]`","`[ 100, 21, 10, 9, 5 ]`","`[ '9', '5', '21', '100', '10' ]`","`[ 5, 9, 10, 21, 100 ]`"],"answer":3,"explanation":"It logs `[ 5, 9, 10, 21, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 10, 2, 3, 15];\nconsole.log(xs.sort());\n```","options":["`[ 10, 15, 2, 3, 5 ]`","`[ 15, 10, 5, 3, 2 ]`","`[ 2, 3, 5, 10, 15 ]`","`[ '5', '3', '2', '15', '10' ]`"],"answer":0,"explanation":"It logs `[ 10, 15, 2, 3, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 1, 40, 21, 10];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ '9', '40', '21', '10', '1' ]`","`[ 1, 10, 21, 40, 9 ]`","`[ 40, 21, 10, 9, 1 ]`","`[ 1, 9, 10, 21, 40 ]`"],"answer":2,"explanation":"It logs `[ 40, 21, 10, 9, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 10, 9, 3, 40];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 2, 3, 9, 10, 40 ]`","`[ 10, 2, 3, 40, 9 ]`","`[ '9', '40', '3', '2', '10' ]`","`[ 40, 10, 9, 3, 2 ]`"],"answer":0,"explanation":"It logs `[ 2, 3, 9, 10, 40 ]`."}]
---
# Predict the Output: Default sort #2

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
