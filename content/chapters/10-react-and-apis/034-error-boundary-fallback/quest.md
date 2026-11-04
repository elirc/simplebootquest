---
slug: "react-api-error-fallback"
title: "Error Fallbacks"
type: "code"
language: "jsx"
xp: 20
hints: ["Order the checks: specific statuses first, then 5xx/network, then the fallback.", "Reuse `describeError` inside `ErrorPanel`."]
resources: [{"title": "React docs: Error boundaries", "url": "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary"}, {"title": "react-error-boundary", "url": "https://github.com/bvaughn/react-error-boundary"}]
---
# Error Fallbacks

A rendering error anywhere in the tree **unmounts the whole app** (a white screen). **Error boundaries** catch errors in their subtree and show a fallback instead:

```jsx
<ErrorBoundary fallback={(error, reset) => <ErrorPanel error={error} onRetry={reset} />}>
  <Dashboard />
</ErrorBoundary>
```

Error boundaries must be class components (or come from a library like `react-error-boundary`). The *fallback UI* is a regular component, and its job is to turn any error into something a human can act on.

## Your task

1. `describeError(error)` returns `{ title, message, retryable }`:
   - an `ApiError`-like object with `status === 401` → `"Session expired"`, `"Please log in again."`, not retryable
   - `status === 403` → `"Access denied"`, `"You don't have permission to view this."`, not retryable
   - `status === 404` → `"Not found"`, `"This item may have been deleted."`, not retryable
   - `status >= 500` or `status === 0` (network) → `"Something went wrong"`, `"Please try again in a moment."`, retryable
   - anything else → `"Unexpected error"`, the error's message (or `"Unknown error"`), retryable
2. `ErrorPanel({ error, onRetry, onLogin })` renders `<div role="alert" className="error-panel">` with an `<h2>` title and a `<p>` message, then a `<button onClick={onRetry}>Try again</button>` if retryable, and a `<button onClick={onLogin}>Log in</button>` for 401s.
