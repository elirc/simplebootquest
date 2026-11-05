---
slug: "js-predict-sort-15"
title: "Predict the Output: Default sort #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [1, 15, 5, 2, 40];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 1, 2, 5, 15, 40 ]`","`[ 40, 15, 5, 2, 1 ]`","`[ 1, 15, 2, 40, 5 ]`","`[ 5, 40, 2, 15, 1 ]`"],"answer":3,"explanation":"It logs `[ 5, 40, 2, 15, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 3, 1, 10, 15];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 1, 10, 15, 3, 5 ]`","`[ 15, 10, 5, 3, 1 ]`","`[ 1, 3, 5, 10, 15 ]`","`[ 5, 3, 15, 10, 1 ]`"],"answer":3,"explanation":"It logs `[ 5, 3, 15, 10, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 21, 10, 1, 5];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 1, 10, 21, 40, 5 ]`","`[ 1, 5, 10, 21, 40 ]`","`[ 40, 21, 10, 5, 1 ]`","`[ 5, 40, 21, 10, 1 ]`"],"answer":3,"explanation":"It logs `[ 5, 40, 21, 10, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [21, 3, 1, 2, 15];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 21, 15, 3, 2, 1 ]`","`[ 1, 2, 3, 15, 21 ]`","`[ 1, 15, 2, 21, 3 ]`","`[ '3', '21', '2', '15', '1' ]`"],"answer":1,"explanation":"It logs `[ 1, 2, 3, 15, 21 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 1, 3, 5, 15];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 40, 15, 5, 3, 1 ]`","`[ '5', '40', '3', '15', '1' ]`","`[ 1, 3, 5, 15, 40 ]`","`[ 1, 15, 3, 40, 5 ]`"],"answer":2,"explanation":"It logs `[ 1, 3, 5, 15, 40 ]`."}]
---
# Predict the Output: Default sort #15

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
