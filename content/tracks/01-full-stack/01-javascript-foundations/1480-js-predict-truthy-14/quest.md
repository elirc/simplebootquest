---
slug: "js-predict-truthy-14"
title: "Predict the Output: Truthy and falsy #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([[], 0, \"false\", NaN].map(Boolean));\n```","options":["`[ false, true, false, true ]`","`[ false, false, false, false ]`","`[ true, false, true, false ]`","`[ false, true, false ]`"],"answer":2,"explanation":"It logs `[ true, false, true, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\"\", \"0\", NaN, 0.0].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`[ true, false, true, true ]`","`[ true, true, false, false ]`","`[ false, true, false, false ]`"],"answer":3,"explanation":"It logs `[ false, true, false, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\" \", {}, 0.0, 0].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`[ true, true, false, false ]`","`[ true, false, false, false ]`","`[ false, false, true, true ]`"],"answer":1,"explanation":"It logs `[ true, true, false, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\" \", \"false\", [], NaN].map(Boolean));\n```","options":["`[ true, true, false ]`","`[ false, false, false, true ]`","`[ false, false, false, false ]`","`[ true, true, true, false ]`"],"answer":3,"explanation":"It logs `[ true, true, true, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([NaN, \"false\", \"0\", \" \"].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`TypeError`","`[ false, true, true, true ]`","`[ true, false, false, false ]`"],"answer":2,"explanation":"It logs `[ false, true, true, true ]`."}]
---
# Predict the Output: Truthy and falsy #14

Only `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` and `NaN` are falsy. Everything else, including `"0"`, `[]` and `{}`, is truthy.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
