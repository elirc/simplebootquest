---
slug: "js-predict-sort-22"
title: "Predict the Output: Default sort #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [2, 1, 3, 21, 9];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 9, 3, 21, 2, 1 ]`","`[ 1, 2, 3, 9, 21 ]`","`[ 1, 2, 21, 3, 9 ]`","`[ 21, 9, 3, 2, 1 ]`"],"answer":0,"explanation":"It logs `[ 9, 3, 21, 2, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [100, 5, 9, 21, 40];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ '9', '5', '40', '21', '100' ]`","`[ 100, 21, 40, 5, 9 ]`","`[ 100, 40, 21, 9, 5 ]`","`[ 5, 9, 21, 40, 100 ]`"],"answer":2,"explanation":"It logs `[ 100, 40, 21, 9, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 100, 9, 15, 2];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 2, 5, 9, 15, 100 ]`","`[ 100, 15, 9, 5, 2 ]`","`[ 100, 15, 2, 5, 9 ]`","`[ 9, 5, 2, 15, 100 ]`"],"answer":3,"explanation":"It logs `[ 9, 5, 2, 15, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 1, 40, 15, 3];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 40, 15, 5, 3, 1 ]`","`[ 1, 3, 5, 15, 40 ]`","`[ 5, 40, 3, 15, 1 ]`","`[ 1, 15, 3, 40, 5 ]`"],"answer":2,"explanation":"It logs `[ 5, 40, 3, 15, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [15, 9, 5, 40, 21];\nconsole.log(xs.sort((a, b) => b - a));\n```","options":["`[ 5, 9, 15, 21, 40 ]`","`[ '9', '5', '40', '21', '15' ]`","`[ 15, 21, 40, 5, 9 ]`","`[ 40, 21, 15, 9, 5 ]`"],"answer":3,"explanation":"It logs `[ 40, 21, 15, 9, 5 ]`."}]
---
# Predict the Output: Default sort #22

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
