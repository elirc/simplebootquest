---
slug: ts-quiz
title: "Checkpoint: TypeScript"
type: quiz
xp: 10
questions:
  - prompt: "What happens to TypeScript types when your code runs?"
    options: ["They're checked at runtime", "They're erased — only JavaScript runs", "They slow down execution"]
    answer: 1
    explanation: "Types exist only at compile time. That's why data from outside must be validated at runtime."
  - prompt: "Which type should you use for a JSON body whose shape you haven't checked yet?"
    options: ["any", "unknown", "object", "never"]
    answer: 1
  - prompt: "Given `interface Todo { id: number; title: string; done: boolean }`, what is `Omit<Todo, 'id'>`?"
    options: ["{ id: number }", "{ title: string; done: boolean }", "Partial<Todo>"]
    answer: 1
  - prompt: "What makes a union a *discriminated* union?"
    options: ["It uses generics", "Every member has a shared literal field like `type` or `kind`", "It contains only strings"]
    answer: 1
  - prompt: "What does the return type `value is User` do?"
    options: ["Casts the value", "Declares a type guard that narrows the value when the function returns true", "Throws if the value isn't a User"]
    answer: 1
---
# Checkpoint: TypeScript

Answer every question correctly to earn the XP.
