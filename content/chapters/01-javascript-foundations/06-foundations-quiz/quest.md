---
slug: js-foundations-quiz
title: "Checkpoint: Foundations"
type: quiz
xp: 10
questions:
  - prompt: "Which declaration should be your default choice?"
    options: ["var", "let", "const"]
    answer: 2
    explanation: "const prevents reassignment, which makes code easier to reason about. Use let only when you must reassign."
  - prompt: "What does `'5' === 5` evaluate to?"
    options: ["true", "false", "It throws an error"]
    answer: 1
    explanation: "=== compares without type conversion, and a string is never strictly equal to a number."
  - prompt: "Which of these values is truthy?"
    options: ["0", "''", "[]", "null"]
    answer: 2
    explanation: "Empty arrays and objects are truthy. Only false, 0, '', null, undefined and NaN are falsy."
  - prompt: "What does `[10, 9, 1].sort()` return?"
    options: ["[1, 9, 10]", "[1, 10, 9]", "[10, 9, 1]"]
    answer: 1
    explanation: "Without a compare function, sort converts items to strings, and '10' sorts before '9'."
  - prompt: "A function that remembers variables from the scope where it was created is called a…"
    options: ["callback", "closure", "prototype", "promise"]
    answer: 1
---
# Checkpoint: Foundations

Quick check before the boss fight. Answer every question correctly to earn the XP. You can retry as many times as you like.
