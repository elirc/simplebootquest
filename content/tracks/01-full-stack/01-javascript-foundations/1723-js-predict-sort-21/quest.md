---
slug: "js-predict-sort-21"
title: "Predict the Output: Default sort #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [10, 3, 15, 21, 2];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 10, 15, 2, 21, 3 ]`","`[ 2, 3, 10, 15, 21 ]`","`[ 3, 21, 2, 15, 10 ]`","`[ 21, 15, 10, 3, 2 ]`"],"answer":2,"explanation":"It logs `[ 3, 21, 2, 15, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 15, 5, 1, 100];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 1, 10, 100, 15, 5 ]`","`[ 100, 15, 10, 5, 1 ]`","`[ '5', '15', '100', '10', '1' ]`","`[ 1, 5, 10, 15, 100 ]`"],"answer":3,"explanation":"It logs `[ 1, 5, 10, 15, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [40, 3, 5, 100, 10];\nconsole.log(xs.sort());\n```","options":["`[ 10, 100, 3, 40, 5 ]`","`[ '5', '40', '3', '100', '10' ]`","`[ 100, 40, 10, 5, 3 ]`","`[ 3, 5, 10, 40, 100 ]`"],"answer":0,"explanation":"It logs `[ 10, 100, 3, 40, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 15, 5, 21, 9];\nconsole.log(xs.sort());\n```","options":["`[ '9', '5', '21', '15', '10' ]`","`[ 5, 9, 10, 15, 21 ]`","`[ 10, 15, 21, 5, 9 ]`","`[ 21, 15, 10, 9, 5 ]`"],"answer":2,"explanation":"It logs `[ 10, 15, 21, 5, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 3, 1, 40, 10];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 1, 3, 5, 10, 40 ]`","`[ 40, 10, 5, 3, 1 ]`","`[ 5, 40, 3, 10, 1 ]`","`[ 1, 10, 3, 40, 5 ]`"],"answer":2,"explanation":"It logs `[ 5, 40, 3, 10, 1 ]`."}]
---
# Predict the Output: Default sort #21

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
