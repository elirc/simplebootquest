---
slug: "js-predict-mutation-6"
title: "Predict the Output: Mutating arrays #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [7, 5, 4, 1];\na.shift();\na.splice(0, 0, 7);\na.pop();\nconsole.log(a);\n```","options":["`TypeError`","`[ 7, 5, 4 ]`","`[ 7, 5, 4, 1 ]`","`[ 7, 7, 5, 4 ]`"],"answer":1,"explanation":"It logs `[ 7, 5, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 4, 3, 2];\na.slice(1);\na.unshift(7);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 7, 6, 4, 3, 2 ]`","`[ 7, 4, 3, 2 ]`","`[ 7 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 7, 4, 3, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 4, 1, 2];\na.unshift(6);\na.splice(0, 0, 7);\na.push(3);\nconsole.log(a);\n```","options":["`[ 7, 6, 4, 1, 2, 3 ]`","`[ 7, 6, 6, 4, 1, 2, 3 ]`","`TypeError`","`[ 7, 6, 6, 4, 1, 2 ]`"],"answer":1,"explanation":"It logs `[ 7, 6, 6, 4, 1, 2, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 8, 3, 8];\na.splice(1, 1);\na.unshift(2);\na.pop();\nconsole.log(a);\n```","options":["`[ 2, 5, 3, 8 ]`","`[ 2, 5, 3 ]`","`[ 2, 5, 8, 3 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 2, 5, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 6, 9, 6];\na.push(4);\na.reverse();\na.pop();\nconsole.log(a);\n```","options":["`[ 6, 9, 6 ]`","`[ 4, 6, 9, 6, 9 ]`","`[ 4, 6, 9, 6 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 4, 6, 9, 6 ]`."}]
---
# Predict the Output: Mutating arrays #6

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
