---
slug: "js-predict-sort-18"
title: "Predict the Output: Default sort #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [9, 1, 100, 2, 15];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ 100, 15, 9, 2, 1 ]`","`[ 1, 100, 15, 2, 9 ]`","`[ '9', '2', '15', '100', '1' ]`","`[ 1, 2, 9, 15, 100 ]`"],"answer":3,"explanation":"It logs `[ 1, 2, 9, 15, 100 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 40, 3, 10, 2];\nconsole.log([...xs].sort().reverse());\n```","options":["`[ 10, 2, 3, 40, 9 ]`","`[ 2, 3, 9, 10, 40 ]`","`[ 40, 10, 9, 3, 2 ]`","`[ 9, 40, 3, 2, 10 ]`"],"answer":3,"explanation":"It logs `[ 9, 40, 3, 2, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [100, 9, 15, 10, 21];\nconsole.log(xs.sort());\n```","options":["`[ 100, 21, 15, 10, 9 ]`","`[ '9', '21', '15', '100', '10' ]`","`[ 10, 100, 15, 21, 9 ]`","`[ 9, 10, 15, 21, 100 ]`"],"answer":2,"explanation":"It logs `[ 10, 100, 15, 21, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [15, 40, 9, 10, 21];\nconsole.log(xs.sort((a, b) => a - b));\n```","options":["`[ '9', '40', '21', '15', '10' ]`","`[ 40, 21, 15, 10, 9 ]`","`[ 10, 15, 21, 40, 9 ]`","`[ 9, 10, 15, 21, 40 ]`"],"answer":3,"explanation":"It logs `[ 9, 10, 15, 21, 40 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 2, 1, 5, 3];\nconsole.log(xs.sort());\n```","options":["`TypeError`","`[ '9', '5', '3', '2', '1' ]`","`[ 1, 2, 3, 5, 9 ]`","`[ 9, 5, 3, 2, 1 ]`"],"answer":2,"explanation":"It logs `[ 1, 2, 3, 5, 9 ]`."}]
---
# Predict the Output: Default sort #18

Without a comparator, `sort()` compares items **as strings**, so `[10, 9, 1]` sorts to `[1, 10, 9]`. Always pass `(a, b) => a - b` for numbers.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
