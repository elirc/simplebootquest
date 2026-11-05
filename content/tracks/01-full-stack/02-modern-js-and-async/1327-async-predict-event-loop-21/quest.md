---
slug: "async-predict-event-loop-21"
title: "Predict the Output: The event loop #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`S ⏎ M ⏎ P ⏎ T2`","`T2 ⏎ S ⏎ P ⏎ M`","`TypeError`","`M ⏎ P ⏎ S ⏎ T2`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`M ⏎ P ⏎ T ⏎ T2`","`T2 ⏎ T ⏎ M ⏎ P`","`P ⏎ T ⏎ T2 ⏎ M`","`P ⏎ M ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`M ⏎ T ⏎ P ⏎ T2`","`T ⏎ T2 ⏎ P ⏎ M`","`T2 ⏎ T ⏎ M ⏎ P`","`M ⏎ P ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `M ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\n```","options":["`S ⏎ M ⏎ T ⏎ P`","`S ⏎ T ⏎ P ⏎ M`","`T ⏎ M ⏎ P ⏎ S`","`S ⏎ M ⏎ P ⏎ T`"],"answer":3,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T`."},{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`M ⏎ T2 ⏎ S ⏎ P`","`TypeError`","`S ⏎ M ⏎ P ⏎ T2`","`S ⏎ T2 ⏎ P ⏎ M`"],"answer":2,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T2`."}]
---
# Predict the Output: The event loop #21

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
