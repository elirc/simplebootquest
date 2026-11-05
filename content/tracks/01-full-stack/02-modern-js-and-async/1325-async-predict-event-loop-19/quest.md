---
slug: "async-predict-event-loop-19"
title: "Predict the Output: The event loop #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\n```","options":["`T2 ⏎ M ⏎ P ⏎ S`","`TypeError`","`S ⏎ T2 ⏎ P ⏎ M`","`S ⏎ M ⏎ P ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`T ⏎ M ⏎ T2 ⏎ P`","`M ⏎ P ⏎ T ⏎ T2`","`T2 ⏎ T ⏎ P ⏎ M`","`M ⏎ T ⏎ P ⏎ T2`"],"answer":1,"explanation":"It logs `M ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`S ⏎ T2 ⏎ T ⏎ M`","`T ⏎ T2 ⏎ S ⏎ M`","`TypeError`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`S ⏎ M ⏎ P ⏎ T`","`T ⏎ S ⏎ M ⏎ P`","`P ⏎ S ⏎ T ⏎ M`","`S ⏎ P ⏎ M ⏎ T`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`T ⏎ S ⏎ M ⏎ T2`","`TypeError`","`T2 ⏎ S ⏎ T ⏎ M`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."}]
---
# Predict the Output: The event loop #19

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
