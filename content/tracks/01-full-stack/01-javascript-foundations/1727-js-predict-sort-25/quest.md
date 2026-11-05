---
slug: "js-predict-sort-25"
title: "Predict the Output: Default sort #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [10, 15, 100, 40, 9];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 9, 10, 15, 40, 100 ]`","`[ 10, 100, 15, 40, 9 ]`","`[ '9', '40', '15', '100', '10' ]`","`[ 100, 40, 15, 10, 9 ]`"],"answer":0,"explanation":"It logs `[ 9, 10, 15, 40, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 9, 3, 10, 21];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 9, 3, 21, 10, 1 ]`","`[ 21, 10, 9, 3, 1 ]`","`[ 1, 10, 21, 3, 9 ]`","`[ 1, 3, 9, 10, 21 ]`"],"answer":0,"explanation":"It logs `[ 9, 3, 21, 10, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 21, 100, 9, 15];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 9, 10, 15, 21, 100 ]`","`[ 9, 21, 15, 100, 10 ]`","`[ 10, 100, 15, 21, 9 ]`","`[ 100, 21, 15, 10, 9 ]`"],"answer":1,"explanation":"It logs `[ 9, 21, 15, 100, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 5, 9, 15, 2];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 40, 15, 9, 5, 2 ]`","`[ 15, 2, 40, 5, 9 ]`","`[ 2, 5, 9, 15, 40 ]`","`[ '9', '5', '40', '2', '15' ]`"],"answer":2,"explanation":"It logs `[ 2, 5, 9, 15, 40 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [100, 3, 9, 21, 5];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 3, 5, 9, 21, 100 ]`","`[ 100, 21, 9, 5, 3 ]`","`[ '9', '5', '3', '21', '100' ]`","`[ 100, 21, 3, 5, 9 ]`"],"answer":1,"explanation":"It logs `[ 100, 21, 9, 5, 3 ]`."}]
---
# Predict the Output: Default sort #25

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
