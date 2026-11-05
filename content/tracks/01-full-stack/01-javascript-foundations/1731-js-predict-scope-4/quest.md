---
slug: "js-predict-scope-4"
title: "Predict the Output: Block scope #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 8;\n{\n  let x = 9;\n  x += 1;\n}\nif (true) {\n  x += 9;\n}\nconsole.log(x);\n```","options":["`TypeError`","`19`","`8`","`17`"],"answer":3,"explanation":"It logs `17`."},{"prompt":"What does this log?\n\n```js\nlet x = 4;\n{\n  let x = 6;\n  x += 1;\n}\nif (true) {\n  x += 6;\n}\nconsole.log(x);\n```","options":["`13`","`TypeError`","`10`","`4`"],"answer":2,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet x = 6;\n{\n  let x = 8;\n  x += 1;\n}\nif (true) {\n  x += 8;\n}\nconsole.log(x);\n```","options":["`TypeError`","`6`","`14`","`17`"],"answer":2,"explanation":"It logs `14`."},{"prompt":"What does this log?\n\n```js\nlet x = 3;\n{\n  let x = 5;\n  x += 1;\n}\nif (true) {\n  x += 5;\n}\nconsole.log(x);\n```","options":["`8`","`3`","`TypeError`","`11`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nlet x = 9;\n{\n  let x = 5;\n  x += 1;\n}\nif (true) {\n  x += 5;\n}\nconsole.log(x);\n```","options":["`9`","`11`","`14`","`TypeError`"],"answer":2,"explanation":"It logs `14`."}]
---
# Predict the Output: Block scope #4

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
