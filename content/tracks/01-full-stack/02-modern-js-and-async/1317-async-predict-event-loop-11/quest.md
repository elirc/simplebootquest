---
slug: "async-predict-event-loop-11"
title: "Predict the Output: The event loop #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\n```","options":["`P ⏎ M ⏎ T ⏎ S`","`S ⏎ T ⏎ M ⏎ P`","`S ⏎ M ⏎ P ⏎ T`","`S ⏎ P ⏎ M ⏎ T`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`S ⏎ M ⏎ P ⏎ T2`","`S ⏎ P ⏎ T2 ⏎ M`","`T2 ⏎ S ⏎ M ⏎ P`","`S ⏎ P ⏎ M ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\n```","options":["`S ⏎ T2 ⏎ T ⏎ M`","`T ⏎ M ⏎ T2 ⏎ S`","`TypeError`","`S ⏎ M ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`S ⏎ P ⏎ M ⏎ T2`","`S ⏎ M ⏎ P ⏎ T2`","`T2 ⏎ S ⏎ M ⏎ P`","`S ⏎ T2 ⏎ P ⏎ M`"],"answer":0,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\n```","options":["`S ⏎ P ⏎ M ⏎ T2`","`T2 ⏎ P ⏎ M ⏎ S`","`S ⏎ T2 ⏎ M ⏎ P`","`S ⏎ M ⏎ P ⏎ T2`"],"answer":0,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T2`."}]
---
# Predict the Output: The event loop #11

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
