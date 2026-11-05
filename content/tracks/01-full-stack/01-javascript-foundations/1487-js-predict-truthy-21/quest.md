---
slug: "js-predict-truthy-21"
title: "Predict the Output: Truthy and falsy #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([\"0\", \"false\", undefined, []].map(Boolean));\n```","options":["`[ true, true, false, true ]`","`[ false, false, true, false ]`","`[ false, false, false, false ]`","`[ true, true, false ]`"],"answer":0,"explanation":"It logs `[ true, true, false, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\"0\", -1, \"\", NaN].map(Boolean));\n```","options":["`[ true, false, true, false ]`","`[ true, true, false, false ]`","`[ false, false, false, false ]`","`[ false, false, true, true ]`"],"answer":1,"explanation":"It logs `[ true, true, false, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([null, undefined, \" \", \"\"].map(Boolean));\n```","options":["`[ false, false, true, false ]`","`[ false, false, false, false ]`","`[ false, false, true, true ]`","`[ true, true, false, true ]`"],"answer":0,"explanation":"It logs `[ false, false, true, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([0.0, \"0\", [], null].map(Boolean));\n```","options":["`[ true, false, false, true ]`","`[ false, true, false ]`","`[ false, false, false, false ]`","`[ false, true, true, false ]`"],"answer":3,"explanation":"It logs `[ false, true, true, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([null, undefined, \"false\", 0.0].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`[ true, true, false, true ]`","`TypeError`","`[ false, false, true, false ]`"],"answer":3,"explanation":"It logs `[ false, false, true, false ]`."}]
---
# Predict the Output: Truthy and falsy #21

Only `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` and `NaN` are falsy. Everything else, including `"0"`, `[]` and `{}`, is truthy.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
