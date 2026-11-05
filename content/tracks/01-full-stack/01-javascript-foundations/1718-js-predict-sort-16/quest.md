---
slug: "js-predict-sort-16"
title: "Predict the Output: Default sort #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [9, 100, 2, 10, 21];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 10, 100, 2, 21, 9 ]`","`[ 2, 9, 10, 21, 100 ]`","`[ '9', '21', '2', '100', '10' ]`","`[ 100, 21, 10, 9, 2 ]`"],"answer":3,"explanation":"It logs `[ 100, 21, 10, 9, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 21, 1, 5, 10];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 21, 10, 9, 5, 1 ]`","`[ 9, 5, 21, 10, 1 ]`","`[ 1, 10, 21, 5, 9 ]`","`[ 1, 5, 9, 10, 21 ]`"],"answer":1,"explanation":"It logs `[ 9, 5, 21, 10, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 100, 21, 15, 10];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 9, 10, 15, 21, 100 ]`","`[ 10, 100, 15, 21, 9 ]`","`[ 9, 21, 15, 100, 10 ]`","`[ 100, 21, 15, 10, 9 ]`"],"answer":2,"explanation":"It logs `[ 9, 21, 15, 100, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [100, 5, 21, 3, 15];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 3, 5, 15, 21, 100 ]`","`[ 100, 15, 21, 3, 5 ]`","`[ 5, 3, 21, 15, 100 ]`","`[ 100, 21, 15, 5, 3 ]`"],"answer":2,"explanation":"It logs `[ 5, 3, 21, 15, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 2, 10, 1, 21];\nconsole.log(xs.sort());\n```","options":["`[ 1, 2, 10, 21, 40 ]`","`[ '40', '21', '2', '10', '1' ]`","`[ 1, 10, 2, 21, 40 ]`","`[ 40, 21, 10, 2, 1 ]`"],"answer":2,"explanation":"It logs `[ 1, 10, 2, 21, 40 ]`."}]
---
# Predict the Output: Default sort #16

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
