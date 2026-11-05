---
slug: "js-predict-scope-8"
title: "Predict the Output: Block scope #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 3;\n{\n  let x = 9;\n  x += 1;\n}\nif (true) {\n  x += 9;\n}\nconsole.log(x);\n```","options":["`19`","`3`","`TypeError`","`12`"],"answer":3,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet x = 7;\n{\n  let x = 5;\n  x += 1;\n}\nif (true) {\n  x += 5;\n}\nconsole.log(x);\n```","options":["`11`","`12`","`TypeError`","`7`"],"answer":1,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet x = 6;\n{\n  let x = 3;\n  x += 1;\n}\nif (true) {\n  x += 3;\n}\nconsole.log(x);\n```","options":["`7`","`9`","`6`","`TypeError`"],"answer":1,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nlet x = 5;\n{\n  let x = 5;\n  x += 1;\n}\nif (true) {\n  x += 5;\n}\nconsole.log(x);\n```","options":["`11`","`10`","`5`","`TypeError`"],"answer":1,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet x = 6;\n{\n  let x = 6;\n  x += 1;\n}\nif (true) {\n  x += 6;\n}\nconsole.log(x);\n```","options":["`TypeError`","`6`","`12`","`13`"],"answer":2,"explanation":"It logs `12`."}]
---
# Predict the Output: Block scope #8

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
