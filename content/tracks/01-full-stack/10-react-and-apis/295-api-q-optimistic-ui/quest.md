---
slug: "api-q-optimistic-ui"
title: "Quiz: Optimistic UI and Failure Handling"
type: "quiz"
xp: 15
resources: [{"title": "TanStack Query: Optimistic updates", "url": "https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates"}]
questions: [{"prompt": "When is an optimistic update a bad idea?", "options": ["Toggling a todo as done", "Charging a credit card", "Starring a repository"], "answer": 1}, {"prompt": "The optimistic request fails. What should happen?", "options": ["Keep the optimistic state", "Roll back to the snapshot and show an error", "Retry forever silently"], "answer": 1}, {"prompt": "Why refetch after the mutation settles, even on success?", "options": ["To waste bandwidth", "The server may have changed other fields (updatedAt, computed values), so refetching syncs the cache", "It is required for cookies"], "answer": 1}, {"prompt": "A user double-clicks \"Create\". How do you avoid two todos?", "options": ["Hope it does not happen", "Disable the button while submitting, and/or send an idempotency key", "Debounce the server"], "answer": 1}, {"prompt": "Where should the rollback snapshot be taken?", "options": ["After the server responds", "Before applying the optimistic change (e.g. in onMutate)", "In the error boundary"], "answer": 1}]
---
# Quiz: Optimistic UI and Failure Handling

**Optimistic updates** apply a change to the UI *before* the server confirms it, so the app feels instant. The price is handling failure:

1. Snapshot the current data.
2. Apply the change locally.
3. Send the request.
4. On error: **roll back** to the snapshot and tell the user.
5. On settle: refetch, so you converge with the server's truth.

Good candidates are toggling a checkbox, liking something, or reordering. Poor candidates are payments, or anything where the server decides the outcome (like assigning an id or a price). Show a pending state for those instead.
