---
slug: "async-predict-event-loop-9"
title: "Predict the Output: The event loop #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nsetTimeout(() => console.log(\"T\"), 0);\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\n```","options":["`TypeError`","`S ⏎ P ⏎ T ⏎ T2`","`P ⏎ T ⏎ T2 ⏎ S`","`S ⏎ T2 ⏎ T ⏎ P`"],"answer":1,"explanation":"It logs `S ⏎ P ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nPromise.resolve().then(() => console.log(\"P\"));\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T2\"), 5);\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`S ⏎ P ⏎ M ⏎ T2`","`T2 ⏎ S ⏎ M ⏎ P`","`P ⏎ S ⏎ T2 ⏎ M`","`S ⏎ M ⏎ P ⏎ T2`"],"answer":0,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\n```","options":["`TypeError`","`S ⏎ T ⏎ T2 ⏎ M`","`S ⏎ M ⏎ T ⏎ T2`","`T2 ⏎ T ⏎ M ⏎ S`"],"answer":2,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T\"), 0);\nPromise.resolve().then(() => console.log(\"P\"));\nqueueMicrotask(() => console.log(\"M\"));\nconsole.log(\"S\");\n```","options":["`S ⏎ M ⏎ T ⏎ P`","`S ⏎ T ⏎ M ⏎ P`","`T ⏎ P ⏎ M ⏎ S`","`S ⏎ P ⏎ M ⏎ T`"],"answer":3,"explanation":"It logs `S ⏎ P ⏎ M ⏎ T`."},{"prompt":"What does this log?\n\n```js\nsetTimeout(() => console.log(\"T2\"), 5);\nconsole.log(\"S\");\nsetTimeout(() => console.log(\"T\"), 0);\nqueueMicrotask(() => console.log(\"M\"));\n```","options":["`T2 ⏎ S ⏎ T ⏎ M`","`S ⏎ M ⏎ T ⏎ T2`","`T ⏎ S ⏎ T2 ⏎ M`","`TypeError`"],"answer":1,"explanation":"It logs `S ⏎ M ⏎ T ⏎ T2`."}]
---
# Predict the Output: The event loop #9

Synchronous code runs first, then **microtasks** (promise callbacks, `await` continuations, `queueMicrotask`), then **timers** (`setTimeout`), in the order they were scheduled.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
