---
slug: "js-predict-mutation-22"
title: "Predict the Output: Mutating arrays #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [1, 7, 3, 8];\na.shift();\na.push(2);\na.pop();\nconsole.log(a);\n```","options":["`[ 1, 7, 3, 8 ]`","`[ 7, 3, 8, 2 ]`","`[ 7, 3, 8 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 7, 3, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 3, 5, 8];\na.concat([0]);\na.pop();\na.push(4);\nconsole.log(a);\n```","options":["`[ 8, 3, 5, 8, 4 ]`","`[ 8, 3, 5, 4 ]`","`TypeError`","`[ 8, 3, 5 ]`"],"answer":1,"explanation":"It logs `[ 8, 3, 5, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 6, 8, 3];\na.concat([0]);\na.unshift(1);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 1, 6, 8, 3 ]`","`[ 1, 3, 6, 8, 3 ]`","`TypeError`","`[ 1, 6, 8, 3, 0 ]`"],"answer":0,"explanation":"It logs `[ 1, 6, 8, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 5, 5, 4];\na.splice(1, 1);\na.splice(0, 0, 7);\na.unshift(3);\nconsole.log(a);\n```","options":["`[ 7, 3, 5, 4 ]`","`[ 3, 7, 3, 5, 5, 4 ]`","`TypeError`","`[ 3, 7, 3, 5, 4 ]`"],"answer":3,"explanation":"It logs `[ 3, 7, 3, 5, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 3, 7, 2];\na.push(5);\na.splice(0, 0, 7);\na.concat([0]);\nconsole.log(a);\n```","options":["`[ 7, 5, 3, 7, 2 ]`","`TypeError`","`[ 7, 5, 3, 7, 2, 5, 0 ]`","`[ 7, 5, 3, 7, 2, 5 ]`"],"answer":3,"explanation":"It logs `[ 7, 5, 3, 7, 2, 5 ]`."}]
---
# Predict the Output: Mutating arrays #22

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
