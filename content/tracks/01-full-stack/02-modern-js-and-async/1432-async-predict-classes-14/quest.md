---
slug: "async-predict-classes-14"
title: "Predict the Output: Classes #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(8, 4);\nr.w = 4;\nconsole.log(r.area);\n```","options":["`undefined`","`16`","`NaN`","`32`"],"answer":1,"explanation":"It logs `16`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(9, 4);\nr.w = 4;\nconsole.log(r.area);\n```","options":["`NaN`","`36`","`16`","`undefined`"],"answer":2,"explanation":"It logs `16`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(7, 3);\nr.w = 3;\nconsole.log(r.area);\n```","options":["`9`","`NaN`","`undefined`","`21`"],"answer":0,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(4, 4);\nr.w = 4;\nconsole.log(r.area);\n```","options":["`16`","`undefined`","`TypeError`","`NaN`"],"answer":0,"explanation":"It logs `16`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(3, 7);\nr.w = 7;\nconsole.log(r.area);\n```","options":["`21`","`NaN`","`undefined`","`49`"],"answer":3,"explanation":"It logs `49`."}]
---
# Predict the Output: Classes #14

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
