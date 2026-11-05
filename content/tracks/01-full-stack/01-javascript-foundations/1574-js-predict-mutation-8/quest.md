---
slug: "js-predict-mutation-8"
title: "Predict the Output: Mutating arrays #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [1, 8, 9, 5];\na.splice(0, 0, 7);\na.pop();\na.slice(1);\nconsole.log(a);\n```","options":["`[ 7 ]`","`[ 7, 1, 8, 9 ]`","`[ 1, 8, 9 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 7, 1, 8, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 5, 7, 6];\na.slice(1);\na.concat([0]);\na.push(6);\nconsole.log(a);\n```","options":["`[ 9, 0, 6 ]`","`[ 9, 5, 7, 6, 6 ]`","`[ 9, 5, 7, 6 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 9, 5, 7, 6, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 5, 7, 8];\na.unshift(4);\na.reverse();\na.pop();\nconsole.log(a);\n```","options":["`[ 8, 7, 5, 7, 4 ]`","`[ 8, 7, 5 ]`","`[ 8, 7, 5, 7 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 8, 7, 5, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 8, 3, 5];\na.shift();\na.push(2);\na.reverse();\nconsole.log(a);\n```","options":["`[ 8, 3, 5, 2 ]`","`TypeError`","`[ 2, 5, 3, 8, 7 ]`","`[ 2, 5, 3, 8 ]`"],"answer":3,"explanation":"It logs `[ 2, 5, 3, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 6, 6, 7];\na.splice(1, 1);\na.splice(0, 0, 7);\na.shift();\nconsole.log(a);\n```","options":["`TypeError`","`[ 7, 9, 6, 7 ]`","`[ 9, 6, 7 ]`","`[ 9, 6, 6, 7 ]`"],"answer":2,"explanation":"It logs `[ 9, 6, 7 ]`."}]
---
# Predict the Output: Mutating arrays #8

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
