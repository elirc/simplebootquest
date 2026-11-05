---
slug: "async-predict-event-loop-1"
title: "Predict the Output: The event loop #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`M ⏎ P ⏎ T ⏎ T2`","`M ⏎ T ⏎ P ⏎ T2`","`TypeError`","`T2 ⏎ T ⏎ P ⏎ M`"],"answer":0,"explanation":"It logs `M ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`TypeError`","`S ⏎ M ⏎ T2 ⏎ T`","`T ⏎ T2 ⏎ S ⏎ M`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`T2 ⏎ T ⏎ S ⏎ M`","`S ⏎ T ⏎ T2 ⏎ M`","`TypeError`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`M ⏎ T ⏎ P ⏎ T2`","`M ⏎ P ⏎ T ⏎ T2`","`T2 ⏎ T ⏎ P ⏎ M`","`M ⏎ T ⏎ T2 ⏎ P`"],"answer":1,"explanation":"It logs `M ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`S ⏎ T ⏎ M ⏎ P`","`S ⏎ P ⏎ M ⏎ T`","`S ⏎ M ⏎ T ⏎ P`","`T ⏎ P ⏎ S ⏎ M`"],"answer":1,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T`."}]
---
# Predict the Output: The event loop #1

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
