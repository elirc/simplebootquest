---
slug: "ts-p-assertion-functions"
title: "Practice: Assertion Functions"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice"
hints: ["The return type is written `asserts value is NonNullable<T>`."]
---
# Practice: Assertion Functions

An **assertion function** narrows a type by throwing if a condition fails:

```ts
function assertDefined<T>(value: T, message: string): asserts value is NonNullable<T> {
  if (value === null || value === undefined) throw new Error(message);
}

const user = users.find(...);     // User | undefined
assertDefined(user, 'User not found');
user.name;                         // ✅ narrowed to User
```

## Your task
1. `assertDefined(value, message)` as above.
2. `assert(condition, message)`: `asserts condition`.
3. `getRequiredEnv(env, name)` returns `env[name]`, using `assertDefined` to throw `"Missing environment variable: <name>"` when it's missing or empty.
