---
slug: "js-predict-truthy-9"
title: "Predict the Output: Truthy and falsy #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([0.0, undefined, null, \"0\"].map(Boolean));\n```","options":["`[ true, true, true, false ]`","`TypeError`","`[ false, false, false, true ]`","`[ false, false, false, false ]`"],"answer":2,"explanation":"It logs `[ false, false, false, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([0.0, \" \", 0, null].map(Boolean));\n```","options":["`[ true, false, true, true ]`","`[ false, false, false, false ]`","`[ false, true, false, false ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ false, true, false, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\" \", null, {}, \"\"].map(Boolean));\n```","options":["`[ false, true, false, true ]`","`[ true, false, false, true ]`","`[ false, false, false, false ]`","`[ true, false, true, false ]`"],"answer":3,"explanation":"It logs `[ true, false, true, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\"false\", NaN, -1, 0].map(Boolean));\n```","options":["`[ true, false, false, false ]`","`[ false, true, false, true ]`","`[ false, false, false, false ]`","`[ true, false, true, false ]`"],"answer":3,"explanation":"It logs `[ true, false, true, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([undefined, NaN, \"0\", -1].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`[ false, false, true, false ]`","`[ true, true, false, false ]`","`[ false, false, true, true ]`"],"answer":3,"explanation":"It logs `[ false, false, true, true ]`."}]
---
# Predict the Output: Truthy and falsy #9

Only `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` and `NaN` are falsy. Everything else, including `"0"`, `[]` and `{}`, is truthy.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
