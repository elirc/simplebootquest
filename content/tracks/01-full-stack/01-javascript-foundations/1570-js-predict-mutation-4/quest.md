---
slug: "js-predict-mutation-4"
title: "Predict the Output: Mutating arrays #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [4, 7, 8, 2];\na.push(2);\na.slice(1);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 4, 7, 8, 2, 2 ]`","`[ 4 ]`","`[ 4, 8, 2 ]`","`[ 4, 8, 2, 2 ]`"],"answer":3,"explanation":"It logs `[ 4, 8, 2, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 7, 6, 4];\na.slice(1);\na.push(2);\na.shift();\nconsole.log(a);\n```","options":["`[ 2 ]`","`TypeError`","`[ 7, 6, 4, 2 ]`","`[ 4, 7, 6, 4, 2 ]`"],"answer":2,"explanation":"It logs `[ 7, 6, 4, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [2, 9, 7, 9];\na.unshift(7);\na.shift();\na.slice(1);\nconsole.log(a);\n```","options":["`[ 9, 7, 9 ]`","`TypeError`","`[ 2, 9, 7, 9 ]`","`[ 2 ]`"],"answer":2,"explanation":"It logs `[ 2, 9, 7, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [2, 9, 6, 8];\na.pop();\na.concat([0]);\na.push(4);\nconsole.log(a);\n```","options":["`[ 2, 9, 6 ]`","`[ 2, 9, 6, 4 ]`","`[ 2, 9, 6, 0, 4 ]`","`[ 2, 9, 6, 8, 4 ]`"],"answer":1,"explanation":"It logs `[ 2, 9, 6, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 1, 6, 8];\na.push(2);\na.unshift(5);\na.splice(0, 0, 7);\nconsole.log(a);\n```","options":["`[ 7, 5, 7, 1, 6, 8, 2 ]`","`TypeError`","`[ 5, 7, 1, 6, 8, 2 ]`","`[ 7, 5, 7, 1, 6, 8 ]`"],"answer":0,"explanation":"It logs `[ 7, 5, 7, 1, 6, 8, 2 ]`."}]
---
# Predict the Output: Mutating arrays #4

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
