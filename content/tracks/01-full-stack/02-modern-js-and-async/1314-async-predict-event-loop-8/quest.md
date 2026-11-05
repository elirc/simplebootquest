---
slug: "async-predict-event-loop-8"
title: "Predict the Output: The event loop #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\n```","options":["`P ⏎ T2 ⏎ T ⏎ S`","`TypeError`","`S ⏎ P ⏎ T ⏎ T2`","`S ⏎ T ⏎ T2 ⏎ P`"],"answer":2,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`T2 ⏎ S ⏎ M ⏎ T`","`TypeError`","`S ⏎ M ⏎ T ⏎ T2`","`T ⏎ S ⏎ T2 ⏎ M`"],"answer":2,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`S ⏎ T ⏎ M ⏎ T2`","`TypeError`","`S ⏎ M ⏎ T ⏎ T2`","`T2 ⏎ T ⏎ S ⏎ M`"],"answer":2,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`T ⏎ T2 ⏎ M ⏎ P`","`M ⏎ P ⏎ T ⏎ T2`","`P ⏎ T2 ⏎ M ⏎ T`","`P ⏎ M ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`T2 ⏎ P ⏎ S ⏎ M`","`S ⏎ T2 ⏎ M ⏎ P`","`S ⏎ P ⏎ M ⏎ T2`","`S ⏎ M ⏎ P ⏎ T2`"],"answer":2,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T2`."}]
---
# Predict the Output: The event loop #8

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
