---
slug: "async-predict-try-finally-8"
title: "Predict the Output: try / catch / finally #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 5;\n  } finally {\n    return 9;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`5`","`undefined`","`9`"],"answer":3,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 7;\n  } finally {\n    return 6;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`6`","`7`","`Error`"],"answer":1,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 9;\n  } finally {\n    return 6;\n  }\n}\nconsole.log(f());\n```","options":["`6`","`undefined`","`9`","`Error`"],"answer":0,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 5;\n  } finally {\n    return 4;\n  }\n}\nconsole.log(f());\n```","options":["`5`","`undefined`","`Error`","`4`"],"answer":3,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 7;\n  } finally {\n    return 1;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`7`","`1`","`undefined`"],"answer":2,"explanation":"It logs `1`."}]
---
# Predict the Output: try / catch / finally #8

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
