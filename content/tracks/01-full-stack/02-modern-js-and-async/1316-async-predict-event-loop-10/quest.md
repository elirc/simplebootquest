---
slug: "async-predict-event-loop-10"
title: "Predict the Output: The event loop #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`S ⏎ M ⏎ P ⏎ T2`","`S ⏎ P ⏎ M ⏎ T2`","`TypeError`","`T2 ⏎ S ⏎ M ⏎ P`"],"answer":1,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`S ⏎ T2 ⏎ P ⏎ M`","`S ⏎ M ⏎ P ⏎ T2`","`TypeError`","`T2 ⏎ M ⏎ S ⏎ P`"],"answer":1,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`TypeError`","`T ⏎ T2 ⏎ S ⏎ P`","`S ⏎ P ⏎ T2 ⏎ T`","`S ⏎ P ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`T2 ⏎ T ⏎ M ⏎ P`","`M ⏎ P ⏎ T ⏎ T2`","`P ⏎ M ⏎ T ⏎ T2`","`P ⏎ T ⏎ M ⏎ T2`"],"answer":2,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`TypeError`","`M ⏎ S ⏎ T2 ⏎ P`","`T2 ⏎ S ⏎ P ⏎ M`","`S ⏎ M ⏎ P ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T2`."}]
---
# Predict the Output: The event loop #10

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
