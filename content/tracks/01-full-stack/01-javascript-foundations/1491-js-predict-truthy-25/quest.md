---
slug: "js-predict-truthy-25"
title: "Predict the Output: Truthy and falsy #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([\"\", -1, NaN, \"0\"].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`[ true, false, true, false ]`","`[ true, false, false, true ]`","`[ false, true, false, true ]`"],"answer":3,"explanation":"It logs `[ false, true, false, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([0.0, -1, \"0\", \" \"].map(Boolean));\n```","options":["`[ true, false, false, false ]`","`[ false, false, false, false ]`","`[ false, false, true, true ]`","`[ false, true, true, true ]`"],"answer":3,"explanation":"It logs `[ false, true, true, true ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([{}, \"false\", \" \", \"\"].map(Boolean));\n```","options":["`[ false, false, false, false ]`","`[ false, false, false, true ]`","`[ false, true, true, true ]`","`[ true, true, true, false ]`"],"answer":3,"explanation":"It logs `[ true, true, true, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\"\", \"false\", {}, undefined].map(Boolean));\n```","options":["`[ true, true, false, false ]`","`[ false, true, true, false ]`","`[ false, false, false, false ]`","`[ true, false, false, true ]`"],"answer":1,"explanation":"It logs `[ false, true, true, false ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\"\", NaN, null, []].map(Boolean));\n```","options":["`[ true, false, false ]`","`[ true, true, true, false ]`","`[ false, false, false, false ]`","`[ false, false, false, true ]`"],"answer":3,"explanation":"It logs `[ false, false, false, true ]`."}]
---
# Predict the Output: Truthy and falsy #25

Only `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` and `NaN` are falsy. Everything else, including `"0"`, `[]` and `{}`, is truthy.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
