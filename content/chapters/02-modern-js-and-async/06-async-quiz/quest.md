---
slug: js-async-quiz
title: "Checkpoint: The Event Loop"
type: quiz
xp: 10
questions:
  - prompt: "What does this log? `console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C');`"
    options: ["A B C", "A C B", "B A C"]
    answer: 1
    explanation: "setTimeout callbacks go to the task queue and only run after the current synchronous code finishes, even with a 0ms delay."
  - prompt: "A fetch() call returns a 500 status. What happens to the promise?"
    options: ["It rejects", "It resolves; you must check res.ok", "It never settles"]
    answer: 1
    explanation: "fetch only rejects on network errors. HTTP error statuses still resolve."
  - prompt: "You need data from 5 independent endpoints. What's the best approach?"
    options: ["await each one in a for loop", "Promise.all with map", "Nested .then callbacks"]
    answer: 1
  - prompt: "What does an async function return?"
    options: ["Whatever you return", "Always a Promise", "undefined"]
    answer: 1
    explanation: "The return value is wrapped in a Promise, and a thrown error becomes a rejection."
  - prompt: "Which method waits for ALL promises and never rejects?"
    options: ["Promise.all", "Promise.race", "Promise.allSettled", "Promise.any"]
    answer: 2
---
# Checkpoint: The Event Loop

JavaScript runs on a **single thread**. It handles waiting through the *event loop*: slow work (timers, network) happens elsewhere, and its callbacks are queued to run once the current code finishes. Promise callbacks (microtasks) run before timer callbacks (tasks).

Answer every question correctly to earn the XP.
