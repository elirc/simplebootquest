---
slug: "js-predict-scope-1"
title: "Predict the Output: Block scope #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 4;\n{\n  let x = 1;\n  x += 1;\n}\nif (true) {\n  x += 1;\n}\nconsole.log(x);\n```","options":["`SyntaxError`","`5`","`TypeError`","`3`"],"answer":1,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nlet x = 3;\n{\n  let x = 1;\n  x += 1;\n}\nif (true) {\n  x += 1;\n}\nconsole.log(x);\n```","options":["`TypeError`","`4`","`3`","`SyntaxError`"],"answer":1,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nlet x = 8;\n{\n  let x = 6;\n  x += 1;\n}\nif (true) {\n  x += 6;\n}\nconsole.log(x);\n```","options":["`8`","`13`","`14`","`TypeError`"],"answer":2,"explanation":"It logs `14`."},{"prompt":"What does this log?\n\n```js\nlet x = 2;\n{\n  let x = 9;\n  x += 1;\n}\nif (true) {\n  x += 9;\n}\nconsole.log(x);\n```","options":["`11`","`19`","`TypeError`","`2`"],"answer":0,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nlet x = 4;\n{\n  let x = 2;\n  x += 1;\n}\nif (true) {\n  x += 2;\n}\nconsole.log(x);\n```","options":["`5`","`6`","`4`","`TypeError`"],"answer":1,"explanation":"It logs `6`."}]
---
# Predict the Output: Block scope #1

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
