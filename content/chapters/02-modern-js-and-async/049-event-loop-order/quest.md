---
slug: "js-event-loop-order"
title: "Checkpoint: Predict the Output"
type: "quiz"
xp: 15
questions: [{"prompt": "What's logged? `setTimeout(() => log('A')); Promise.resolve().then(() => log('B')); log('C');`", "options": ["A B C", "C B A", "C A B", "B C A"], "answer": 1, "explanation": "Sync first (C), then microtasks (B), then timers (A)."}, {"prompt": "In `async function f() { log(1); await null; log(2); } f(); log(3);`, what's the order?", "options": ["1 2 3", "1 3 2", "3 1 2"], "answer": 1, "explanation": "An async function runs synchronously until its first await."}, {"prompt": "A CPU-heavy loop runs for 3 seconds. What happens to a setTimeout(fn, 0) scheduled before it?", "options": ["It runs on time", "It runs after the loop finishes", "It is cancelled"], "answer": 1}, {"prompt": "Which runs first: a `.then` callback or a `setTimeout(fn, 0)` callback, if both were scheduled at the same time?", "options": [".then", "setTimeout", "It's random"], "answer": 0}, {"prompt": "You debounce a search input by 300ms. The user types 5 characters, 100ms apart. How many searches run?", "options": ["5", "1", "0"], "answer": 1}]
---
# Checkpoint: Predict the Output

The event loop runs code in this order:

1. All **synchronous** code, to completion.
2. **Microtasks**: promise callbacks (`.then`, code after `await`), `queueMicrotask`.
3. One **macrotask** (`setTimeout`, I/O), then microtasks again, and so on.

```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
// 1, 4, 3, 2
```

Answer every question correctly to earn the XP.
