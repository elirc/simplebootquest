---
slug: "async-predict-try-finally-6"
title: "Predict the Output: try / catch / finally #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 2;\n  } finally {\n    return 4;\n  }\n}\nconsole.log(f());\n```","options":["`2`","`undefined`","`4`","`Error`"],"answer":2,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    return 9;\n  } finally {\n    console.log(\"cleanup\");\n  }\n}\nconsole.log(f());\n```","options":["`9`","`Error`","`cleanup ⏎ 9`","`undefined`"],"answer":2,"explanation":"It logs `cleanup ⏎ 9`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    return 1;\n  } finally {\n    console.log(\"cleanup\");\n  }\n}\nconsole.log(f());\n```","options":["`1`","`Error`","`undefined`","`cleanup ⏎ 1`"],"answer":3,"explanation":"It logs `cleanup ⏎ 1`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 6;\n  } finally {\n    return 8;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`8`","`6`","`undefined`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 2;\n  } finally {\n    return 9;\n  }\n}\nconsole.log(f());\n```","options":["`9`","`2`","`undefined`","`Error`"],"answer":0,"explanation":"It logs `9`."}]
---
# Predict the Output: try / catch / finally #6

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
