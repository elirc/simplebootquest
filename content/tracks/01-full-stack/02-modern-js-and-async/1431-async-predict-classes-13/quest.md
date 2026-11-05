---
slug: "async-predict-classes-13"
title: "Predict the Output: Classes #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(4, 6);\nr.w = 6;\nconsole.log(r.area);\n```","options":["`NaN`","`36`","`24`","`undefined`"],"answer":1,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(5, 2);\nr.w = 2;\nconsole.log(r.area);\n```","options":["`undefined`","`10`","`NaN`","`4`"],"answer":3,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(8, 6);\nr.w = 6;\nconsole.log(r.area);\n```","options":["`36`","`NaN`","`undefined`","`48`"],"answer":0,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(6, 3);\nr.w = 3;\nconsole.log(r.area);\n```","options":["`18`","`9`","`undefined`","`NaN`"],"answer":1,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(6, 2);\nr.w = 2;\nconsole.log(r.area);\n```","options":["`4`","`12`","`undefined`","`NaN`"],"answer":0,"explanation":"It logs `4`."}]
---
# Predict the Output: Classes #13

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
