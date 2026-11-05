---
slug: "async-predict-event-loop-15"
title: "Predict the Output: The event loop #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`S ⏎ M ⏎ P ⏎ T`","`S ⏎ M ⏎ T ⏎ P`","`T ⏎ S ⏎ P ⏎ M`","`TypeError`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`S ⏎ P ⏎ M ⏎ T`","`T ⏎ S ⏎ M ⏎ P`","`P ⏎ S ⏎ M ⏎ T`","`S ⏎ M ⏎ P ⏎ T`"],"answer":0,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\n```","options":["`S ⏎ T ⏎ T2 ⏎ P`","`T2 ⏎ T ⏎ P ⏎ S`","`S ⏎ T ⏎ P ⏎ T2`","`S ⏎ P ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`TypeError`","`S ⏎ T ⏎ T2 ⏎ M`","`T2 ⏎ M ⏎ T ⏎ S`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`S ⏎ P ⏎ T ⏎ T2`","`TypeError`","`S ⏎ T ⏎ P ⏎ T2`","`T2 ⏎ T ⏎ S ⏎ P`"],"answer":0,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."}]
---
# Predict the Output: The event loop #15

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
