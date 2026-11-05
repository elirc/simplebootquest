---
slug: "js-predict-truthy-13"
title: "Predict the Output: Truthy and falsy #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([NaN, [], {}, \"0\"].map(Boolean));\n```","options":["`[ false, false, true ]`","`[ false, false, false, false ]`","`[ false, true, true, true ]`","`[ true, false, false, false ]`"],"answer":2,"explanation":"It logs `[ false, true, true, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\" \", 0.0, null, \"0\"].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`TypeError`","`[ false, true, true, false ]`","`[ true, false, false, true ]`"],"answer":3,"explanation":"It logs `[ true, false, false, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([undefined, \"0\", \"\", []].map(Boolean));\n```","options":["`[ false, true, true ]`","`[ true, false, true, false ]`","`[ false, false, false, false ]`","`[ false, true, false, true ]`"],"answer":3,"explanation":"It logs `[ false, true, false, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([{}, \"\", undefined, []].map(Boolean));\n```","options":["`[ true, false, false, true ]`","`[ false, true, true, false ]`","`[ false, true, false ]`","`[ false, false, false, false ]`"],"answer":0,"explanation":"It logs `[ true, false, false, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([{}, 0, \"false\", undefined].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`[ false, true, false, true ]`","`[ true, false, true, false ]`","`[ false, false, true, false ]`"],"answer":2,"explanation":"It logs `[ true, false, true, false ]`."}]
---
# Predict the Output: Truthy and falsy #13

Only `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` and `NaN` are falsy. Everything else, including `"0"`, `[]` and `{}`, is truthy.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
