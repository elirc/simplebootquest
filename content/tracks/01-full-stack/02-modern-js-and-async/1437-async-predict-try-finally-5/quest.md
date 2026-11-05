---
slug: "async-predict-try-finally-5"
title: "Predict the Output: try / catch / finally #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 5;\n  } finally {\n    return 2;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`undefined`","`2`","`5`"],"answer":2,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 1;\n  } finally {\n    return 2;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`1`","`2`","`Error`"],"answer":2,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 9;\n  } finally {\n    return 8;\n  }\n}\nconsole.log(f());\n```","options":["`undefined`","`Error`","`8`","`9`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 5;\n  } finally {\n    return 1;\n  }\n}\nconsole.log(f());\n```","options":["`Error`","`5`","`1`","`undefined`"],"answer":2,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nfunction f() {\n  try {\n    throw new Error(\"x\");\n  } catch {\n    return 5;\n  } finally {\n    return 6;\n  }\n}\nconsole.log(f());\n```","options":["`5`","`6`","`undefined`","`Error`"],"answer":1,"explanation":"It logs `6`."}]
---
# Predict the Output: try / catch / finally #5

`finally` always runs, even after `return`. A `return` inside `finally` overrides the earlier return value (a good reason never to do that).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
