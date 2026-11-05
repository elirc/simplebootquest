---
slug: "async-predict-event-loop-20"
title: "Predict the Output: The event loop #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`TypeError`","`S ⏎ T2 ⏎ M ⏎ T`","`T ⏎ T2 ⏎ S ⏎ M`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`M ⏎ P ⏎ T ⏎ T2`","`T ⏎ T2 ⏎ M ⏎ P`","`T2 ⏎ P ⏎ M ⏎ T`","`P ⏎ M ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `P ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`S ⏎ T ⏎ P ⏎ T2`","`S ⏎ P ⏎ T ⏎ T2`","`T ⏎ T2 ⏎ S ⏎ P`","`S ⏎ T2 ⏎ T ⏎ P`"],"answer":1,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`T2 ⏎ M ⏎ S ⏎ T`","`TypeError`","`T ⏎ S ⏎ T2 ⏎ M`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`T ⏎ M ⏎ P ⏎ T2`","`M ⏎ T ⏎ P ⏎ T2`","`M ⏎ P ⏎ T ⏎ T2`","`T2 ⏎ T ⏎ P ⏎ M`"],"answer":2,"explanation":"It logs `M ⏎ P ⏎ T ⏎ T2`."}]
---
# Predict the Output: The event loop #20

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
