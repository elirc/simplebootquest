---
slug: "js-predict-scope-13"
title: "Predict the Output: Block scope #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 2;\n{\n  let x = 4;\n  x += 1;\n}\nif (true) {\n  x += 4;\n}\nconsole.log(x);\n```","options":["`9`","`TypeError`","`6`","`2`"],"answer":2,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet x = 8;\n{\n  let x = 2;\n  x += 1;\n}\nif (true) {\n  x += 2;\n}\nconsole.log(x);\n```","options":["`TypeError`","`10`","`5`","`8`"],"answer":1,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet x = 9;\n{\n  let x = 7;\n  x += 1;\n}\nif (true) {\n  x += 7;\n}\nconsole.log(x);\n```","options":["`TypeError`","`15`","`9`","`16`"],"answer":3,"explanation":"It logs `16`."},{"prompt":"What does this log?\n\n```js\nlet x = 4;\n{\n  let x = 9;\n  x += 1;\n}\nif (true) {\n  x += 9;\n}\nconsole.log(x);\n```","options":["`4`","`13`","`19`","`TypeError`"],"answer":1,"explanation":"It logs `13`."},{"prompt":"What does this log?\n\n```js\nlet x = 7;\n{\n  let x = 9;\n  x += 1;\n}\nif (true) {\n  x += 9;\n}\nconsole.log(x);\n```","options":["`TypeError`","`16`","`7`","`19`"],"answer":1,"explanation":"It logs `16`."}]
---
# Predict the Output: Block scope #13

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
