---
slug: "js-predict-sort-4"
title: "Predict the Output: Default sort #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [40, 21, 1, 5, 9];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 1, 5, 9, 21, 40 ]`","`[ '9', '5', '40', '21', '1' ]`","`[ 40, 21, 9, 5, 1 ]`","`[ 1, 21, 40, 5, 9 ]`"],"answer":0,"explanation":"It logs `[ 1, 5, 9, 21, 40 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 15, 9, 100, 21];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 100, 21, 15, 10, 9 ]`","`[ 9, 10, 15, 21, 100 ]`","`[ '9', '21', '15', '100', '10' ]`","`[ 10, 100, 15, 21, 9 ]`"],"answer":0,"explanation":"It logs `[ 100, 21, 15, 10, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 2, 1, 15, 3];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 1, 2, 3, 9, 15 ]`","`[ 15, 9, 3, 2, 1 ]`","`[ '9', '3', '2', '15', '1' ]`","`[ 1, 15, 2, 3, 9 ]`"],"answer":0,"explanation":"It logs `[ 1, 2, 3, 9, 15 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [21, 1, 2, 100, 40];\nconsole.log(xs.sort());\n```","options":["`[ '40', '21', '2', '100', '1' ]`","`[ 100, 40, 21, 2, 1 ]`","`[ 1, 100, 2, 21, 40 ]`","`[ 1, 2, 21, 40, 100 ]`"],"answer":2,"explanation":"It logs `[ 1, 100, 2, 21, 40 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 9, 100, 5, 10];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ '9', '5', '40', '100', '10' ]`","`[ 5, 9, 10, 40, 100 ]`","`[ 10, 100, 40, 5, 9 ]`","`[ 100, 40, 10, 9, 5 ]`"],"answer":3,"explanation":"It logs `[ 100, 40, 10, 9, 5 ]`."}]
---
# Predict the Output: Default sort #4

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
