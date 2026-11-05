---
slug: "async-predict-classes-7"
title: "Predict the Output: Classes #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(3, 8);\nr.w = 8;\nconsole.log(r.area);\n```","options":["`NaN`","`64`","`undefined`","`24`"],"answer":1,"explanation":"It logs `64`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(2, 2);\nr.w = 2;\nconsole.log(r.area);\n```","options":["`undefined`","`TypeError`","`NaN`","`4`"],"answer":3,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nclass Temp {\n  #c = 3;\n  get f() { return this.#c * 9 / 5 + 32; }\n}\nconsole.log(new Temp().f);\n```","options":["`TypeError`","`undefined`","`37.4`","`NaN`"],"answer":2,"explanation":"It logs `37.4`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(5, 8);\nr.w = 8;\nconsole.log(r.area);\n```","options":["`64`","`NaN`","`40`","`undefined`"],"answer":0,"explanation":"It logs `64`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(4, 9);\nr.w = 9;\nconsole.log(r.area);\n```","options":["`undefined`","`36`","`NaN`","`81`"],"answer":3,"explanation":"It logs `81`."}]
---
# Predict the Output: Classes #7

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
