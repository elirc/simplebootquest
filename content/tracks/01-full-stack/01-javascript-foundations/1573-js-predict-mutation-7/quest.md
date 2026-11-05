---
slug: "js-predict-mutation-7"
title: "Predict the Output: Mutating arrays #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [6, 5, 9, 4];\na.reverse();\na.concat([0]);\na.push(8);\nconsole.log(a);\n```","options":["`[ 4, 9, 5, 6 ]`","`[ 6, 5, 9, 4, 8 ]`","`[ 4, 9, 5, 6, 0, 8 ]`","`[ 4, 9, 5, 6, 8 ]`"],"answer":3,"explanation":"It logs `[ 4, 9, 5, 6, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 8, 4, 2];\na.push(4);\na.reverse();\na.splice(1, 1);\nconsole.log(a);\n```","options":["`TypeError`","`[ 2, 8, 7 ]`","`[ 4, 2, 4, 8, 7 ]`","`[ 4, 4, 8, 7 ]`"],"answer":3,"explanation":"It logs `[ 4, 4, 8, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 3, 9, 9];\na.slice(1);\na.unshift(3);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`TypeError`","`[ 3, 7, 3, 9, 9 ]`","`[ 3 ]`","`[ 3, 3, 9, 9 ]`"],"answer":3,"explanation":"It logs `[ 3, 3, 9, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 1, 5, 7];\na.unshift(8);\na.slice(1);\na.push(3);\nconsole.log(a);\n```","options":["`[ 8, 3 ]`","`[ 8, 4, 1, 5, 7 ]`","`[ 8, 4, 1, 5, 7, 3 ]`","`[ 4, 1, 5, 7, 3 ]`"],"answer":2,"explanation":"It logs `[ 8, 4, 1, 5, 7, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 2, 7, 9];\na.reverse();\na.push(9);\na.unshift(3);\nconsole.log(a);\n```","options":["`[ 3, 4, 2, 7, 9, 9 ]`","`[ 3, 9, 7, 2, 4, 9 ]`","`[ 9, 7, 2, 4, 9 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 3, 9, 7, 2, 4, 9 ]`."}]
---
# Predict the Output: Mutating arrays #7

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
