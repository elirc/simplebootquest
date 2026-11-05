---
slug: "async-predict-classes-5"
title: "Predict the Output: Classes #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(8, 7);\nr.w = 7;\nconsole.log(r.area);\n```","options":["`56`","`undefined`","`49`","`NaN`"],"answer":2,"explanation":"It logs `49`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(7, 4);\nr.w = 4;\nconsole.log(r.area);\n```","options":["`16`","`undefined`","`NaN`","`28`"],"answer":0,"explanation":"It logs `16`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(7, 6);\nr.w = 6;\nconsole.log(r.area);\n```","options":["`undefined`","`NaN`","`36`","`42`"],"answer":2,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nclass Temp {\n  #c = 8;\n  get f() { return this.#c * 9 / 5 + 32; }\n}\nconsole.log(new Temp().f);\n```","options":["`46.4`","`NaN`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `46.4`."},{"prompt":"What does this log?\n\n```js\nclass Rect {\n  constructor(w, h) { this.w = w; this.h = h; }\n  get area() { return this.w * this.h; }\n}\nconst r = new Rect(2, 8);\nr.w = 8;\nconsole.log(r.area);\n```","options":["`NaN`","`16`","`64`","`undefined`"],"answer":2,"explanation":"It logs `64`."}]
---
# Predict the Output: Classes #5

Getters run when the property is read. `super.method()` calls the parent version. `static` members live on the class, not on instances.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
