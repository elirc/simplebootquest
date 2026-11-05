---
slug: "async-predict-classes-10"
title: "Predict the Output: Classes #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(5, 9);\nr.w = 9;\nconsole.log(r.area);\n```","options":["`81`","`undefined`","`NaN`","`45`"],"answer":0,"explanation":"It logs `81`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(9, 3);\nr.w = 3;\nconsole.log(r.area);\n```","options":["`9`","`27`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(9, 7);\nr.w = 7;\nconsole.log(r.area);\n```","options":["`NaN`","`undefined`","`63`","`49`"],"answer":3,"explanation":"It logs `49`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(7, 9);\nr.w = 9;\nconsole.log(r.area);\n```","options":["`81`","`NaN`","`63`","`undefined`"],"answer":0,"explanation":"It logs `81`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(5, 7);\nr.w = 7;\nconsole.log(r.area);\n```","options":["`NaN`","`49`","`undefined`","`35`"],"answer":1,"explanation":"It logs `49`."}]
---
# Predict the Output: Classes #10

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
