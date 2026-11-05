---
slug: "async-predict-try-finally-18"
title: "Predict the Output: try / catch / finally #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 2;\n  } finally {\n    return 5;\n  }\n}\nconsole.log(f());\n```","options":["`5`","`Error`","`undefined`","`2`"],"answer":0,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 6;\n  } finally {\n    return 5;\n  }\n}\nconsole.log(f());\n```","options":["`6`","`5`","`undefined`","`Error`"],"answer":1,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 8;\n  } finally {\n    return 4;\n  }\n}\nconsole.log(f());\n```","options":["`8`","`undefined`","`4`","`Error`"],"answer":2,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 3;\n  } finally {\n    return 7;\n  }\n}\nconsole.log(f());\n```","options":["`3`","`Error`","`undefined`","`7`"],"answer":3,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 7;\n  } finally {\n    return 9;\n  }\n}\nconsole.log(f());\n```","options":["`7`","`Error`","`undefined`","`9`"],"answer":3,"explanation":"It logs `9`."}]
---
# Predict the Output: try / catch / finally #18

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
