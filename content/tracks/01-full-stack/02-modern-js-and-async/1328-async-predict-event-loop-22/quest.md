---
slug: "async-predict-event-loop-22"
title: "Predict the Output: The event loop #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\n```","options":["`T ⏎ P ⏎ T2 ⏎ S`","`S ⏎ P ⏎ T ⏎ T2`","`S ⏎ T ⏎ P ⏎ T2`","`S ⏎ T2 ⏎ T ⏎ P`"],"answer":1,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`P ⏎ M ⏎ T ⏎ T2`","`M ⏎ P ⏎ T ⏎ T2`","`T2 ⏎ T ⏎ M ⏎ P`","`TypeError`"],"answer":0,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\n```","options":["`TypeError`","`M ⏎ P ⏎ T ⏎ S`","`S ⏎ T ⏎ P ⏎ M`","`S ⏎ M ⏎ P ⏎ T`"],"answer":3,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`M ⏎ T ⏎ P ⏎ T2`","`P ⏎ M ⏎ T ⏎ T2`","`T ⏎ P ⏎ M ⏎ T2`","`T2 ⏎ T ⏎ M ⏎ P`"],"answer":1,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`P ⏎ S ⏎ T2 ⏎ T`","`TypeError`","`S ⏎ P ⏎ T ⏎ T2`","`T ⏎ T2 ⏎ S ⏎ P`"],"answer":2,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."}]
---
# Predict the Output: The event loop #22

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
