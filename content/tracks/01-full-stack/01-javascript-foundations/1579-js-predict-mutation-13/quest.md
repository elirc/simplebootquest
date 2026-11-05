---
slug: "js-predict-mutation-13"
title: "Predict the Output: Mutating arrays #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [4, 3, 7, 4];\na.push(2);\na.concat([0]);\na.unshift(3);\nconsole.log(a);\n```","options":["`[ 3, 4, 3, 7, 4, 2 ]`","`[ 3, 4, 3, 7, 4, 2, 0 ]`","`[ 4, 3, 7, 4, 2 ]`","`[ 3, 4, 3, 7, 4 ]`"],"answer":0,"explanation":"It logs `[ 3, 4, 3, 7, 4, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 5, 8, 8];\na.concat([0]);\na.splice(1, 1);\na.reverse();\nconsole.log(a);\n```","options":["`[ 8, 8, 7 ]`","`[ 0, 8, 8, 7 ]`","`TypeError`","`[ 7, 8, 8 ]`"],"answer":0,"explanation":"It logs `[ 8, 8, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 9, 5, 3];\na.push(1);\na.slice(1);\na.reverse();\nconsole.log(a);\n```","options":["`[ 3, 5, 9, 5 ]`","`[ 1, 3, 5, 9, 5 ]`","`[ 5, 9, 5, 3, 1 ]`","`[ 5 ]`"],"answer":1,"explanation":"It logs `[ 1, 3, 5, 9, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 6, 3, 2];\na.unshift(9);\na.concat([0]);\na.slice(1);\nconsole.log(a);\n```","options":["`[ 9, 5, 6, 3, 2 ]`","`[ 9 ]`","`TypeError`","`[ 5, 6, 3, 2 ]`"],"answer":0,"explanation":"It logs `[ 9, 5, 6, 3, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 3, 4, 8];\na.splice(0, 0, 7);\na.shift();\na.slice(1);\nconsole.log(a);\n```","options":["`TypeError`","`[ 9, 3, 4, 8 ]`","`[ 9 ]`","`[ 3, 4, 8 ]`"],"answer":1,"explanation":"It logs `[ 9, 3, 4, 8 ]`."}]
---
# Predict the Output: Mutating arrays #13

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
