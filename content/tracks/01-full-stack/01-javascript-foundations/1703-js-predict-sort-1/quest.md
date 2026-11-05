---
slug: "js-predict-sort-1"
title: "Predict the Output: Default sort #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [21, 40, 10, 3, 9];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 40, 21, 10, 9, 3 ]`","`[ 10, 21, 3, 40, 9 ]`","`[ 9, 40, 3, 21, 10 ]`","`[ 3, 9, 10, 21, 40 ]`"],"answer":2,"explanation":"It logs `[ 9, 40, 3, 21, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 21, 10, 100, 15];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 10, 100, 15, 2, 21 ]`","`[ '21', '2', '15', '100', '10' ]`","`[ 100, 21, 15, 10, 2 ]`","`[ 2, 10, 15, 21, 100 ]`"],"answer":3,"explanation":"It logs `[ 2, 10, 15, 21, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [21, 15, 10, 100, 9];\nconsole.log(xs.sort());\n```","options":["`[ 9, 10, 15, 21, 100 ]`","`[ 100, 21, 15, 10, 9 ]`","`[ '9', '21', '15', '100', '10' ]`","`[ 10, 100, 15, 21, 9 ]`"],"answer":3,"explanation":"It logs `[ 10, 100, 15, 21, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 21, 100, 40, 5];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 5, 40, 21, 100, 10 ]`","`[ 100, 40, 21, 10, 5 ]`","`[ 5, 10, 21, 40, 100 ]`","`[ 10, 100, 21, 40, 5 ]`"],"answer":0,"explanation":"It logs `[ 5, 40, 21, 100, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 40, 1, 5, 100];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ '5', '40', '100', '10', '1' ]`","`[ 100, 40, 10, 5, 1 ]`","`[ 1, 5, 10, 40, 100 ]`","`[ 1, 10, 100, 40, 5 ]`"],"answer":2,"explanation":"It logs `[ 1, 5, 10, 40, 100 ]`."}]
---
# Predict the Output: Default sort #1

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
