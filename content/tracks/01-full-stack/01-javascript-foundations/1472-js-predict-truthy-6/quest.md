---
slug: "js-predict-truthy-6"
title: "Predict the Output: Truthy and falsy #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([\"0\", -1, 0, []].map(Boolean));\n```","options":["`[ true, true, false, true ]`","`[ false, false, true, false ]`","`[ false, false, false, false ]`","`[ true, false, false ]`"],"answer":0,"explanation":"It logs `[ true, true, false, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([0, 0.0, {}, undefined].map(Boolean));\n```","options":["`TypeError`","`[ false, false, false, false ]`","`[ false, false, true, false ]`","`[ true, true, false, true ]`"],"answer":2,"explanation":"It logs `[ false, false, true, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([null, undefined, {}, \"false\"].map(Boolean));\n```","options":["`[ false, false, false, true ]`","`[ false, false, false, false ]`","`[ true, true, false, false ]`","`[ false, false, true, true ]`"],"answer":3,"explanation":"It logs `[ false, false, true, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\" \", \"false\", NaN, undefined].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`[ false, false, true, true ]`","`TypeError`","`[ true, true, false, false ]`"],"answer":3,"explanation":"It logs `[ true, true, false, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\"0\", \" \", 0, NaN].map(Boolean));\n```","options":["`TypeError`","`[ false, false, false, false ]`","`[ true, true, false, false ]`","`[ false, false, true, true ]`"],"answer":2,"explanation":"It logs `[ true, true, false, false ]`."}]
---
# Predict the Output: Truthy and falsy #6

Only `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` and `NaN` are falsy. Everything else, including `"0"`, `[]` and `{}`, is truthy.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
