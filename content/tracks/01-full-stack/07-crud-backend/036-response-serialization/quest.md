---
slug: "crud-serialization"
title: "Serializers: Controlling API Output"
type: "code"
language: "ts"
xp: 20
hints: ["Build the output object field by field. Never spread the user row.", "Reuse `serializeUser` for the post author."]
---
# Serializers: Controlling API Output

Returning database rows straight from a route (`res.json(user)`) leaks whatever is in the row: password hashes, internal flags, other users' emails. A **serializer** decides exactly what leaves the server, and it can differ by viewer:

```ts
function serializeUser(user: User, viewer: Viewer | null) {
  const base = { id: user.id, name: user.name, avatarUrl: user.avatarUrl };
  if (viewer?.id === user.id || viewer?.role === 'admin') return { ...base, email: user.email };
  return base;
}
```

It's an allow-list: new database columns stay private until someone deliberately exposes them.

## Your task

1. `serializeUser(user, viewer)`: everyone sees `id`, `name` and `joinedAt` (an ISO date string from the `createdAt` Date). The user themself and admins also see `email`. **Only** admins see `role` and `lastLoginAt` (an ISO string, or `null`). Never `passwordHash`.
2. `serializePost(post, viewer)` returns `{ id, title, body, author: serializeUser(post.author, viewer), commentCount }`, where `commentCount` is `post.comments.length`. Drafts (`published: false`) are only visible to their author and admins. Return `null` for anyone else.
