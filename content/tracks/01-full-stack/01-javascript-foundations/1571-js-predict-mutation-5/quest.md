---
slug: "js-predict-mutation-5"
title: "Predict the Output: Mutating arrays #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [5, 5, 5, 5];\na.slice(1);\na.splice(1, 1);\na.shift();\nconsole.log(a);\n```","options":["`TypeError`","`[ 5, 5, 5 ]`","`[  ]`","`[ 5, 5 ]`"],"answer":3,"explanation":"It logs `[ 5, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 1, 2, 5];\na.splice(0, 0, 7);\na.unshift(9);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 9, 4, 1, 2, 5 ]`","`[ 9, 1, 2, 5 ]`","`TypeError`","`[ 9, 7, 4, 1, 2, 5 ]`"],"answer":0,"explanation":"It logs `[ 9, 4, 1, 2, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 1, 8, 4];\na.reverse();\na.pop();\na.slice(1);\nconsole.log(a);\n```","options":["`[ 4, 8, 1 ]`","`[ 4 ]`","`[ 6, 1, 8 ]`","`TypeError`"],"answer":0,"explanation":"It logs `[ 4, 8, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 8, 5, 1];\na.slice(1);\na.concat([0]);\na.push(5);\nconsole.log(a);\n```","options":["`[ 6, 0, 5 ]`","`[ 6, 8, 5, 1, 5 ]`","`[ 6, 8, 5, 1 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 6, 8, 5, 1, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 8, 5, 4];\na.pop();\na.splice(1, 1);\na.push(8);\nconsole.log(a);\n```","options":["`[ 9, 5, 8 ]`","`[ 9, 5 ]`","`[ 9, 5, 4, 8 ]`","`TypeError`"],"answer":0,"explanation":"It logs `[ 9, 5, 8 ]`."}]
---
# Predict the Output: Mutating arrays #5

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
