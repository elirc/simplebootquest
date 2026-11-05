---
slug: "js-predict-scope-6"
title: "Predict the Output: Block scope #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 1;\n{\n  let x = 9;\n  x += 1;\n}\nif (true) {\n  x += 9;\n}\nconsole.log(x);\n```","options":["`19`","`TypeError`","`1`","`10`"],"answer":3,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet x = 7;\n{\n  let x = 4;\n  x += 1;\n}\nif (true) {\n  x += 4;\n}\nconsole.log(x);\n```","options":["`9`","`7`","`11`","`TypeError`"],"answer":2,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nlet x = 1;\n{\n  let x = 3;\n  x += 1;\n}\nif (true) {\n  x += 3;\n}\nconsole.log(x);\n```","options":["`TypeError`","`7`","`1`","`4`"],"answer":3,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nlet x = 9;\n{\n  let x = 1;\n  x += 1;\n}\nif (true) {\n  x += 1;\n}\nconsole.log(x);\n```","options":["`TypeError`","`3`","`10`","`SyntaxError`"],"answer":2,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet x = 1;\n{\n  let x = 4;\n  x += 1;\n}\nif (true) {\n  x += 4;\n}\nconsole.log(x);\n```","options":["`9`","`TypeError`","`1`","`5`"],"answer":3,"explanation":"It logs `5`."}]
---
# Predict the Output: Block scope #6

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
