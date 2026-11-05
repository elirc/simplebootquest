---
slug: "js-predict-sort-7"
title: "Predict the Output: Default sort #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [2, 100, 1, 10, 5];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 100, 10, 5, 2, 1 ]`","`[ 5, 2, 100, 10, 1 ]`","`[ 1, 10, 100, 2, 5 ]`","`[ 1, 2, 5, 10, 100 ]`"],"answer":1,"explanation":"It logs `[ 5, 2, 100, 10, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [100, 21, 9, 2, 3];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ '9', '3', '21', '2', '100' ]`","`[ 100, 21, 9, 3, 2 ]`","`[ 2, 3, 9, 21, 100 ]`","`[ 100, 2, 21, 3, 9 ]`"],"answer":2,"explanation":"It logs `[ 2, 3, 9, 21, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [15, 9, 2, 100, 5];\nconsole.log(xs.sort());\n```","options":["`[ 2, 5, 9, 15, 100 ]`","`[ 100, 15, 2, 5, 9 ]`","`[ 100, 15, 9, 5, 2 ]`","`[ '9', '5', '2', '15', '100' ]`"],"answer":1,"explanation":"It logs `[ 100, 15, 2, 5, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 100, 9, 3, 5];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 100, 3, 40, 5, 9 ]`","`[ 3, 5, 9, 40, 100 ]`","`[ '9', '5', '40', '3', '100' ]`","`[ 100, 40, 9, 5, 3 ]`"],"answer":1,"explanation":"It logs `[ 3, 5, 9, 40, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 1, 100, 3, 10];\nconsole.log(xs.sort());\n```","options":["`[ '40', '3', '100', '10', '1' ]`","`[ 1, 3, 10, 40, 100 ]`","`[ 100, 40, 10, 3, 1 ]`","`[ 1, 10, 100, 3, 40 ]`"],"answer":3,"explanation":"It logs `[ 1, 10, 100, 3, 40 ]`."}]
---
# Predict the Output: Default sort #7

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
