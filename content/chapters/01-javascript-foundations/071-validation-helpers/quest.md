---
slug: "js-validation-helpers"
title: "Real-World: Form Validation Helpers"
type: "code"
language: "js"
xp: 20
hints: ["Each factory returns an arrow function: `return (v) => ...`.", "Treat missing values as empty strings: `String(v ?? \"\")`."]
---
# Real-World: Form Validation Helpers

Every signup form needs validation. A good design is a list of small, reusable **rule functions** that each return an error message or `null`, combined by a helper:

```js
const required = (v) => (v.trim() === '' ? 'is required' : null);
const minLength = (n) => (v) => (v.length < n ? `must be at least ${n} characters` : null);
```

`minLength(8)` returns a rule. That's a closure from earlier in this chapter, now doing real work. In Chapter 5 you'll see libraries like Zod built on the same idea.

## Your task

1. Write the rule factories `required()`, `minLength(n)`, `maxLength(n)`, `matches(regex, message)`. Each returns a rule `(value) => string | null`.
2. `validateField(value, rules)` returns the **first** error message, or `null`.
3. `validateForm(values, schema)` takes `schema = { field: [rules...] }` and returns an object containing only the fields that have errors.
