---
slug: "async-predict-try-finally-16"
title: "Predict the Output: try / catch / finally #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 4;\n  } finally {\n    return 5;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`4`","`5`","`Error`"],"answer":2,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 1;\n  } finally {\n    return 1;\n  }\n}\nconsole.log(f());\n```","options":["`TypeError`","`1`","`undefined`","`Error`"],"answer":1,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 4;\n  } finally {\n    return 2;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`Error`","`4`","`2`"],"answer":3,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 4;\n  } finally {\n    return 9;\n  }\n}\nconsole.log(f());\n```","options":["`4`","`Error`","`9`","`undefined`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 6;\n  } finally {\n    return 4;\n  }\n}\nconsole.log(f());\n```","options":["`4`","`undefined`","`Error`","`6`"],"answer":0,"explanation":"It logs `4`."}]
---
# Predict the Output: try / catch / finally #16

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
