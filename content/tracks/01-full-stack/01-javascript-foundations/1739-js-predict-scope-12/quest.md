---
slug: "js-predict-scope-12"
title: "Predict the Output: Block scope #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 3;\n{\n  let x = 7;\n  x += 1;\n}\nif (true) {\n  x += 7;\n}\nconsole.log(x);\n```","options":["`10`","`3`","`TypeError`","`15`"],"answer":0,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet x = 2;\n{\n  let x = 2;\n  x += 1;\n}\nif (true) {\n  x += 2;\n}\nconsole.log(x);\n```","options":["`TypeError`","`5`","`4`","`2`"],"answer":2,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nlet x = 4;\n{\n  let x = 8;\n  x += 1;\n}\nif (true) {\n  x += 8;\n}\nconsole.log(x);\n```","options":["`17`","`TypeError`","`4`","`12`"],"answer":3,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet x = 7;\n{\n  let x = 8;\n  x += 1;\n}\nif (true) {\n  x += 8;\n}\nconsole.log(x);\n```","options":["`TypeError`","`15`","`17`","`7`"],"answer":1,"explanation":"It logs `15`."},{"prompt":"What does this log?\n\n```js\nlet x = 9;\n{\n  let x = 3;\n  x += 1;\n}\nif (true) {\n  x += 3;\n}\nconsole.log(x);\n```","options":["`9`","`7`","`12`","`TypeError`"],"answer":2,"explanation":"It logs `12`."}]
---
# Predict the Output: Block scope #12

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
