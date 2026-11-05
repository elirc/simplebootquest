---
slug: "js-predict-mutation-20"
title: "Predict the Output: Mutating arrays #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [7, 7, 4, 8];\na.push(1);\na.splice(0, 0, 7);\na.unshift(6);\nconsole.log(a);\n```","options":["`[ 6, 7, 7, 7, 4, 8 ]`","`[ 7, 7, 7, 4, 8, 1 ]`","`[ 6, 7, 7, 7, 4, 8, 1 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 6, 7, 7, 7, 4, 8, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [2, 5, 9, 6];\na.unshift(4);\na.slice(1);\na.concat([0]);\nconsole.log(a);\n```","options":["`TypeError`","`[ 2, 5, 9, 6 ]`","`[ 4, 2, 5, 9, 6 ]`","`[ 4, 0 ]`"],"answer":2,"explanation":"It logs `[ 4, 2, 5, 9, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 7, 9, 2];\na.pop();\na.splice(0, 0, 7);\na.unshift(1);\nconsole.log(a);\n```","options":["`[ 7, 6, 7, 9 ]`","`[ 1, 7, 6, 7, 9 ]`","`TypeError`","`[ 1, 7, 6, 7, 9, 2 ]`"],"answer":1,"explanation":"It logs `[ 1, 7, 6, 7, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 8, 3, 5];\na.splice(1, 1);\na.unshift(7);\na.slice(1);\nconsole.log(a);\n```","options":["`[ 7, 3, 8, 3, 5 ]`","`[ 7, 3, 3, 5 ]`","`TypeError`","`[ 7 ]`"],"answer":1,"explanation":"It logs `[ 7, 3, 3, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 7, 7, 9];\na.reverse();\na.push(2);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 9, 7, 4, 2 ]`","`TypeError`","`[ 9, 7, 7, 4, 2 ]`","`[ 4, 7, 9, 2 ]`"],"answer":0,"explanation":"It logs `[ 9, 7, 4, 2 ]`."}]
---
# Predict the Output: Mutating arrays #20

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
