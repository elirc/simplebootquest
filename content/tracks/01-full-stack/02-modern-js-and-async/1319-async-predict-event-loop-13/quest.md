---
slug: "async-predict-event-loop-13"
title: "Predict the Output: The event loop #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\n```","options":["`TypeError`","`S ⏎ M ⏎ P ⏎ T2`","`M ⏎ T2 ⏎ P ⏎ S`","`S ⏎ T2 ⏎ P ⏎ M`"],"answer":1,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nPromise.resolve().then(() => console.log(\"P\"));\n```","options":["`S ⏎ M ⏎ T2 ⏎ P`","`TypeError`","`S ⏎ M ⏎ P ⏎ T2`","`T2 ⏎ S ⏎ P ⏎ M`"],"answer":2,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`S ⏎ T2 ⏎ T ⏎ M`","`T ⏎ T2 ⏎ M ⏎ S`","`TypeError`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`S ⏎ M ⏎ T ⏎ T2`","`T ⏎ S ⏎ T2 ⏎ M`","`T2 ⏎ S ⏎ T ⏎ M`","`TypeError`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\n```","options":["`TypeError`","`T2 ⏎ M ⏎ P ⏎ T`","`T ⏎ T2 ⏎ P ⏎ M`","`M ⏎ P ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `M ⏎ P ⏎ T ⏎ T2`."}]
---
# Predict the Output: The event loop #13

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
