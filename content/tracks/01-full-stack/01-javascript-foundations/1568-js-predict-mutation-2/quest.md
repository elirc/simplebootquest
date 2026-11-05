---
slug: "js-predict-mutation-2"
title: "Predict the Output: Mutating arrays #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [2, 1, 4, 7];\na.concat([0]);\na.push(2);\na.splice(0, 0, 7);\nconsole.log(a);\n```","options":["`[ 2, 1, 4, 7, 2 ]`","`TypeError`","`[ 7, 2, 1, 4, 7, 2 ]`","`[ 7, 2, 1, 4, 7, 0, 2 ]`"],"answer":2,"explanation":"It logs `[ 7, 2, 1, 4, 7, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [1, 8, 1, 8];\na.unshift(8);\na.slice(1);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 8, 1, 8, 1, 8 ]`","`[ 8, 8, 1, 8 ]`","`[ 8 ]`","`[ 1, 1, 8 ]`"],"answer":1,"explanation":"It logs `[ 8, 8, 1, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 3, 3, 6];\na.push(2);\na.reverse();\na.concat([0]);\nconsole.log(a);\n```","options":["`[ 2, 6, 3, 3, 6 ]`","`[ 6, 3, 3, 6 ]`","`[ 2, 6, 3, 3, 6, 0 ]`","`TypeError`"],"answer":0,"explanation":"It logs `[ 2, 6, 3, 3, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 5, 9, 9];\na.unshift(1);\na.splice(1, 1);\na.concat([0]);\nconsole.log(a);\n```","options":["`[ 1, 5, 9, 9 ]`","`[ 8, 9, 9 ]`","`TypeError`","`[ 1, 5, 9, 9, 0 ]`"],"answer":0,"explanation":"It logs `[ 1, 5, 9, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [2, 2, 6, 6];\na.push(6);\na.shift();\na.concat([0]);\nconsole.log(a);\n```","options":["`[ 2, 6, 6, 6, 0 ]`","`[ 2, 6, 6 ]`","`TypeError`","`[ 2, 6, 6, 6 ]`"],"answer":3,"explanation":"It logs `[ 2, 6, 6, 6 ]`."}]
---
# Predict the Output: Mutating arrays #2

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
