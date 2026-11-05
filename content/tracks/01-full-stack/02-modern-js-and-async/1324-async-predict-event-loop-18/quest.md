---
slug: "async-predict-event-loop-18"
title: "Predict the Output: The event loop #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`T ⏎ S ⏎ T2 ⏎ M`","`M ⏎ T2 ⏎ S ⏎ T`","`TypeError`","`S ⏎ M ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`S ⏎ P ⏎ M ⏎ T`","`S ⏎ M ⏎ P ⏎ T`","`P ⏎ M ⏎ S ⏎ T`","`T ⏎ S ⏎ M ⏎ P`"],"answer":0,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`T ⏎ T2 ⏎ M ⏎ P`","`M ⏎ T ⏎ P ⏎ T2`","`P ⏎ M ⏎ T ⏎ T2`","`T2 ⏎ T ⏎ P ⏎ M`"],"answer":2,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`T2 ⏎ M ⏎ T ⏎ P`","`M ⏎ T ⏎ P ⏎ T2`","`T ⏎ T2 ⏎ P ⏎ M`","`M ⏎ P ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `M ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`TypeError`","`S ⏎ P ⏎ M ⏎ T`","`S ⏎ M ⏎ P ⏎ T`","`T ⏎ S ⏎ M ⏎ P`"],"answer":1,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T`."}]
---
# Predict the Output: The event loop #18

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
