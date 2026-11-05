---
slug: "js-predict-sort-11"
title: "Predict the Output: Default sort #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [40, 5, 10, 2, 21];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 5, 40, 21, 2, 10 ]`","`[ 40, 21, 10, 5, 2 ]`","`[ 10, 2, 21, 40, 5 ]`","`[ 2, 5, 10, 21, 40 ]`"],"answer":0,"explanation":"It logs `[ 5, 40, 21, 2, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 3, 9, 10, 100];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 100, 10, 9, 3, 1 ]`","`[ 1, 3, 9, 10, 100 ]`","`[ '9', '3', '100', '10', '1' ]`","`[ 1, 10, 100, 3, 9 ]`"],"answer":0,"explanation":"It logs `[ 100, 10, 9, 3, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 9, 2, 100, 21];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 2, 3, 9, 21, 100 ]`","`[ 100, 2, 21, 3, 9 ]`","`[ 9, 3, 21, 2, 100 ]`","`[ 100, 21, 9, 3, 2 ]`"],"answer":2,"explanation":"It logs `[ 9, 3, 21, 2, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 9, 21, 3, 10];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 21, 10, 9, 3, 1 ]`","`[ 1, 3, 9, 10, 21 ]`","`[ 9, 3, 21, 10, 1 ]`","`[ 1, 10, 21, 3, 9 ]`"],"answer":2,"explanation":"It logs `[ 9, 3, 21, 10, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 40, 2, 1, 21];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 40, 21, 10, 2, 1 ]`","`[ '40', '21', '2', '10', '1' ]`","`[ 1, 2, 10, 21, 40 ]`","`[ 1, 10, 2, 21, 40 ]`"],"answer":2,"explanation":"It logs `[ 1, 2, 10, 21, 40 ]`."}]
---
# Predict the Output: Default sort #11

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
