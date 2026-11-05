---
slug: "js-predict-mutation-1"
title: "Predict the Output: Mutating arrays #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [3, 2, 3, 6];\na.shift();\na.concat([0]);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 2, 6, 0 ]`","`[ 3, 3, 6 ]`","`[ 2, 6 ]`","`[ 2, 3, 6 ]`"],"answer":2,"explanation":"It logs `[ 2, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 2, 3, 6];\na.splice(0, 0, 7);\na.pop();\na.reverse();\nconsole.log(a);\n```","options":["`[ 3, 2, 4 ]`","`[ 3, 2, 4, 7 ]`","`TypeError`","`[ 7, 4, 2, 3 ]`"],"answer":1,"explanation":"It logs `[ 3, 2, 4, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 4, 3, 3];\na.splice(1, 1);\na.pop();\na.shift();\nconsole.log(a);\n```","options":["`[ 5, 3 ]`","`[ 3 ]`","`TypeError`","`[ 4, 3 ]`"],"answer":1,"explanation":"It logs `[ 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [1, 3, 6, 3];\na.shift();\na.reverse();\na.concat([0]);\nconsole.log(a);\n```","options":["`[ 3, 6, 3, 0 ]`","`[ 3, 6, 3 ]`","`[ 3, 6, 3, 1 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 3, 6, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [2, 1, 7, 1];\na.concat([0]);\na.splice(0, 0, 7);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 7, 1, 7, 1 ]`","`TypeError`","`[ 7, 1, 7, 1, 0 ]`","`[ 7, 2, 1, 7, 1 ]`"],"answer":0,"explanation":"It logs `[ 7, 1, 7, 1 ]`."}]
---
# Predict the Output: Mutating arrays #1

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
