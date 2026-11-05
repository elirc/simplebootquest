---
slug: "async-predict-try-finally-4"
title: "Predict the Output: try / catch / finally #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 4;\n  } finally {\n    return 6;\n  }\n}\nconsole.log(f());\n```","options":["`4`","`undefined`","`Error`","`6`"],"answer":3,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 9;\n  } finally {\n    return 7;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`9`","`7`","`undefined`"],"answer":2,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    return 8;\n  } finally {\n    console.log(\"cleanup\");\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`cleanup ⏎ 8`","`8`","`Error`"],"answer":1,"explanation":"It logs `cleanup ⏎ 8`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    return 5;\n  } finally {\n    console.log(\"cleanup\");\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`Error`","`5`","`cleanup ⏎ 5`"],"answer":3,"explanation":"It logs `cleanup ⏎ 5`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    return 4;\n  } finally {\n    console.log(\"cleanup\");\n  }\n}\nconsole.log(f());\n```","options":["`4`","`Error`","`cleanup ⏎ 4`","`undefined`"],"answer":2,"explanation":"It logs `cleanup ⏎ 4`."}]
---
# Predict the Output: try / catch / finally #4

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
