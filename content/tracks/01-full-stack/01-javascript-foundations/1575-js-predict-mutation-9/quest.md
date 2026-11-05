---
slug: "js-predict-mutation-9"
title: "Predict the Output: Mutating arrays #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [6, 5, 1, 6];\na.pop();\na.concat([0]);\na.unshift(3);\nconsole.log(a);\n```","options":["`[ 6, 5, 1 ]`","`[ 3, 6, 5, 1 ]`","`[ 3, 6, 5, 1, 0 ]`","`[ 3, 6, 5, 1, 6 ]`"],"answer":1,"explanation":"It logs `[ 3, 6, 5, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 3, 7, 7];\na.reverse();\na.pop();\na.shift();\nconsole.log(a);\n```","options":["`[ 7, 7, 3 ]`","`[ 3, 7 ]`","`TypeError`","`[ 7, 3 ]`"],"answer":3,"explanation":"It logs `[ 7, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 8, 1, 8];\na.slice(1);\na.reverse();\na.unshift(7);\nconsole.log(a);\n```","options":["`[ 8, 1, 8, 9 ]`","`[ 7, 9 ]`","`[ 7, 8, 1, 8, 9 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 7, 8, 1, 8, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 1, 6, 6];\na.unshift(4);\na.shift();\na.splice(0, 0, 7);\nconsole.log(a);\n```","options":["`[ 5, 1, 6, 6 ]`","`[ 7, 1, 6, 6 ]`","`[ 7, 5, 1, 6, 6 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 7, 5, 1, 6, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 5, 8, 2];\na.pop();\na.splice(1, 1);\na.push(4);\nconsole.log(a);\n```","options":["`TypeError`","`[ 3, 8, 2, 4 ]`","`[ 3, 8 ]`","`[ 3, 8, 4 ]`"],"answer":3,"explanation":"It logs `[ 3, 8, 4 ]`."}]
---
# Predict the Output: Mutating arrays #9

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
