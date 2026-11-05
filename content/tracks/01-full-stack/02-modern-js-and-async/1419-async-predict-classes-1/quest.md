---
slug: "async-predict-classes-1"
title: "Predict the Output: Classes #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Counter {\n  static created = 0;\n  constructor() { Counter.created++; }\n}\nnew Counter();\nnew Counter();\nconsole.log(Counter.created, new Counter().created);\n```","options":["`2 2`","`undefined`","`NaN`","`2 undefined`"],"answer":3,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(7, 8);\nr.w = 8;\nconsole.log(r.area);\n```","options":["`NaN`","`56`","`64`","`undefined`"],"answer":2,"explanation":"It logs `64`."},{"prompt":"What does this log?\n\n```js\nclass Animal {\n  speak() { return \"...\"; }\n}\nclass Dog extends Animal {\n  speak() { return super.speak() + \"woof\"; }\n}\nconsole.log(new Dog().speak());\n```","options":["`woof`","`undefined`","`...woof`","`NaN`"],"answer":2,"explanation":"It logs `...woof`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(4, 2);\nr.w = 2;\nconsole.log(r.area);\n```","options":["`4`","`8`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nclass Temp {\n  #c = 7;\n  get f() { return this.#c * 9 / 5 + 32; }\n}\nconsole.log(new Temp().f);\n```","options":["`NaN`","`undefined`","`TypeError`","`44.6`"],"answer":3,"explanation":"It logs `44.6`."}]
---
# Predict the Output: Classes #1

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
