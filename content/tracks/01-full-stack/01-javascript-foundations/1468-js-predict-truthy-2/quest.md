---
slug: "js-predict-truthy-2"
title: "Predict the Output: Truthy and falsy #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([\"0\", NaN, 0, undefined].map(Boolean));\n```","options":["`TypeError`","`[ true, false, false, false ]`","`[ false, true, true, true ]`","`[ false, false, false, false ]`"],"answer":1,"explanation":"It logs `[ true, false, false, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([-1, {}, 0, undefined].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`TypeError`","`[ true, true, false, false ]`","`[ false, false, true, true ]`"],"answer":2,"explanation":"It logs `[ true, true, false, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([0, {}, NaN, []].map(Boolean));\n```","options":["`[ false, false, false ]`","`[ true, false, true, false ]`","`[ false, true, false, true ]`","`[ false, false, false, false ]`"],"answer":2,"explanation":"It logs `[ false, true, false, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\"0\", NaN, 0, 0.0].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`[ true, false, false, false ]`","`TypeError`","`[ false, true, true, true ]`"],"answer":1,"explanation":"It logs `[ true, false, false, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([{}, \" \", -1, \"0\"].map(Boolean));\n```","options":["`[ true, true, true, true ]`","`[ false, true, false, true ]`","`TypeError`","`[ false, false, false, false ]`"],"answer":0,"explanation":"It logs `[ true, true, true, true ]`."}]
---
# Predict the Output: Truthy and falsy #2

Only `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` and `NaN` are falsy. Everything else, including `"0"`, `[]` and `{}`, is truthy.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
