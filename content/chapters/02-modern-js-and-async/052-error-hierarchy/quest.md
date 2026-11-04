---
slug: "js-error-hierarchy"
title: "Designing an Error Hierarchy"
type: "code"
language: "js"
xp: 20
hints: ["Subclasses call `super(message, status)`.", "`this.name = this.constructor.name` gives every subclass the right name automatically."]
resources: [{"title": "MDN: Error cause", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause"}]
---
# Designing an Error Hierarchy

As an app grows, a single `Error` type isn't enough. A small hierarchy lets callers react to *categories* of failure:

```js
class AppError extends Error { ... }
class NotFoundError extends AppError { ... }   // → HTTP 404
class ValidationError extends AppError { ... } // → HTTP 400, with field details
class AuthError extends AppError { ... }       // → HTTP 401
```

Then one function maps any error to an HTTP response, and you never write status codes in business logic. You'll use exactly this in your Express API.

Also notice **`cause`**: `new Error('Could not save', { cause: dbError })` keeps the original error for debugging, while giving users a friendly message.

## Your task

1. `class AppError extends Error` with a `status` (default 500) and a `name` equal to the class name (hint: `this.constructor.name`).
2. `NotFoundError(resource)`: status 404, message `"<resource> not found"`.
3. `ValidationError(fields)`: status 400, message `"Validation failed"`, and a `fields` property.
4. `AuthError()`: status 401, message `"Not authenticated"`.
5. `toResponse(err)` returns `{ status, body }`, where `body` is `{ error: message }` (plus `fields` for validation errors). Errors that aren't `AppError`s become `500` with `"Internal Server Error"`.
