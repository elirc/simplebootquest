---
slug: "async-predict-classes-9"
title: "Predict the Output: Classes #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(5, 5);\nr.w = 5;\nconsole.log(r.area);\n```","options":["`NaN`","`TypeError`","`25`","`undefined`"],"answer":2,"explanation":"It logs `25`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(9, 5);\nr.w = 5;\nconsole.log(r.area);\n```","options":["`undefined`","`25`","`45`","`NaN`"],"answer":1,"explanation":"It logs `25`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(8, 9);\nr.w = 9;\nconsole.log(r.area);\n```","options":["`72`","`81`","`undefined`","`NaN`"],"answer":1,"explanation":"It logs `81`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(3, 9);\nr.w = 9;\nconsole.log(r.area);\n```","options":["`undefined`","`27`","`81`","`NaN`"],"answer":2,"explanation":"It logs `81`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(4, 3);\nr.w = 3;\nconsole.log(r.area);\n```","options":["`NaN`","`9`","`undefined`","`12`"],"answer":1,"explanation":"It logs `9`."}]
---
# Predict the Output: Classes #9

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
