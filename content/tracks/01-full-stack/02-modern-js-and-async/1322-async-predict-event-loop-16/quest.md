---
slug: "async-predict-event-loop-16"
title: "Predict the Output: The event loop #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`S ⏎ M ⏎ T ⏎ P`","`S ⏎ M ⏎ P ⏎ T`","`S ⏎ T ⏎ P ⏎ M`","`T ⏎ M ⏎ S ⏎ P`"],"answer":1,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`S ⏎ T2 ⏎ M ⏎ P`","`S ⏎ M ⏎ P ⏎ T2`","`T2 ⏎ S ⏎ P ⏎ M`","`TypeError`"],"answer":1,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`M ⏎ T ⏎ S ⏎ T2`","`T2 ⏎ S ⏎ T ⏎ M`","`TypeError`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`S ⏎ P ⏎ M ⏎ T2`","`T2 ⏎ S ⏎ M ⏎ P`","`P ⏎ S ⏎ M ⏎ T2`","`S ⏎ M ⏎ P ⏎ T2`"],"answer":0,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`T ⏎ S ⏎ P ⏎ T2`","`S ⏎ T ⏎ P ⏎ T2`","`T2 ⏎ S ⏎ T ⏎ P`","`S ⏎ P ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."}]
---
# Predict the Output: The event loop #16

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
