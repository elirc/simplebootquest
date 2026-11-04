---
slug: "ts-route-builder"
title: "Type-Safe Route Paths"
type: "code"
language: "ts"
xp: 20
hints: ["`replace` with a regex and a function can look up each `:name`.", "`encodeURIComponent` makes values URL-safe."]
resources: [{"title": "TS Handbook: Template literal types", "url": "https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html"}]
---
# Type-Safe Route Paths

Building URLs by string concatenation (`'/users/' + id + '/posts'`) causes broken links. A route builder fills in `:params` and complains about missing ones:

```ts
buildPath('/users/:userId/posts/:postId', { userId: 7, postId: 3 });
// '/users/7/posts/3'
```

TypeScript's **template literal types** can even extract the parameter names from the string at compile time:

```ts
type Params<P> = P extends `${string}:${infer Name}/${infer Rest}`
  ? Name | Params<`/${Rest}`>
  : P extends `${string}:${infer Name}` ? Name : never;

type X = Params<'/users/:userId/posts/:postId'>;  // 'userId' | 'postId'
```

That's advanced, and optional here. The runtime behaviour is what's tested.

## Your task

1. `buildPath(pattern, params)` replaces each `:name` with the URI-encoded param value. Throw `Error("Missing param: <name>")` if one is missing.
2. `paramNames(pattern)` returns the parameter names in order.
3. `withQuery(path, query)` appends a query string (skipping `undefined`), sorted by key so URLs are stable for caching.
