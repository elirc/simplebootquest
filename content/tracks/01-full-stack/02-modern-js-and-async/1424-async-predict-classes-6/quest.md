---
slug: "async-predict-classes-6"
title: "Predict the Output: Classes #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(2, 9);\nr.w = 9;\nconsole.log(r.area);\n```","options":["`undefined`","`81`","`18`","`NaN`"],"answer":1,"explanation":"It logs `81`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(8, 2);\nr.w = 2;\nconsole.log(r.area);\n```","options":["`undefined`","`4`","`NaN`","`16`"],"answer":1,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(5, 3);\nr.w = 3;\nconsole.log(r.area);\n```","options":["`15`","`9`","`NaN`","`undefined`"],"answer":1,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(9, 6);\nr.w = 6;\nconsole.log(r.area);\n```","options":["`undefined`","`36`","`NaN`","`54`"],"answer":1,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(5, 4);\nr.w = 4;\nconsole.log(r.area);\n```","options":["`20`","`undefined`","`16`","`NaN`"],"answer":2,"explanation":"It logs `16`."}]
---
# Predict the Output: Classes #6

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
