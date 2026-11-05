---
slug: "ts-p-parse-api-array"
title: "Practice: Parsing an Untrusted API Response"
type: "code"
language: "ts"
xp: 15
hints: ["Write a per-item `toUser(item): User | null` and count the nulls."]
---
## Your task
`parseUsers(json: unknown)` validates an API response shaped like `{ data: [{ id: number, email: string, role?: 'admin' | 'member' }] }` and returns `{ users: User[], skipped: number }`:

- If the overall shape is wrong (no `data` array), throw `Error('Unexpected response shape')`.
- **Skip** invalid items (count them in `skipped`) instead of failing the whole response. Resilient clients tolerate partial bad data.
- `role` defaults to `'member'`. Unknown roles make the item invalid.
