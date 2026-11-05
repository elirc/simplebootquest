---
slug: "async-predict-event-loop-4"
title: "Predict the Output: The event loop #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`P ⏎ M ⏎ T ⏎ T2`","`T ⏎ T2 ⏎ M ⏎ P`","`P ⏎ M ⏎ T2 ⏎ T`","`M ⏎ P ⏎ T ⏎ T2`"],"answer":0,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`T2 ⏎ S ⏎ T ⏎ M`","`T ⏎ M ⏎ S ⏎ T2`","`TypeError`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`S ⏎ M ⏎ P ⏎ T2`","`TypeError`","`T2 ⏎ S ⏎ M ⏎ P`","`S ⏎ T2 ⏎ P ⏎ M`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`S ⏎ T ⏎ P ⏎ T2`","`T ⏎ S ⏎ T2 ⏎ P`","`S ⏎ P ⏎ T ⏎ T2`","`T2 ⏎ S ⏎ T ⏎ P`"],"answer":2,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`S ⏎ M ⏎ P ⏎ T`","`TypeError`","`M ⏎ S ⏎ P ⏎ T`","`T ⏎ S ⏎ P ⏎ M`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T`."}]
---
# Predict the Output: The event loop #4

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
