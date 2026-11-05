---
slug: "js-predict-scope-9"
title: "Predict the Output: Block scope #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 7;\n{\n  let x = 2;\n  x += 1;\n}\nif (true) {\n  x += 2;\n}\nconsole.log(x);\n```","options":["`5`","`7`","`TypeError`","`9`"],"answer":3,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nlet x = 6;\n{\n  let x = 4;\n  x += 1;\n}\nif (true) {\n  x += 4;\n}\nconsole.log(x);\n```","options":["`6`","`10`","`TypeError`","`9`"],"answer":1,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet x = 9;\n{\n  let x = 9;\n  x += 1;\n}\nif (true) {\n  x += 9;\n}\nconsole.log(x);\n```","options":["`TypeError`","`19`","`18`","`9`"],"answer":2,"explanation":"It logs `18`."},{"prompt":"What does this log?\n\n```js\nlet x = 7;\n{\n  let x = 1;\n  x += 1;\n}\nif (true) {\n  x += 1;\n}\nconsole.log(x);\n```","options":["`8`","`TypeError`","`SyntaxError`","`3`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nlet x = 3;\n{\n  let x = 6;\n  x += 1;\n}\nif (true) {\n  x += 6;\n}\nconsole.log(x);\n```","options":["`13`","`9`","`3`","`TypeError`"],"answer":1,"explanation":"It logs `9`."}]
---
# Predict the Output: Block scope #9

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
