---
slug: "async-predict-try-finally-1"
title: "Predict the Output: try / catch / finally #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 5;\n  } finally {\n    return 8;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`Error`","`5`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    JSON.parse(\"{bad\");\n    return \"ok\";\n  } catch (e) {\n    return e.name;\n  }\n}\nconsole.log(f());\n```","options":["`SyntaxError`","`undefined`","`TypeError`","`Error`"],"answer":0,"explanation":"It logs `SyntaxError`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 1;\n  } finally {\n    return 5;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`undefined`","`5`","`1`"],"answer":2,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 9;\n  } finally {\n    return 5;\n  }\n}\nconsole.log(f());\n```","options":["`9`","`5`","`Error`","`undefined`"],"answer":1,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    return 6;\n  } finally {\n    console.log(\"cleanup\");\n  }\n}\nconsole.log(f());\n```","options":["`cleanup ⏎ 6`","`Error`","`undefined`","`6`"],"answer":0,"explanation":"It logs `cleanup ⏎ 6`."}]
---
# Predict the Output: try / catch / finally #1

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
