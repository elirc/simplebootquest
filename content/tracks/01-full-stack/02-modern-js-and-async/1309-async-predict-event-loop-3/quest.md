---
slug: "async-predict-event-loop-3"
title: "Predict the Output: The event loop #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\n```","options":["`S ⏎ M ⏎ P ⏎ T`","`M ⏎ T ⏎ P ⏎ S`","`S ⏎ M ⏎ T ⏎ P`","`S ⏎ T ⏎ P ⏎ M`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T`."},{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`T ⏎ T2 ⏎ P ⏎ M`","`M ⏎ T2 ⏎ P ⏎ T`","`M ⏎ P ⏎ T ⏎ T2`","`TypeError`"],"answer":2,"explanation":"It logs `M ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`M ⏎ P ⏎ S ⏎ T`","`T ⏎ S ⏎ P ⏎ M`","`S ⏎ M ⏎ P ⏎ T`","`TypeError`"],"answer":2,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`P ⏎ M ⏎ T ⏎ T2`","`T2 ⏎ T ⏎ M ⏎ P`","`T ⏎ P ⏎ T2 ⏎ M`","`M ⏎ T ⏎ P ⏎ T2`"],"answer":0,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`P ⏎ T ⏎ S ⏎ M`","`S ⏎ T ⏎ M ⏎ P`","`S ⏎ M ⏎ P ⏎ T`","`S ⏎ P ⏎ M ⏎ T`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T`."}]
---
# Predict the Output: The event loop #3

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
