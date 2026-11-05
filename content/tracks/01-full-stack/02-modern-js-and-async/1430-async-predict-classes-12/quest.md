---
slug: "async-predict-classes-12"
title: "Predict the Output: Classes #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(8, 8);\nr.w = 8;\nconsole.log(r.area);\n```","options":["`undefined`","`NaN`","`64`","`TypeError`"],"answer":2,"explanation":"It logs `64`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(3, 5);\nr.w = 5;\nconsole.log(r.area);\n```","options":["`NaN`","`25`","`15`","`undefined`"],"answer":1,"explanation":"It logs `25`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(3, 6);\nr.w = 6;\nconsole.log(r.area);\n```","options":["`18`","`36`","`NaN`","`undefined`"],"answer":1,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(6, 8);\nr.w = 8;\nconsole.log(r.area);\n```","options":["`48`","`undefined`","`64`","`NaN`"],"answer":2,"explanation":"It logs `64`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(2, 5);\nr.w = 5;\nconsole.log(r.area);\n```","options":["`10`","`25`","`NaN`","`undefined`"],"answer":1,"explanation":"It logs `25`."}]
---
# Predict the Output: Classes #12

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
