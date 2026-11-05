---
slug: "async-predict-try-finally-12"
title: "Predict the Output: try / catch / finally #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 5;\n  } finally {\n    return 5;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`Error`","`5`","`TypeError`"],"answer":2,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 9;\n  } finally {\n    return 9;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`TypeError`","`undefined`","`9`"],"answer":3,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 3;\n  } finally {\n    return 4;\n  }\n}\nconsole.log(f());\n```","options":["`3`","`4`","`undefined`","`Error`"],"answer":1,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 4;\n  } finally {\n    return 3;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`3`","`undefined`","`4`"],"answer":1,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 8;\n  } finally {\n    return 3;\n  }\n}\nconsole.log(f());\n```","options":["`8`","`undefined`","`Error`","`3`"],"answer":3,"explanation":"It logs `3`."}]
---
# Predict the Output: try / catch / finally #12

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
