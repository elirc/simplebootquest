---
slug: "js-predict-sort-8"
title: "Predict the Output: Default sort #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [1, 21, 5, 40, 100];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ '5', '40', '21', '100', '1' ]`","`[ 100, 40, 21, 5, 1 ]`","`[ 1, 100, 21, 40, 5 ]`","`[ 1, 5, 21, 40, 100 ]`"],"answer":1,"explanation":"It logs `[ 100, 40, 21, 5, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [15, 5, 100, 9, 40];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ '9', '5', '40', '15', '100' ]`","`[ 5, 9, 15, 40, 100 ]`","`[ 100, 40, 15, 9, 5 ]`","`[ 100, 15, 40, 5, 9 ]`"],"answer":1,"explanation":"It logs `[ 5, 9, 15, 40, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 2, 100, 40, 21];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 100, 40, 21, 9, 2 ]`","`[ 100, 2, 21, 40, 9 ]`","`[ '9', '40', '21', '2', '100' ]`","`[ 2, 9, 21, 40, 100 ]`"],"answer":3,"explanation":"It logs `[ 2, 9, 21, 40, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 21, 100, 3, 15];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 100, 40, 21, 15, 3 ]`","`[ 40, 3, 21, 15, 100 ]`","`[ 3, 15, 21, 40, 100 ]`","`[ 100, 15, 21, 3, 40 ]`"],"answer":1,"explanation":"It logs `[ 40, 3, 21, 15, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [21, 5, 9, 3, 100];\nconsole.log(xs.sort());\n```","options":["`[ 3, 5, 9, 21, 100 ]`","`[ '9', '5', '3', '21', '100' ]`","`[ 100, 21, 9, 5, 3 ]`","`[ 100, 21, 3, 5, 9 ]`"],"answer":3,"explanation":"It logs `[ 100, 21, 3, 5, 9 ]`."}]
---
# Predict the Output: Default sort #8

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
