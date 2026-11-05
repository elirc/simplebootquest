---
slug: "js-predict-mutation-25"
title: "Predict the Output: Mutating arrays #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [3, 2, 2, 5];\na.pop();\na.unshift(1);\na.shift();\nconsole.log(a);\n```","options":["`[ 3, 2, 2, 5 ]`","`TypeError`","`[ 1, 3, 2, 2 ]`","`[ 3, 2, 2 ]`"],"answer":3,"explanation":"It logs `[ 3, 2, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 9, 7, 6];\na.splice(0, 0, 7);\na.slice(1);\na.unshift(5);\nconsole.log(a);\n```","options":["`[ 5, 7, 7, 9, 7, 6 ]`","`[ 5, 7 ]`","`[ 5, 7, 9, 7, 6 ]`","`[ 7, 7, 9, 7, 6 ]`"],"answer":0,"explanation":"It logs `[ 5, 7, 7, 9, 7, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 1, 2, 8];\na.pop();\na.reverse();\na.slice(1);\nconsole.log(a);\n```","options":["`TypeError`","`[ 2 ]`","`[ 2, 1, 6 ]`","`[ 8, 2, 1, 6 ]`"],"answer":2,"explanation":"It logs `[ 2, 1, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 2, 5, 8];\na.push(6);\na.shift();\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 2, 8 ]`","`[ 2, 8, 6 ]`","`TypeError`","`[ 2, 5, 8, 6 ]`"],"answer":1,"explanation":"It logs `[ 2, 8, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 8, 7, 6];\na.push(8);\na.splice(1, 1);\na.slice(1);\nconsole.log(a);\n```","options":["`TypeError`","`[ 7 ]`","`[ 7, 7, 6, 8 ]`","`[ 7, 7, 6 ]`"],"answer":2,"explanation":"It logs `[ 7, 7, 6, 8 ]`."}]
---
# Predict the Output: Mutating arrays #25

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
