---
slug: "async-predict-event-loop-17"
title: "Predict the Output: The event loop #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\n```","options":["`T2 ⏎ P ⏎ T ⏎ S`","`S ⏎ T ⏎ T2 ⏎ P`","`S ⏎ P ⏎ T ⏎ T2`","`TypeError`"],"answer":2,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\n```","options":["`P ⏎ T2 ⏎ M ⏎ S`","`S ⏎ M ⏎ P ⏎ T2`","`S ⏎ T2 ⏎ M ⏎ P`","`S ⏎ P ⏎ M ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\n```","options":["`TypeError`","`S ⏎ T2 ⏎ P ⏎ M`","`S ⏎ M ⏎ P ⏎ T2`","`M ⏎ P ⏎ T2 ⏎ S`"],"answer":2,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`T2 ⏎ T ⏎ M ⏎ P`","`M ⏎ T ⏎ P ⏎ T2`","`P ⏎ M ⏎ T ⏎ T2`","`T ⏎ T2 ⏎ P ⏎ M`"],"answer":2,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`M ⏎ T ⏎ P ⏎ T2`","`M ⏎ P ⏎ T ⏎ T2`","`T ⏎ T2 ⏎ M ⏎ P`","`T2 ⏎ T ⏎ P ⏎ M`"],"answer":1,"explanation":"It logs `M ⏎ P ⏎ T ⏎ T2`."}]
---
# Predict the Output: The event loop #17

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
