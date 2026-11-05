---
slug: "js-predict-coercion-21"
title: "Predict the Output: Type coercion #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"8\" + - \"9\");\n```","options":["`89`","`-1`","`8-9`","`NaN`"],"answer":2,"explanation":"It logs `8-9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" + - \"7\");\n```","options":["`NaN`","`-3`","`4-7`","`47`"],"answer":2,"explanation":"It logs `4-7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" - 6);\n```","options":["`-1`","`46`","`-2`","`NaN`"],"answer":2,"explanation":"It logs `-2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"5\" + - \"9\");\n```","options":["`5-9`","`NaN`","`-4`","`59`"],"answer":0,"explanation":"It logs `5-9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(1 + 5 + \"3\");\n```","options":["`15`","`64`","`153`","`63`"],"answer":3,"explanation":"It logs `63`."}]
---
# Predict the Output: Type coercion #21

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
