---
slug: "node-q-event-loop"
title: "Quiz: The Event Loop in Practice"
type: "quiz"
xp: 15
resources: [{"title": "Node.js: The event loop, timers and process.nextTick()", "url": "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick"}]
questions: [{"prompt": "What does this print? `setTimeout(() => log(\"t\"), 0); Promise.resolve().then(() => log(\"p\")); log(\"s\");`", "options": ["t p s", "s p t", "s t p", "p s t"], "answer": 1}, {"prompt": "Which runs first: a `process.nextTick` callback or a resolved promise's `.then` callback?", "options": ["The promise callback", "process.nextTick", "Whichever was registered first"], "answer": 1}, {"prompt": "A route handler runs a synchronous loop for 2 seconds. What happens to other requests?", "options": ["They run in parallel on other threads", "They wait: the single JS thread is busy", "Node automatically moves the loop to a worker"], "answer": 1}, {"prompt": "Where should a CPU-heavy task like resizing images go in a busy API?", "options": ["Inside the request handler", "A worker thread or a background job queue", "Inside a setTimeout(fn, 0)"], "answer": 1}, {"prompt": "Why does `fs.readFile` not block the event loop?", "options": ["It is synchronous but fast", "The I/O is done by libuv (the OS or a thread pool), and the callback is queued when it finishes", "It runs in the browser"], "answer": 1}, {"prompt": "What does `await` do to the rest of an async function?", "options": ["Blocks the thread until the promise settles", "Schedules the rest of the function as a microtask when the promise settles, freeing the thread meanwhile", "Runs it on a new thread"], "answer": 1}]
---
# Quiz: The Event Loop in Practice

Node runs your JavaScript on **one thread**. Work is queued and run in phases:

1. Synchronous code runs to completion first.
2. Then the **microtask** queues drain: `process.nextTick` callbacks first, then promise callbacks (`.then`, code after `await`).
3. Then the event loop phases: **timers** (`setTimeout`, `setInterval`), **poll** (I/O callbacks), **check** (`setImmediate`)…, draining microtasks after each callback.

```js
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
process.nextTick(() => console.log('D'));
console.log('E');
// A E D C B
```

The practical lesson: **a long synchronous loop blocks every other request**. CPU-heavy work (image resizing, big JSON parsing, bcrypt with a high cost) belongs in a worker thread or a queue.
