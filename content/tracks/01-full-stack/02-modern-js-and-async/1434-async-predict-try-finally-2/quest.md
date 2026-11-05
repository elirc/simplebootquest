---
slug: "async-predict-try-finally-2"
title: "Predict the Output: try / catch / finally #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    return 2;\n  } finally {\n    console.log(\"cleanup\");\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`cleanup ⏎ 2`","`2`","`Error`"],"answer":1,"explanation":"It logs `cleanup ⏎ 2`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 1;\n  } finally {\n    return 3;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`undefined`","`1`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    return 3;\n  } finally {\n    console.log(\"cleanup\");\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`cleanup ⏎ 3`","`Error`","`3`"],"answer":1,"explanation":"It logs `cleanup ⏎ 3`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 3;\n  } finally {\n    return 3;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`Error`","`3`","`TypeError`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 8;\n  } finally {\n    return 2;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`Error`","`2`","`8`"],"answer":2,"explanation":"It logs `2`."}]
---
# Predict the Output: try / catch / finally #2

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
