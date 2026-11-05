---
slug: "async-predict-classes-11"
title: "Predict the Output: Classes #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(2, 6);\nr.w = 6;\nconsole.log(r.area);\n```","options":["`undefined`","`NaN`","`36`","`12`"],"answer":2,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(3, 3);\nr.w = 3;\nconsole.log(r.area);\n```","options":["`TypeError`","`undefined`","`9`","`NaN`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(6, 6);\nr.w = 6;\nconsole.log(r.area);\n```","options":["`36`","`undefined`","`TypeError`","`NaN`"],"answer":0,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(3, 4);\nr.w = 4;\nconsole.log(r.area);\n```","options":["`undefined`","`16`","`NaN`","`12`"],"answer":1,"explanation":"It logs `16`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(8, 5);\nr.w = 5;\nconsole.log(r.area);\n```","options":["`25`","`NaN`","`40`","`undefined`"],"answer":0,"explanation":"It logs `25`."}]
---
# Predict the Output: Classes #11

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
