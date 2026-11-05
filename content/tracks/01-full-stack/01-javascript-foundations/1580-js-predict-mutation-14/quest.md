---
slug: "js-predict-mutation-14"
title: "Predict the Output: Mutating arrays #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [1, 2, 6, 9];\na.pop();\na.slice(1);\na.shift();\nconsole.log(a);\n```","options":["`[ 2, 6, 9 ]`","`[ 2, 6 ]`","`[ 1, 2, 6 ]`","`[  ]`"],"answer":1,"explanation":"It logs `[ 2, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 4, 3, 1];\na.reverse();\na.splice(0, 0, 7);\na.concat([0]);\nconsole.log(a);\n```","options":["`TypeError`","`[ 7, 1, 3, 4, 8 ]`","`[ 7, 1, 3, 4, 8, 0 ]`","`[ 7, 8, 4, 3, 1 ]`"],"answer":1,"explanation":"It logs `[ 7, 1, 3, 4, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 4, 6, 9];\na.shift();\na.splice(0, 0, 7);\na.push(2);\nconsole.log(a);\n```","options":["`[ 7, 8, 4, 6, 9, 2 ]`","`[ 7, 4, 6, 9, 2 ]`","`[ 7, 4, 6, 9 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 7, 4, 6, 9, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 7, 2, 6];\na.pop();\na.splice(0, 0, 7);\na.unshift(8);\nconsole.log(a);\n```","options":["`[ 8, 7, 4, 7, 2, 6 ]`","`[ 7, 4, 7, 2 ]`","`TypeError`","`[ 8, 7, 4, 7, 2 ]`"],"answer":3,"explanation":"It logs `[ 8, 7, 4, 7, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [2, 9, 4, 5];\na.reverse();\na.unshift(8);\na.splice(0, 0, 7);\nconsole.log(a);\n```","options":["`TypeError`","`[ 7, 8, 5, 4, 9, 2 ]`","`[ 8, 5, 4, 9, 2 ]`","`[ 7, 8, 2, 9, 4, 5 ]`"],"answer":1,"explanation":"It logs `[ 7, 8, 5, 4, 9, 2 ]`."}]
---
# Predict the Output: Mutating arrays #14

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
