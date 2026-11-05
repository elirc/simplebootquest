---
slug: "js-predict-mutation-19"
title: "Predict the Output: Mutating arrays #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [9, 3, 1, 9];\na.slice(1);\na.unshift(4);\na.pop();\nconsole.log(a);\n```","options":["`[ 4 ]`","`TypeError`","`[ 4, 9, 3, 1 ]`","`[ 4, 9, 3, 1, 9 ]`"],"answer":2,"explanation":"It logs `[ 4, 9, 3, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 5, 3, 3];\na.splice(0, 0, 7);\na.splice(1, 1);\na.push(8);\nconsole.log(a);\n```","options":["`[ 8, 3, 3, 8 ]`","`[ 7, 5, 3, 3 ]`","`TypeError`","`[ 7, 5, 3, 3, 8 ]`"],"answer":3,"explanation":"It logs `[ 7, 5, 3, 3, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 2, 8, 1];\na.slice(1);\na.push(5);\na.unshift(9);\nconsole.log(a);\n```","options":["`[ 9, 4, 5 ]`","`[ 9, 4, 2, 8, 1, 5 ]`","`TypeError`","`[ 4, 2, 8, 1, 5 ]`"],"answer":1,"explanation":"It logs `[ 9, 4, 2, 8, 1, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 4, 9, 5];\na.slice(1);\na.reverse();\na.pop();\nconsole.log(a);\n```","options":["`[ 5, 9, 4 ]`","`TypeError`","`[  ]`","`[ 5, 9, 4, 9 ]`"],"answer":0,"explanation":"It logs `[ 5, 9, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 9, 4, 6];\na.pop();\na.splice(0, 0, 7);\na.concat([0]);\nconsole.log(a);\n```","options":["`[ 7, 6, 9, 4, 6 ]`","`[ 7, 6, 9, 4 ]`","`[ 7, 6, 9, 4, 0 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 7, 6, 9, 4 ]`."}]
---
# Predict the Output: Mutating arrays #19

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
