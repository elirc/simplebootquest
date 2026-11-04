---
slug: "ts-keyof-typeof"
title: "keyof, typeof & Indexed Access"
type: "code"
language: "ts"
xp: 20
hints: ["`T[K][]` is \"an array of whatever type the property K has\".", "For `omit`, copy first, then `delete` keys from the copy."]
resources: [{"title": "TS Handbook: keyof", "url": "https://www.typescriptlang.org/docs/handbook/2/keyof-types.html"}]
---
# keyof, typeof & Indexed Access

Types can be **derived** from other types and values, so you don't repeat yourself:

```ts
interface User { id: number; name: string; email: string }

type UserKey = keyof User;             // 'id' | 'name' | 'email'
type Email = User['email'];            // string (indexed access)

const defaults = { theme: 'light', pageSize: 20 };
type Settings = typeof defaults;       // { theme: string; pageSize: number }
```

Combining `keyof` with generics gives you type-safe property access:

```ts
function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}
pluck(users, 'email');   // string[]
pluck(users, 'phone');   // ❌ compile error
```

## Your task

1. `pluck(items, key)` as above.
2. `sortBy<T>(items: T[], key: keyof T, dir: 'asc' | 'desc' = 'asc')` returns a new sorted array (compare with `<` and `>`).
3. `pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>`.
4. `omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>`.
