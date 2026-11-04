---
slug: "js-modern-syntax-quiz"
title: "Checkpoint: Modern Syntax"
type: "quiz"
xp: 10
questions: [{"prompt": "What does `{ ...user }` copy?", "options": ["Everything, deeply", "Only the top level (nested objects are shared)", "Nothing, it is a reference"], "answer": 1}, {"prompt": "What does `[1, 2, 3].reduce((a, b) => a + b)` do on an empty array?", "options": ["Returns 0", "Returns undefined", "Throws a TypeError"], "answer": 2, "explanation": "Always pass an initial value."}, {"prompt": "Which is the idiom for updating a form field by name?", "options": ["values.name = value", "{ ...values, [name]: value }", "Object.assign(values, value)"], "answer": 1}, {"prompt": "How do you return an object literal from an arrow function?", "options": ["=> { id: 1 }", "=> ({ id: 1 })", "=> return { id: 1 }"], "answer": 1}, {"prompt": "Why prefer named exports?", "options": ["They are faster", "Explicit names make refactoring and auto-imports reliable", "Default exports are deprecated"], "answer": 1}, {"prompt": "What makes generators useful for huge or infinite sequences?", "options": ["They run in parallel", "They are lazy: values are produced on demand", "They cache everything"], "answer": 1}]
---
# Checkpoint: Modern Syntax

Answer every question correctly to earn the XP.
