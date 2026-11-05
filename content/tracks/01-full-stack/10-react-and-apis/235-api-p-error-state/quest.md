---
slug: "api-p-error-state"
title: "Practice: Helpful Error States"
type: "code"
language: "jsx"
xp: 15
hints: ["Keep the mapping in a plain function, so it can be tested without rendering and reused for toasts."]
---
# Practice: Helpful Error States

"Something went wrong" helps nobody. Different failures need different messages and actions: log in again, check your connection, or retry.

The tests render your component with `render()` and inspect the result with `find`, `findAll` and `text`.

## Your task
1. `describeError(error)`, for an error with a `status`:
   - 0 → `{ title: 'You are offline', canRetry: true }`
   - 401 → `{ title: 'Please log in again', canRetry: false }`
   - 403 → `{ title: 'You do not have access to this', canRetry: false }`
   - 404 → `{ title: 'We could not find that', canRetry: false }`
   - 429 → `{ title: 'Too many requests, slow down a little', canRetry: true }`
   - 500 or above → `{ title: 'Our server had a problem', canRetry: true }`
   - anything else → `{ title: 'Something went wrong', canRetry: true }`
2. `<ErrorState error onRetry />` renders `<div role="alert">` with `<h2>{title}</h2>` and, when `canRetry`, `<button onClick={onRetry}>Try again</button>`. For 401 it renders `<a href="/login">Log in</a>` instead.
