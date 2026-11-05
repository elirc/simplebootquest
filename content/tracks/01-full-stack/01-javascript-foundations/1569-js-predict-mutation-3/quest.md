---
slug: "js-predict-mutation-3"
title: "Predict the Output: Mutating arrays #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [9, 5, 4, 2];\na.slice(1);\na.splice(1, 1);\na.splice(0, 0, 7);\nconsole.log(a);\n```","options":["`[ 7, 9, 4, 2 ]`","`TypeError`","`[ 7, 9 ]`","`[ 9, 4, 2 ]`"],"answer":0,"explanation":"It logs `[ 7, 9, 4, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 6, 1, 4];\na.shift();\na.slice(1);\na.reverse();\nconsole.log(a);\n```","options":["`[ 6, 1, 4 ]`","`[ 4, 1, 6, 4 ]`","`[ 4, 1, 6 ]`","`[ 6 ]`"],"answer":2,"explanation":"It logs `[ 4, 1, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 4, 9, 9];\na.splice(0, 0, 7);\na.concat([0]);\na.unshift(7);\nconsole.log(a);\n```","options":["`TypeError`","`[ 7, 9, 4, 9, 9 ]`","`[ 7, 7, 9, 4, 9, 9, 0 ]`","`[ 7, 7, 9, 4, 9, 9 ]`"],"answer":3,"explanation":"It logs `[ 7, 7, 9, 4, 9, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 5, 8, 1];\na.push(7);\na.unshift(3);\na.pop();\nconsole.log(a);\n```","options":["`[ 3, 6, 5, 8 ]`","`[ 3, 6, 5, 8, 1 ]`","`TypeError`","`[ 3, 6, 5, 8, 1, 7 ]`"],"answer":1,"explanation":"It logs `[ 3, 6, 5, 8, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 8, 8, 9];\na.shift();\na.concat([0]);\na.splice(0, 0, 7);\nconsole.log(a);\n```","options":["`[ 7, 8, 8, 9, 0 ]`","`[ 7, 9, 8, 8, 9 ]`","`[ 8, 8, 9 ]`","`[ 7, 8, 8, 9 ]`"],"answer":3,"explanation":"It logs `[ 7, 8, 8, 9 ]`."}]
---
# Predict the Output: Mutating arrays #3

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
