---
slug: "api-p-submit-reducer"
title: "Practice: Form Submission State"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Returning the exact same object for a no-op action lets React skip re-rendering."]
---
# Practice: Form Submission State

A form talking to an API has more states than "loading or not": idle, submitting, succeeded, failed with **field errors** (a 400 from your validator) or with a general error (500, network).
A reducer makes every transition explicit, and it prevents double submits.

## Your task
Write `submitReducer(state, action)` with the initial state `{ status: 'idle', fieldErrors: {}, error: null }`:
- `'submit'`: only from `idle`, `success` or `error`, it moves to `submitting` and clears the errors. While already `submitting`, return the **same** state (so double clicks do nothing).
- `'success'`: `status: 'success'`.
- `'failure'` with `{ status, body }` from the API:
  - 400 with `body.error.issues` (`[{ path, message }]`) → `status: 'error'`, `fieldErrors` keyed by path (the **first** message per field), and `error: 'Please fix the highlighted fields'`.
  - Status 0 → `error: 'You appear to be offline'`.
  - Anything else → `error: body?.error?.message ?? 'Something went wrong'`.
- `'edit'` with `{ field }`: removes that field's error, so it disappears once the user fixes it.

Also write `canSubmit(state)`: false while submitting.
