---
slug: "auth-rbac"
title: "Role-Based Access Control"
type: "code"
language: "ts"
xp: 25
hints: ["Collect permissions recursively, tracking roles currently being visited to detect cycles.", "`\"comment:*\"` matches when the wanted permission starts with `\"comment:\"`."]
resources: [{"title": "OWASP: Authorization cheat sheet", "url": "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"}]
---
# Role-Based Access Control

As apps grow, `if (user.role === 'admin' || user.role === 'editor' ...)` checks get out of hand. **RBAC** maps roles to named **permissions**, and checks permissions, never roles:

```ts
const ROLES = {
  viewer: ['post:read'],
  editor: { inherits: ['viewer'], permissions: ['post:write', 'post:publish'] },
  admin:  { inherits: ['editor'], permissions: ['user:manage', 'post:delete'] },
};

if (!hasPermission(user, 'post:publish')) throw new ForbiddenError();
```

Adding a "moderator" role later means editing data, not hunting through every route. Wildcards (`post:*`) keep big role definitions short.

## Your task

`createRbac(roles)`, where `roles` is `{ [role]: { inherits?: string[], permissions: string[] } }`, returns:

- `permissionsFor(role)`: a sorted array of the role's permissions plus every inherited one (recursively, without duplicates). Throw `Error('Unknown role: <role>')` for unknown roles, and `Error('Circular role inheritance')` if a role inherits from itself, directly or indirectly.
- `can(user, permission)`, where `user` has `roles: string[]`. It's true if any role grants the permission. A granted `resource:*` matches any action on that resource, and `*` matches everything.
