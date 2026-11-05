---
slug: "js-predict-sort-19"
title: "Predict the Output: Default sort #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [9, 40, 3, 1, 2];\nconsole.log(xs.sort());\n```","options":["`[ 1, 2, 3, 9, 40 ]`","`[ '9', '40', '3', '2', '1' ]`","`[ 1, 2, 3, 40, 9 ]`","`[ 40, 9, 3, 2, 1 ]`"],"answer":2,"explanation":"It logs `[ 1, 2, 3, 40, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 2, 5, 9, 10];\nconsole.log(xs.sort());\n```","options":["`[ 2, 5, 9, 10, 40 ]`","`[ '9', '5', '40', '2', '10' ]`","`[ 10, 2, 40, 5, 9 ]`","`[ 40, 10, 9, 5, 2 ]`"],"answer":2,"explanation":"It logs `[ 10, 2, 40, 5, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 9, 100, 3, 21];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 100, 21, 3, 40, 9 ]`","`[ 100, 40, 21, 9, 3 ]`","`[ 9, 40, 3, 21, 100 ]`","`[ 3, 9, 21, 40, 100 ]`"],"answer":2,"explanation":"It logs `[ 9, 40, 3, 21, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [21, 9, 10, 2, 5];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 10, 2, 21, 5, 9 ]`","`[ '9', '5', '21', '2', '10' ]`","`[ 2, 5, 9, 10, 21 ]`","`[ 21, 10, 9, 5, 2 ]`"],"answer":2,"explanation":"It logs `[ 2, 5, 9, 10, 21 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 5, 21, 10, 2];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 5, 21, 2, 10, 1 ]`","`[ 1, 2, 5, 10, 21 ]`","`[ 1, 10, 2, 21, 5 ]`","`[ 21, 10, 5, 2, 1 ]`"],"answer":0,"explanation":"It logs `[ 5, 21, 2, 10, 1 ]`."}]
---
# Predict the Output: Default sort #19

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
