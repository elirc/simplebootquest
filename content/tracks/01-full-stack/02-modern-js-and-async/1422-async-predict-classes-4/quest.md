---
slug: "async-predict-classes-4"
title: "Predict the Output: Classes #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(6, 7);\nr.w = 7;\nconsole.log(r.area);\n```","options":["`49`","`undefined`","`NaN`","`42`"],"answer":0,"explanation":"It logs `49`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(6, 9);\nr.w = 9;\nconsole.log(r.area);\n```","options":["`undefined`","`81`","`54`","`NaN`"],"answer":1,"explanation":"It logs `81`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(6, 5);\nr.w = 5;\nconsole.log(r.area);\n```","options":["`undefined`","`NaN`","`25`","`30`"],"answer":2,"explanation":"It logs `25`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(6, 4);\nr.w = 4;\nconsole.log(r.area);\n```","options":["`undefined`","`16`","`NaN`","`24`"],"answer":1,"explanation":"It logs `16`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(4, 7);\nr.w = 7;\nconsole.log(r.area);\n```","options":["`NaN`","`28`","`49`","`undefined`"],"answer":2,"explanation":"It logs `49`."}]
---
# Predict the Output: Classes #4

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
