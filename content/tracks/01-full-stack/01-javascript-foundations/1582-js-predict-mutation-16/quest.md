---
slug: "js-predict-mutation-16"
title: "Predict the Output: Mutating arrays #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [7, 5, 8, 5];\na.reverse();\na.unshift(2);\na.pop();\nconsole.log(a);\n```","options":["`[ 2, 7, 5, 8 ]`","`[ 2, 5, 8, 5, 7 ]`","`[ 2, 5, 8, 5 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 2, 5, 8, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 5, 8, 7];\na.splice(0, 0, 7);\na.splice(1, 1);\na.slice(1);\nconsole.log(a);\n```","options":["`TypeError`","`[ 4, 8, 7 ]`","`[ 7 ]`","`[ 7, 5, 8, 7 ]`"],"answer":3,"explanation":"It logs `[ 7, 5, 8, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 1, 4, 7];\na.splice(0, 0, 7);\na.splice(1, 1);\na.pop();\nconsole.log(a);\n```","options":["`[ 7, 1, 4 ]`","`[ 3, 4 ]`","`TypeError`","`[ 7, 1, 4, 7 ]`"],"answer":0,"explanation":"It logs `[ 7, 1, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [2, 8, 6, 8];\na.unshift(2);\na.concat([0]);\na.shift();\nconsole.log(a);\n```","options":["`[ 8, 6, 8 ]`","`[ 2, 8, 6, 8, 0 ]`","`[ 2, 8, 6, 8 ]`","`[ 2, 2, 8, 6, 8 ]`"],"answer":2,"explanation":"It logs `[ 2, 8, 6, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 6, 7, 4];\na.slice(1);\na.shift();\na.splice(0, 0, 7);\nconsole.log(a);\n```","options":["`[ 7, 6, 7, 4 ]`","`TypeError`","`[ 6, 7, 4 ]`","`[ 7 ]`"],"answer":0,"explanation":"It logs `[ 7, 6, 7, 4 ]`."}]
---
# Predict the Output: Mutating arrays #16

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
