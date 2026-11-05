---
slug: "js-predict-mutation-15"
title: "Predict the Output: Mutating arrays #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [9, 6, 1, 2];\na.concat([0]);\na.pop();\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 9, 1 ]`","`[ 9, 6, 1 ]`","`TypeError`","`[ 9, 1, 2 ]`"],"answer":0,"explanation":"It logs `[ 9, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 3, 9, 1];\na.unshift(6);\na.push(4);\na.reverse();\nconsole.log(a);\n```","options":["`[ 4, 1, 9, 3, 3, 6 ]`","`TypeError`","`[ 6, 3, 3, 9, 1, 4 ]`","`[ 4, 1, 9, 3, 3 ]`"],"answer":0,"explanation":"It logs `[ 4, 1, 9, 3, 3, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 6, 5, 1];\na.push(7);\na.unshift(1);\na.shift();\nconsole.log(a);\n```","options":["`[ 8, 6, 5, 1 ]`","`[ 1, 8, 6, 5, 1, 7 ]`","`[ 8, 6, 5, 1, 7 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 8, 6, 5, 1, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 1, 2, 1];\na.push(4);\na.splice(1, 1);\na.slice(1);\nconsole.log(a);\n```","options":["`[ 7 ]`","`[ 7, 2, 1 ]`","`TypeError`","`[ 7, 2, 1, 4 ]`"],"answer":3,"explanation":"It logs `[ 7, 2, 1, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 1, 9, 9];\na.push(2);\na.unshift(7);\na.shift();\nconsole.log(a);\n```","options":["`[ 7, 5, 1, 9, 9, 2 ]`","`[ 5, 1, 9, 9 ]`","`[ 5, 1, 9, 9, 2 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 5, 1, 9, 9, 2 ]`."}]
---
# Predict the Output: Mutating arrays #15

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
