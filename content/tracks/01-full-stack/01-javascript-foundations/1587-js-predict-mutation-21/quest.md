---
slug: "js-predict-mutation-21"
title: "Predict the Output: Mutating arrays #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [3, 6, 1, 2];\na.splice(1, 1);\na.pop();\na.push(1);\nconsole.log(a);\n```","options":["`[ 3, 1, 1 ]`","`[ 3, 6, 1, 1 ]`","`[ 3, 1 ]`","`TypeError`"],"answer":0,"explanation":"It logs `[ 3, 1, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [1, 6, 4, 7];\na.unshift(3);\na.splice(0, 0, 7);\na.reverse();\nconsole.log(a);\n```","options":["`[ 7, 4, 6, 1, 7 ]`","`TypeError`","`[ 7, 3, 1, 6, 4, 7 ]`","`[ 7, 4, 6, 1, 3, 7 ]`"],"answer":3,"explanation":"It logs `[ 7, 4, 6, 1, 3, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 7, 1, 4];\na.reverse();\na.concat([0]);\na.pop();\nconsole.log(a);\n```","options":["`[ 4, 1, 7, 4 ]`","`[ 4, 1, 7 ]`","`TypeError`","`[ 4, 7, 1 ]`"],"answer":1,"explanation":"It logs `[ 4, 1, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 3, 1, 7];\na.shift();\na.splice(0, 0, 7);\na.reverse();\nconsole.log(a);\n```","options":["`[ 7, 1, 3, 7 ]`","`[ 7, 1, 3, 3, 7 ]`","`TypeError`","`[ 7, 3, 1, 7 ]`"],"answer":0,"explanation":"It logs `[ 7, 1, 3, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 1, 7, 8];\na.reverse();\na.slice(1);\na.splice(1, 1);\nconsole.log(a);\n```","options":["`[ 8, 7, 1, 4 ]`","`[ 4, 7, 8 ]`","`[ 8, 1, 4 ]`","`[ 8 ]`"],"answer":2,"explanation":"It logs `[ 8, 1, 4 ]`."}]
---
# Predict the Output: Mutating arrays #21

`push`, `pop`, `shift`, `unshift`, `splice`, `sort` and `reverse` change the array in place. `slice`, `concat`, `map` and `filter` return new arrays.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
