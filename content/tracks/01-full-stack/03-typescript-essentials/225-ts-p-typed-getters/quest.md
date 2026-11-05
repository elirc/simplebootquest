---
slug: "ts-p-typed-getters"
title: "Practice: Template Literal Keys"
type: "code"
language: "ts"
xp: 15
hints: ["Return a closure per key that reads `obj[key]` when called."]
resources: [{"title": "TS Handbook: Key remapping", "url": "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as"}]
---
# Practice: Template Literal Keys

Template literal types can build new property names:

```ts
type Getters<T> = { [K in keyof T & string as `get${Capitalize<K>}`]: () => T[K] };
// Getters<{ name: string }> = { getName: () => string }
```

## Your task
`makeGetters(obj)` returns an object with a `get<Key>()` method for each key of `obj` (with the first letter capitalised), returning the **current** value of the original object. Also write the `Getters<T>` type!
