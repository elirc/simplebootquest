---
slug: "async-predict-try-finally-14"
title: "Predict the Output: try / catch / finally #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 8;\n  } finally {\n    return 8;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`TypeError`","`8`","`undefined`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 3;\n  } finally {\n    return 1;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`Error`","`3`","`1`"],"answer":3,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 7;\n  } finally {\n    return 7;\n  }\n}\nconsole.log(f());\n```","options":["`7`","`undefined`","`Error`","`TypeError`"],"answer":0,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 3;\n  } finally {\n    return 9;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`3`","`undefined`","`9`"],"answer":3,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 2;\n  } finally {\n    return 2;\n  }\n}\nconsole.log(f());\n```","options":["`TypeError`","`2`","`Error`","`undefined`"],"answer":1,"explanation":"It logs `2`."}]
---
# Predict the Output: try / catch / finally #14

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
