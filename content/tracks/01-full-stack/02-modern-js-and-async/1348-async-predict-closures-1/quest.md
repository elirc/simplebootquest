---
slug: "async-predict-closures-1"
title: "Predict the Output: Closures #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction counter(start) {\n  let n = start;\n  return () => (n += 1);\n}\nconst a = counter(2);\nconst b = counter(2);\na();\na();\nb();\nconsole.log(a(), b());\n```","options":["`4 4`","`6 7`","`5 4`","`3 3`"],"answer":2,"explanation":"It logs `5 4`."},{"prompt":"What does this log?\n\n```js\nfunction counter(start) {\n  let n = start;\n  return () => (n += 3);\n}\nconst a = counter(1);\nconst b = counter(1);\na();\na();\nb();\nconsole.log(a(), b());\n```","options":["`10 7`","`7 7`","`4 4`","`13 16`"],"answer":0,"explanation":"It logs `10 7`."},{"prompt":"What does this log?\n\n```js\nfunction counter(start) {\n  let n = start;\n  return () => (n += 2);\n}\nconst a = counter(3);\nconst b = counter(3);\na();\na();\nb();\nconsole.log(a(), b());\n```","options":["`11 13`","`7 7`","`9 7`","`5 5`"],"answer":2,"explanation":"It logs `9 7`."},{"prompt":"What does this log?\n\n```js\nfunction counter(start) {\n  let n = start;\n  return () => (n += 3);\n}\nconst a = counter(3);\nconst b = counter(3);\na();\na();\nb();\nconsole.log(a(), b());\n```","options":["`12 9`","`15 18`","`9 9`","`6 6`"],"answer":0,"explanation":"It logs `12 9`."},{"prompt":"What does this log?\n\n```js\nfunction counter(start) {\n  let n = start;\n  return () => (n += 3);\n}\nconst a = counter(2);\nconst b = counter(2);\na();\na();\nb();\nconsole.log(a(), b());\n```","options":["`8 8`","`14 17`","`5 5`","`11 8`"],"answer":3,"explanation":"It logs `11 8`."}]
---
# Predict the Output: Closures #1

A function remembers the variables in scope where it was **created**. Each call to a factory creates a fresh set of variables.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
