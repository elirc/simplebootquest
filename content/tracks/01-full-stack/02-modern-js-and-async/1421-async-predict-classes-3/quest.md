---
slug: "async-predict-classes-3"
title: "Predict the Output: Classes #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Temp {\n  #c = 9;\n  get f() { return this.#c * 9 / 5 + 32; }\n}\nconsole.log(new Temp().f);\n```","options":["`TypeError`","`NaN`","`48.2`","`undefined`"],"answer":2,"explanation":"It logs `48.2`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(8, 3);\nr.w = 3;\nconsole.log(r.area);\n```","options":["`24`","`NaN`","`undefined`","`9`"],"answer":3,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(4, 8);\nr.w = 8;\nconsole.log(r.area);\n```","options":["`undefined`","`NaN`","`32`","`64`"],"answer":3,"explanation":"It logs `64`."},{"prompt":"What does this log?\n\n```js\nclass Temp {\n  #c = 5;\n  get f() { return this.#c * 9 / 5 + 32; }\n}\nconsole.log(new Temp().f);\n```","options":["`NaN`","`TypeError`","`41`","`undefined`"],"answer":2,"explanation":"It logs `41`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(9, 8);\nr.w = 8;\nconsole.log(r.area);\n```","options":["`NaN`","`64`","`72`","`undefined`"],"answer":1,"explanation":"It logs `64`."}]
---
# Predict the Output: Classes #3

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
