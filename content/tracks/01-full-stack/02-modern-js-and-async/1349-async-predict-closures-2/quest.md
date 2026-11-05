---
slug: "async-predict-closures-2"
title: "Predict the Output: Closures #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction counter(start) {\n  let n = start;\n  return () => (n += 1);\n}\nconst a = counter(1);\nconst b = counter(1);\na();\na();\nb();\nconsole.log(a(), b());\n```","options":["`4 3`","`5 6`","`3 3`","`2 2`"],"answer":0,"explanation":"It logs `4 3`."},{"prompt":"What does this log?\n\n```js\nfunction counter(start) {\n  let n = start;\n  return () => (n += 4);\n}\nconst a = counter(1);\nconst b = counter(1);\na();\na();\nb();\nconsole.log(a(), b());\n```","options":["`17 21`","`9 9`","`13 9`","`5 5`"],"answer":2,"explanation":"It logs `13 9`."},{"prompt":"What does this log?\n\n```js\nfunction counter(start) {\n  let n = start;\n  return () => (n += 4);\n}\nconst a = counter(3);\nconst b = counter(3);\na();\na();\nb();\nconsole.log(a(), b());\n```","options":["`19 23`","`11 11`","`7 7`","`15 11`"],"answer":3,"explanation":"It logs `15 11`."},{"prompt":"What does this log?\n\n```js\nfunction counter(start) {\n  let n = start;\n  return () => (n += 4);\n}\nconst a = counter(2);\nconst b = counter(2);\na();\na();\nb();\nconsole.log(a(), b());\n```","options":["`14 10`","`10 10`","`6 6`","`18 22`"],"answer":0,"explanation":"It logs `14 10`."},{"prompt":"What does this log?\n\n```js\nfunction counter(start) {\n  let n = start;\n  return () => (n += 2);\n}\nconst a = counter(2);\nconst b = counter(2);\na();\na();\nb();\nconsole.log(a(), b());\n```","options":["`4 4`","`10 12`","`8 6`","`6 6`"],"answer":2,"explanation":"It logs `8 6`."}]
---
# Predict the Output: Closures #2

A function remembers the variables in scope where it was **created**. Each call to a factory creates a fresh set of variables.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
