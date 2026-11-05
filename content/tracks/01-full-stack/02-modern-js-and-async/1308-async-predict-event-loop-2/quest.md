---
slug: "async-predict-event-loop-2"
title: "Predict the Output: The event loop #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`T ⏎ S ⏎ T2 ⏎ P`","`S ⏎ P ⏎ T ⏎ T2`","`S ⏎ T ⏎ P ⏎ T2`","`T2 ⏎ S ⏎ T ⏎ P`"],"answer":1,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`S ⏎ P ⏎ T ⏎ T2`","`T2 ⏎ T ⏎ S ⏎ P`","`TypeError`","`P ⏎ S ⏎ T ⏎ T2`"],"answer":0,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`S ⏎ T ⏎ P ⏎ T2`","`S ⏎ T ⏎ T2 ⏎ P`","`T2 ⏎ T ⏎ S ⏎ P`","`S ⏎ P ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`T ⏎ T2 ⏎ M ⏎ P`","`P ⏎ M ⏎ T ⏎ T2`","`M ⏎ P ⏎ T ⏎ T2`","`T2 ⏎ P ⏎ T ⏎ M`"],"answer":1,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`S ⏎ M ⏎ T ⏎ P`","`T ⏎ S ⏎ M ⏎ P`","`S ⏎ M ⏎ P ⏎ T`","`S ⏎ T ⏎ P ⏎ M`"],"answer":2,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T`."}]
---
# Predict the Output: The event loop #2

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
