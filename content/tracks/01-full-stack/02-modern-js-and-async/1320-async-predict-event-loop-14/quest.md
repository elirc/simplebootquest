---
slug: "async-predict-event-loop-14"
title: "Predict the Output: The event loop #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`S ⏎ M ⏎ P ⏎ T2`","`S ⏎ T2 ⏎ M ⏎ P`","`T2 ⏎ S ⏎ P ⏎ M`","`S ⏎ P ⏎ M ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`T ⏎ S ⏎ T2 ⏎ P`","`TypeError`","`T2 ⏎ P ⏎ S ⏎ T`","`S ⏎ P ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`M ⏎ S ⏎ T2 ⏎ T`","`TypeError`","`T ⏎ T2 ⏎ S ⏎ M`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`T ⏎ S ⏎ T2 ⏎ P`","`S ⏎ P ⏎ T ⏎ T2`","`T2 ⏎ S ⏎ P ⏎ T`","`TypeError`"],"answer":1,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`M ⏎ P ⏎ T ⏎ T2`","`P ⏎ M ⏎ T ⏎ T2`","`T ⏎ T2 ⏎ M ⏎ P`","`P ⏎ T2 ⏎ T ⏎ M`"],"answer":1,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."}]
---
# Predict the Output: The event loop #14

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
