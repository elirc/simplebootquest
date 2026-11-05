---
slug: "js-predict-mutation-11"
title: "Predict the Output: Mutating arrays #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [1, 1, 1, 8];\na.reverse();\na.concat([0]);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 8, 1, 1, 0 ]`","`[ 8, 1, 1 ]`","`[ 8, 1, 1, 1 ]`","`[ 1, 1, 8 ]`"],"answer":1,"explanation":"It logs `[ 8, 1, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 2, 9, 6];\na.unshift(6);\na.push(6);\na.shift();\nconsole.log(a);\n```","options":["`[ 6, 8, 2, 9, 6, 6 ]`","`[ 8, 2, 9, 6, 6 ]`","`TypeError`","`[ 2, 9, 6, 6 ]`"],"answer":1,"explanation":"It logs `[ 8, 2, 9, 6, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [2, 2, 3, 1];\na.slice(1);\na.concat([0]);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 2 ]`","`TypeError`","`[ 2, 2, 3, 1 ]`","`[ 2, 3, 1 ]`"],"answer":3,"explanation":"It logs `[ 2, 3, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 8, 2, 7];\na.reverse();\na.concat([0]);\na.pop();\nconsole.log(a);\n```","options":["`TypeError`","`[ 5, 8, 2 ]`","`[ 7, 2, 8, 5 ]`","`[ 7, 2, 8 ]`"],"answer":3,"explanation":"It logs `[ 7, 2, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 4, 1, 2];\na.slice(1);\na.push(6);\na.reverse();\nconsole.log(a);\n```","options":["`[ 6, 5 ]`","`[ 5, 4, 1, 2, 6 ]`","`[ 6, 2, 1, 4, 5 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 6, 2, 1, 4, 5 ]`."}]
---
# Predict the Output: Mutating arrays #11

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
