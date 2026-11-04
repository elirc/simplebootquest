---
slug: auth-authorization
title: Authorization Rules
type: code
language: ts
xp: 25
---
# Authorization Rules

Authentication tells you **who** the user is. Authorization decides **what they can do**. The most common and most damaging API vulnerability is **broken object-level authorization** (OWASP API #1): a user changes `/api/invoices/123` to `/api/invoices/124` and sees someone else's invoice.

**Every** query for a user's data must check ownership:

```ts
// ❌ any logged-in user can read any todo
prisma.todo.findUnique({ where: { id } });
// ✅ scoped to the owner
prisma.todo.findFirst({ where: { id, ownerId: req.user.id } });
```

### Centralise your rules

Scattering `if (user.role === 'admin' || post.authorId === user.id)` checks across handlers guarantees you'll forget one. Put the rules in **one function** and call it everywhere:

```ts
if (!can(user, 'update', post)) throw new ForbiddenError();
```

## Your task

Implement `can(user, action, post)` for a blogging platform. `user` is `{ id, role }` with `role` one of `'admin' | 'editor' | 'member'`, or `null` for guests. `post` is `{ authorId, status }` with `status` one of `'draft' | 'published'`. Actions are `'read' | 'update' | 'delete' | 'publish'`.

| Action | Allowed when |
|--------|--------------|
| `read` | The post is published (anyone, including guests), **or** the user is its author, an editor or an admin |
| `update` | The user is the author, an editor or an admin |
| `delete` | The user is the author, or an admin. Editors **cannot** delete others' posts |
| `publish` | Editors and admins only. Authors can't publish their own posts (they need review) |

Guests (`null`) can only read published posts. Unknown actions are always denied: **default deny**.
