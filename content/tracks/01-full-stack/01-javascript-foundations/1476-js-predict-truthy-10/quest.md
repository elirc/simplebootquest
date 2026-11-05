---
slug: "js-predict-truthy-10"
title: "Predict the Output: Truthy and falsy #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([\"\", \"false\", [], NaN].map(Boolean));\n```","options":["`[ true, false, false, true ]`","`[ false, true, true, false ]`","`[ true, true, false ]`","`[ false, false, false, false ]`"],"answer":1,"explanation":"It logs `[ false, true, true, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([0, [], \" \", undefined].map(Boolean));\n```","options":["`[ false, true, true, false ]`","`[ false, false, false, false ]`","`[ true, false, false, true ]`","`[ false, true, false ]`"],"answer":0,"explanation":"It logs `[ false, true, true, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([NaN, \" \", {}, \"0\"].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`[ false, true, true, true ]`","`[ true, false, false, false ]`","`[ false, true, false, true ]`"],"answer":1,"explanation":"It logs `[ false, true, true, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([null, 0.0, \"false\", -1].map(Boolean));\n```","options":["`[ false, false, true, false ]`","`[ true, true, false, false ]`","`[ false, false, true, true ]`","`[ false, false, false, false ]`"],"answer":2,"explanation":"It logs `[ false, false, true, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([{}, -1, 0, NaN].map(Boolean));\n```","options":["`[ true, true, false, false ]`","`TypeError`","`[ false, false, false, false ]`","`[ false, false, true, true ]`"],"answer":0,"explanation":"It logs `[ true, true, false, false ]`."}]
---
# Predict the Output: Truthy and falsy #10

Only `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` and `NaN` are falsy. Everything else, including `"0"`, `[]` and `{}`, is truthy.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
