---
slug: "async-predict-classes-2"
title: "Predict the Output: Classes #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Temp {\n  #c = 2;\n  get f() { return this.#c * 9 / 5 + 32; }\n}\nconsole.log(new Temp().f);\n```","options":["`NaN`","`TypeError`","`35.6`","`undefined`"],"answer":2,"explanation":"It logs `35.6`."},{"prompt":"What does this log?\n\n```js\nclass Temp {\n  #c = 4;\n  get f() { return this.#c * 9 / 5 + 32; }\n}\nconsole.log(new Temp().f);\n```","options":["`undefined`","`TypeError`","`39.2`","`NaN`"],"answer":2,"explanation":"It logs `39.2`."},{"prompt":"What does this log?\n\n```js\nclass Temp {\n  #c = 6;\n  get f() { return this.#c * 9 / 5 + 32; }\n}\nconsole.log(new Temp().f);\n```","options":["`undefined`","`NaN`","`TypeError`","`42.8`"],"answer":3,"explanation":"It logs `42.8`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(3, 2);\nr.w = 2;\nconsole.log(r.area);\n```","options":["`NaN`","`6`","`undefined`","`4`"],"answer":3,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(2, 3);\nr.w = 3;\nconsole.log(r.area);\n```","options":["`9`","`undefined`","`6`","`NaN`"],"answer":0,"explanation":"It logs `9`."}]
---
# Predict the Output: Classes #2

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
