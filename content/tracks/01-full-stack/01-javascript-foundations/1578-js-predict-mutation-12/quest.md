---
slug: "js-predict-mutation-12"
title: "Predict the Output: Mutating arrays #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [7, 3, 9, 5];\na.splice(1, 1);\na.shift();\na.slice(1);\nconsole.log(a);\n```","options":["`[ 9 ]`","`[ 3, 9, 5 ]`","`[ 9, 5 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 9, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [2, 1, 2, 8];\na.splice(0, 0, 7);\na.push(6);\na.shift();\nconsole.log(a);\n```","options":["`TypeError`","`[ 2, 1, 2, 8, 6 ]`","`[ 1, 2, 8, 6 ]`","`[ 7, 2, 1, 2, 8, 6 ]`"],"answer":1,"explanation":"It logs `[ 2, 1, 2, 8, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 1, 7, 2];\na.push(1);\na.splice(1, 1);\na.reverse();\nconsole.log(a);\n```","options":["`[ 2, 7, 3 ]`","`TypeError`","`[ 3, 7, 2, 1 ]`","`[ 1, 2, 7, 3 ]`"],"answer":3,"explanation":"It logs `[ 1, 2, 7, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [1, 6, 1, 8];\na.push(4);\na.shift();\na.concat([0]);\nconsole.log(a);\n```","options":["`[ 6, 1, 8, 4, 0 ]`","`[ 6, 1, 8, 4 ]`","`TypeError`","`[ 6, 1, 8 ]`"],"answer":1,"explanation":"It logs `[ 6, 1, 8, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 7, 7, 2];\na.splice(0, 0, 7);\na.concat([0]);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 7, 7, 7, 7, 2 ]`","`[ 7, 7, 2 ]`","`[ 7, 7, 7, 2, 0 ]`","`[ 7, 7, 7, 2 ]`"],"answer":3,"explanation":"It logs `[ 7, 7, 7, 2 ]`."}]
---
# Predict the Output: Mutating arrays #12

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
