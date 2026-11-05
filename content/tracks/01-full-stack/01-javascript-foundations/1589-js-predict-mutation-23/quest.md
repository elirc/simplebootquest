---
slug: "js-predict-mutation-23"
title: "Predict the Output: Mutating arrays #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [6, 7, 6, 5];\na.slice(1);\na.shift();\na.pop();\nconsole.log(a);\n```","options":["`[ 7, 6, 5 ]`","`TypeError`","`[  ]`","`[ 7, 6 ]`"],"answer":3,"explanation":"It logs `[ 7, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 9, 4, 5];\na.pop();\na.reverse();\na.unshift(8);\nconsole.log(a);\n```","options":["`[ 8, 5, 4, 9, 7 ]`","`[ 8, 4, 9, 7 ]`","`TypeError`","`[ 4, 9, 7 ]`"],"answer":1,"explanation":"It logs `[ 8, 4, 9, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 6, 2, 1];\na.unshift(6);\na.reverse();\na.slice(1);\nconsole.log(a);\n```","options":["`TypeError`","`[ 1 ]`","`[ 1, 2, 6, 5, 6 ]`","`[ 1, 2, 6, 5 ]`"],"answer":2,"explanation":"It logs `[ 1, 2, 6, 5, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 1, 2, 7];\na.reverse();\na.pop();\na.push(6);\nconsole.log(a);\n```","options":["`[ 7, 2, 1, 6 ]`","`[ 8, 1, 2, 6 ]`","`TypeError`","`[ 7, 2, 1 ]`"],"answer":0,"explanation":"It logs `[ 7, 2, 1, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 3, 5, 7];\na.concat([0]);\na.reverse();\na.splice(1, 1);\nconsole.log(a);\n```","options":["`TypeError`","`[ 7, 3, 7 ]`","`[ 0, 5, 3, 7 ]`","`[ 7, 5, 3, 7 ]`"],"answer":1,"explanation":"It logs `[ 7, 3, 7 ]`."}]
---
# Predict the Output: Mutating arrays #23

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
