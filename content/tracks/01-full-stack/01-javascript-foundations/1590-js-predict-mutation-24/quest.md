---
slug: "js-predict-mutation-24"
title: "Predict the Output: Mutating arrays #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [6, 4, 7, 7];\na.splice(0, 0, 7);\na.concat([0]);\na.pop();\nconsole.log(a);\n```","options":["`[ 7, 6, 4, 7 ]`","`[ 6, 4, 7 ]`","`TypeError`","`[ 7, 6, 4, 7, 7 ]`"],"answer":0,"explanation":"It logs `[ 7, 6, 4, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 9, 1, 6];\na.push(9);\na.pop();\na.slice(1);\nconsole.log(a);\n```","options":["`[ 5, 9, 1, 6 ]`","`[ 5, 9, 1 ]`","`TypeError`","`[ 5 ]`"],"answer":0,"explanation":"It logs `[ 5, 9, 1, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 4, 9, 7];\na.reverse();\na.pop();\na.splice(0, 0, 7);\nconsole.log(a);\n```","options":["`[ 7, 7, 9, 4 ]`","`[ 7, 9, 4 ]`","`TypeError`","`[ 7, 8, 4, 9 ]`"],"answer":0,"explanation":"It logs `[ 7, 7, 9, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 1, 2, 9];\na.slice(1);\na.shift();\na.reverse();\nconsole.log(a);\n```","options":["`[  ]`","`[ 1, 2, 9 ]`","`[ 9, 2, 1 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 9, 2, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [1, 7, 1, 3];\na.push(8);\na.pop();\na.concat([0]);\nconsole.log(a);\n```","options":["`[ 1, 7, 1, 3 ]`","`TypeError`","`[ 1, 7, 1 ]`","`[ 1, 7, 1, 3, 0 ]`"],"answer":0,"explanation":"It logs `[ 1, 7, 1, 3 ]`."}]
---
# Predict the Output: Mutating arrays #24

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
