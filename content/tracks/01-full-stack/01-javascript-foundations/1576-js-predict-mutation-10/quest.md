---
slug: "js-predict-mutation-10"
title: "Predict the Output: Mutating arrays #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [8, 2, 6, 6];\na.push(9);\na.reverse();\na.pop();\nconsole.log(a);\n```","options":["`[ 9, 6, 6, 2 ]`","`TypeError`","`[ 9, 6, 6, 2, 8 ]`","`[ 6, 6, 2 ]`"],"answer":0,"explanation":"It logs `[ 9, 6, 6, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 6, 5, 4];\na.shift();\na.splice(0, 0, 7);\na.reverse();\nconsole.log(a);\n```","options":["`[ 4, 5, 6, 9, 7 ]`","`[ 4, 5, 6, 7 ]`","`[ 7, 6, 5, 4 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 4, 5, 6, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 4, 2, 8];\na.concat([0]);\na.splice(0, 0, 7);\na.unshift(1);\nconsole.log(a);\n```","options":["`[ 7, 3, 4, 2, 8 ]`","`[ 1, 7, 3, 4, 2, 8, 0 ]`","`[ 1, 7, 3, 4, 2, 8 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 1, 7, 3, 4, 2, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 1, 2, 2];\na.splice(0, 0, 7);\na.concat([0]);\na.unshift(6);\nconsole.log(a);\n```","options":["`[ 6, 7, 9, 1, 2, 2, 0 ]`","`[ 7, 9, 1, 2, 2 ]`","`[ 6, 9, 1, 2, 2 ]`","`[ 6, 7, 9, 1, 2, 2 ]`"],"answer":3,"explanation":"It logs `[ 6, 7, 9, 1, 2, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 2, 4, 3];\na.unshift(8);\na.shift();\na.splice(0, 0, 7);\nconsole.log(a);\n```","options":["`[ 7, 5, 2, 4, 3 ]`","`TypeError`","`[ 5, 2, 4, 3 ]`","`[ 7, 2, 4, 3 ]`"],"answer":0,"explanation":"It logs `[ 7, 5, 2, 4, 3 ]`."}]
---
# Predict the Output: Mutating arrays #10

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
