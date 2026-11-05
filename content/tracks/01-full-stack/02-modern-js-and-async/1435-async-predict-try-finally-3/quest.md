---
slug: "async-predict-try-finally-3"
title: "Predict the Output: try / catch / finally #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 2;\n  } finally {\n    return 3;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`2`","`3`","`Error`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 6;\n  } finally {\n    return 7;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`undefined`","`7`","`6`"],"answer":2,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    return 7;\n  } finally {\n    console.log(\"cleanup\");\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`cleanup ⏎ 7`","`7`","`undefined`"],"answer":1,"explanation":"It logs `cleanup ⏎ 7`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 8;\n  } finally {\n    return 6;\n  }\n}\nconsole.log(f());\n```","options":["`8`","`Error`","`6`","`undefined`"],"answer":2,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 7;\n  } finally {\n    return 8;\n  }\n}\nconsole.log(f());\n```","options":["`7`","`undefined`","`Error`","`8`"],"answer":3,"explanation":"It logs `8`."}]
---
# Predict the Output: try / catch / finally #3

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
