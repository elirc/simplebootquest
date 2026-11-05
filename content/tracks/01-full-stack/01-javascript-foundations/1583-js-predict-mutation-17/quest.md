---
slug: "js-predict-mutation-17"
title: "Predict the Output: Mutating arrays #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [4, 4, 3, 9];\na.push(4);\na.splice(1, 1);\na.shift();\nconsole.log(a);\n```","options":["`TypeError`","`[ 3, 9 ]`","`[ 4, 3, 9, 4 ]`","`[ 3, 9, 4 ]`"],"answer":3,"explanation":"It logs `[ 3, 9, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 3, 6, 4];\na.slice(1);\na.concat([0]);\na.reverse();\nconsole.log(a);\n```","options":["`[ 0, 9 ]`","`[ 4, 6, 3, 9 ]`","`TypeError`","`[ 9, 3, 6, 4 ]`"],"answer":1,"explanation":"It logs `[ 4, 6, 3, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 3, 3, 9];\na.splice(1, 1);\na.pop();\na.push(7);\nconsole.log(a);\n```","options":["`[ 7, 3 ]`","`TypeError`","`[ 7, 3, 3, 7 ]`","`[ 7, 3, 7 ]`"],"answer":3,"explanation":"It logs `[ 7, 3, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 7, 4, 3];\na.push(9);\na.splice(0, 0, 7);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 7, 7, 4, 3 ]`","`TypeError`","`[ 7, 7, 4, 3, 9 ]`","`[ 7, 7, 7, 4, 3, 9 ]`"],"answer":2,"explanation":"It logs `[ 7, 7, 4, 3, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 6, 3, 5];\na.concat([0]);\na.push(3);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 5, 3, 5, 0, 3 ]`","`[ 5, 6, 3, 5, 3 ]`","`TypeError`","`[ 5, 3, 5, 3 ]`"],"answer":3,"explanation":"It logs `[ 5, 3, 5, 3 ]`."}]
---
# Predict the Output: Mutating arrays #17

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
