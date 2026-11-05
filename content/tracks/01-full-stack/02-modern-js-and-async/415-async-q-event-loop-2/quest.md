---
slug: "async-q-event-loop-2"
title: "Quiz: Microtasks, Macrotasks & Rendering"
type: "quiz"
xp: 15
optional: true
section: "Practice"
questions: [{"prompt": "Which runs first after the current script: a resolved promise's .then or setTimeout(fn, 0)?", "options": ["setTimeout", "The .then callback", "Random"], "answer": 1}, {"prompt": "A loop that keeps scheduling microtasks forever will…", "options": ["Run in the background", "Block rendering and timers, freezing the page", "Be throttled automatically"], "answer": 1}, {"prompt": "How do you keep the UI responsive while processing a huge array in the browser?", "options": ["A bigger for loop", "Process it in chunks across tasks (setTimeout or scheduler.yield) or in a Web Worker", "More promises"], "answer": 1}, {"prompt": "Why does this app run learner code in a Web Worker?", "options": ["Workers are faster", "An infinite loop there cannot freeze the page, and the worker can be terminated", "Workers can access the DOM"], "answer": 1}, {"prompt": "`await` inside an async function…", "options": ["Blocks the whole thread", "Pauses only that function; other tasks keep running", "Is synchronous"], "answer": 1}]
---
# Quiz: Microtasks, Macrotasks & Rendering

- **Microtasks** (promise callbacks, `queueMicrotask`) run right after the current task, **before** the browser renders or runs any timers.
- **Macrotasks** (`setTimeout`, events, I/O) run one per event-loop turn.
- A long synchronous task, or an endless chain of microtasks, **blocks rendering**, and the page freezes.
