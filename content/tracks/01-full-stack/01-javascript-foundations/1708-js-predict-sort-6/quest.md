---
slug: "js-predict-sort-6"
title: "Predict the Output: Default sort #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [1, 21, 2, 5, 10];\nconsole.log(xs.sort());\n```","options":["`[ 21, 10, 5, 2, 1 ]`","`[ 1, 2, 5, 10, 21 ]`","`[ '5', '21', '2', '10', '1' ]`","`[ 1, 10, 2, 21, 5 ]`"],"answer":3,"explanation":"It logs `[ 1, 10, 2, 21, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 10, 1, 2, 15];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 1, 10, 15, 2, 40 ]`","`[ 40, 15, 10, 2, 1 ]`","`[ 1, 2, 10, 15, 40 ]`","`[ '40', '2', '15', '10', '1' ]`"],"answer":1,"explanation":"It logs `[ 40, 15, 10, 2, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 1, 15, 2, 100];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 100, 15, 9, 2, 1 ]`","`[ 1, 100, 15, 2, 9 ]`","`[ 9, 2, 15, 100, 1 ]`","`[ 1, 2, 9, 15, 100 ]`"],"answer":2,"explanation":"It logs `[ 9, 2, 15, 100, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [21, 3, 1, 9, 5];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 1, 3, 5, 9, 21 ]`","`[ 21, 9, 5, 3, 1 ]`","`[ 9, 5, 3, 21, 1 ]`","`[ 1, 21, 3, 5, 9 ]`"],"answer":2,"explanation":"It logs `[ 9, 5, 3, 21, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 1, 100, 40, 10];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 1, 3, 10, 40, 100 ]`","`[ 100, 40, 10, 3, 1 ]`","`[ 1, 10, 100, 3, 40 ]`","`[ 40, 3, 100, 10, 1 ]`"],"answer":3,"explanation":"It logs `[ 40, 3, 100, 10, 1 ]`."}]
---
# Predict the Output: Default sort #6

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
