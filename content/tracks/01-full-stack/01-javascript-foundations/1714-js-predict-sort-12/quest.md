---
slug: "js-predict-sort-12"
title: "Predict the Output: Default sort #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [40, 21, 1, 3, 15];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 40, 21, 15, 3, 1 ]`","`[ 40, 3, 21, 15, 1 ]`","`[ 1, 15, 21, 3, 40 ]`","`[ 1, 3, 15, 21, 40 ]`"],"answer":1,"explanation":"It logs `[ 40, 3, 21, 15, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 15, 10, 9, 5];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 15, 10, 9, 5, 3 ]`","`[ 10, 15, 3, 5, 9 ]`","`[ '9', '5', '3', '15', '10' ]`","`[ 3, 5, 9, 10, 15 ]`"],"answer":3,"explanation":"It logs `[ 3, 5, 9, 10, 15 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 100, 40, 15, 1];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 100, 40, 15, 10, 1 ]`","`[ '40', '15', '100', '10', '1' ]`","`[ 1, 10, 100, 15, 40 ]`","`[ 1, 10, 15, 40, 100 ]`"],"answer":3,"explanation":"It logs `[ 1, 10, 15, 40, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [100, 40, 1, 3, 9];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 100, 40, 9, 3, 1 ]`","`[ 9, 40, 3, 100, 1 ]`","`[ 1, 100, 3, 40, 9 ]`","`[ 1, 3, 9, 40, 100 ]`"],"answer":1,"explanation":"It logs `[ 9, 40, 3, 100, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 40, 2, 100, 21];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 2, 9, 21, 40, 100 ]`","`[ 9, 40, 21, 2, 100 ]`","`[ 100, 2, 21, 40, 9 ]`","`[ 100, 40, 21, 9, 2 ]`"],"answer":1,"explanation":"It logs `[ 9, 40, 21, 2, 100 ]`."}]
---
# Predict the Output: Default sort #12

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
