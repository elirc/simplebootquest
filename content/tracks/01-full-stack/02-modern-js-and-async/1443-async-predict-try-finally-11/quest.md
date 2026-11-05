---
slug: "async-predict-try-finally-11"
title: "Predict the Output: try / catch / finally #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 4;\n  } finally {\n    return 4;\n  }\n}\nconsole.log(f());\n```","options":["`4`","`Error`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 7;\n  } finally {\n    return 3;\n  }\n}\nconsole.log(f());\n```","options":["`3`","`Error`","`7`","`undefined`"],"answer":0,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 2;\n  } finally {\n    return 6;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`2`","`6`","`undefined`"],"answer":2,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 6;\n  } finally {\n    return 9;\n  }\n}\nconsole.log(f());\n```","options":["`6`","`undefined`","`9`","`Error`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 8;\n  } finally {\n    return 7;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`undefined`","`8`","`7`"],"answer":3,"explanation":"It logs `7`."}]
---
# Predict the Output: try / catch / finally #11

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
