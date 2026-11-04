---
slug: "ts-type-system-quiz"
title: "Checkpoint: The Type System"
type: "quiz"
xp: 15
questions: [{"prompt": "Given `const ROLES = ['a', 'b'] as const`, what is `(typeof ROLES)[number]`?", "options": ["string", "'a' | 'b'", "readonly string[]"], "answer": 1}, {"prompt": "What does `keyof { id: number; name: string }` produce?", "options": ["number | string", "'id' | 'name'", "['id', 'name']"], "answer": 1}, {"prompt": "Why assign the action to a `never` variable in a reducer default case?", "options": ["To silence errors", "So the compiler errors if a union member is not handled", "It improves runtime speed"], "answer": 1}, {"prompt": "What does a branded type like `UserId` protect against?", "options": ["SQL injection", "Passing a different kind of id with the same underlying type", "Runtime type errors in JSON"], "answer": 1}, {"prompt": "What's the difference between `private` and `#private`?", "options": ["None", "`private` is compile-time only; `#private` is enforced at runtime too", "`#private` is compile-time only"], "answer": 1}, {"prompt": "Which type should a caught error have in TypeScript?", "options": ["any", "Error", "unknown"], "answer": 2, "explanation": "Anything can be thrown, so narrow it before use."}]
---
# Checkpoint: The Type System

Answer every question correctly to earn the XP.
