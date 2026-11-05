---
slug: "js-predict-truthy-24"
title: "Predict the Output: Truthy and falsy #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([null, 0.0, 0, \"\"].map(Boolean));\n```","options":["`[ true, true, true, true ]`","`[ false, false, false, true ]`","`TypeError`","`[ false, false, false, false ]`"],"answer":3,"explanation":"It logs `[ false, false, false, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\" \", NaN, -1, \"0\"].map(Boolean));\n```","options":["`[ true, false, true, true ]`","`[ false, false, false, false ]`","`[ true, false, false, true ]`","`[ false, true, false, false ]`"],"answer":0,"explanation":"It logs `[ true, false, true, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([null, {}, -1, \"false\"].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`[ true, false, false, false ]`","`[ false, false, false, true ]`","`[ false, true, true, true ]`"],"answer":3,"explanation":"It logs `[ false, true, true, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([0, NaN, \" \", -1].map(Boolean));\n```","options":["`[ false, false, true, true ]`","`[ false, false, true, false ]`","`[ true, true, false, false ]`","`[ false, false, false, false ]`"],"answer":0,"explanation":"It logs `[ false, false, true, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([undefined, \" \", \"false\", \"0\"].map(Boolean));\n```","options":["`[ true, false, false, false ]`","`TypeError`","`[ false, false, false, false ]`","`[ false, true, true, true ]`"],"answer":3,"explanation":"It logs `[ false, true, true, true ]`."}]
---
# Predict the Output: Truthy and falsy #24

Only `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` and `NaN` are falsy. Everything else, including `"0"`, `[]` and `{}`, is truthy.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
