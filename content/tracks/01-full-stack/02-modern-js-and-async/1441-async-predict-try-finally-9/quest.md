---
slug: "async-predict-try-finally-9"
title: "Predict the Output: try / catch / finally #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 2;\n  } finally {\n    return 7;\n  }\n}\nconsole.log(f());\n```","options":["`2`","`Error`","`undefined`","`7`"],"answer":3,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 1;\n  } finally {\n    return 4;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`Error`","`1`","`4`"],"answer":3,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 9;\n  } finally {\n    return 2;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`Error`","`9`","`2`"],"answer":3,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 5;\n  } finally {\n    return 7;\n  }\n}\nconsole.log(f());\n```","options":["`5`","`7`","`Error`","`undefined`"],"answer":1,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 4;\n  } finally {\n    return 8;\n  }\n}\nconsole.log(f());\n```","options":["`8`","`Error`","`4`","`undefined`"],"answer":0,"explanation":"It logs `8`."}]
---
# Predict the Output: try / catch / finally #9

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
