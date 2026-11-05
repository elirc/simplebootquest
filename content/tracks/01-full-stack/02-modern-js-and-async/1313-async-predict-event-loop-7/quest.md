---
slug: "async-predict-event-loop-7"
title: "Predict the Output: The event loop #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`S ⏎ M ⏎ P ⏎ T2`","`TypeError`","`T2 ⏎ S ⏎ P ⏎ M`","`M ⏎ S ⏎ P ⏎ T2`"],"answer":0,"explanation":"It logs `S ⏎ M ⏎ P ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nqueueMicrotask(() => console.log(\"M\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\n```","options":["`TypeError`","`S ⏎ M ⏎ T ⏎ T2`","`M ⏎ T2 ⏎ T ⏎ S`","`S ⏎ T ⏎ T2 ⏎ M`"],"answer":1,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`P ⏎ T ⏎ S ⏎ T2`","`TypeError`","`T2 ⏎ S ⏎ T ⏎ P`","`S ⏎ P ⏎ T ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`P ⏎ T2 ⏎ S ⏎ M`","`S ⏎ T2 ⏎ M ⏎ P`","`S ⏎ M ⏎ P ⏎ T2`","`S ⏎ P ⏎ M ⏎ T2`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\n```","options":["`T2 ⏎ S ⏎ T ⏎ P`","`S ⏎ T ⏎ P ⏎ T2`","`S ⏎ P ⏎ T ⏎ T2`","`T ⏎ P ⏎ S ⏎ T2`"],"answer":2,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."}]
---
# Predict the Output: The event loop #7

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
