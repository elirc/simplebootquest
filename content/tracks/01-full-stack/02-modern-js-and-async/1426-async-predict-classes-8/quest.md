---
slug: "async-predict-classes-8"
title: "Predict the Output: Classes #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(9, 9);\nr.w = 9;\nconsole.log(r.area);\n```","options":["`TypeError`","`NaN`","`undefined`","`81`"],"answer":3,"explanation":"It logs `81`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(4, 5);\nr.w = 5;\nconsole.log(r.area);\n```","options":["`NaN`","`20`","`undefined`","`25`"],"answer":3,"explanation":"It logs `25`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(9, 2);\nr.w = 2;\nconsole.log(r.area);\n```","options":["`undefined`","`NaN`","`4`","`18`"],"answer":2,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(2, 7);\nr.w = 7;\nconsole.log(r.area);\n```","options":["`49`","`14`","`undefined`","`NaN`"],"answer":0,"explanation":"It logs `49`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(7, 2);\nr.w = 2;\nconsole.log(r.area);\n```","options":["`4`","`NaN`","`14`","`undefined`"],"answer":0,"explanation":"It logs `4`."}]
---
# Predict the Output: Classes #8

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
