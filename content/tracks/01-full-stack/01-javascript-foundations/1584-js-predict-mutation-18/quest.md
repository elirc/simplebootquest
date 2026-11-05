---
slug: "js-predict-mutation-18"
title: "Predict the Output: Mutating arrays #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [5, 9, 5, 8];\na.splice(0, 0, 7);\na.splice(1, 1);\na.unshift(2);\nconsole.log(a);\n```","options":["`[ 7, 9, 5, 8 ]`","`TypeError`","`[ 2, 5, 5, 8 ]`","`[ 2, 7, 9, 5, 8 ]`"],"answer":3,"explanation":"It logs `[ 2, 7, 9, 5, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 4, 6, 9];\na.splice(1, 1);\na.reverse();\na.slice(1);\nconsole.log(a);\n```","options":["`TypeError`","`[ 9, 6, 4, 8 ]`","`[ 9, 6, 8 ]`","`[ 9 ]`"],"answer":2,"explanation":"It logs `[ 9, 6, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 4, 5, 6];\na.shift();\na.splice(1, 1);\na.unshift(6);\nconsole.log(a);\n```","options":["`[ 6, 4, 5, 6 ]`","`[ 4, 6 ]`","`[ 6, 4, 6 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 6, 4, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 1, 2, 9];\na.concat([0]);\na.reverse();\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 9, 2, 1, 5 ]`","`[ 0, 2, 1, 5 ]`","`[ 9, 1, 5 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 9, 1, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 7, 2, 7];\na.unshift(6);\na.slice(1);\na.reverse();\nconsole.log(a);\n```","options":["`[ 7, 2, 7, 3, 6 ]`","`[ 6 ]`","`[ 7, 2, 7, 3 ]`","`[ 6, 3, 7, 2, 7 ]`"],"answer":0,"explanation":"It logs `[ 7, 2, 7, 3, 6 ]`."}]
---
# Predict the Output: Mutating arrays #18

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
