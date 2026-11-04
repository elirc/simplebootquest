---
slug: "ts-branded-types"
title: "Branded Types"
type: "code"
language: "ts"
xp: 20
hints: ["Brands are just intersections: `string & { readonly __brand: \"Email\" }`.", "Cast with `as Email` only after validating."]
resources: [{"title": "Total TypeScript: branded types", "url": "https://www.totaltypescript.com/four-essential-typescript-patterns"}]
---
# Branded Types

`userId` and `postId` are both `number`, so nothing stops you passing one where the other belongs:

```ts
deletePost(user.id);   // compiles fine, deletes the wrong thing 😱
```

**Branded types** add a fake, compile-time-only tag:

```ts
type UserId = number & { readonly __brand: 'UserId' };
type PostId = number & { readonly __brand: 'PostId' };

function deletePost(id: PostId) { ... }
deletePost(userId);   // ❌ compile error
```

You create branded values through a function that **validates** them, so the type also means "this value has been checked".

```ts
type Email = string & { readonly __brand: 'Email' };
function toEmail(s: string): Email | null { ... }
```

## Your task

1. `toEmail(s)` returns the trimmed, lowercased email as an `Email`, or `null` if it doesn't look like `x@y.z`.
2. `toPositiveInt(n: number)` returns a `PositiveInt`, or **throws** a `RangeError`.
3. `toSlug(s)` returns a `Slug` if `s` is lowercase letters, digits and single dashes (no leading or trailing dash), otherwise `null`.
4. `sendWelcome(to: Email)` returns `"Welcome email sent to <to>"`.

The runtime behaviour is what's tested, but write the brand types too: they're the point!
