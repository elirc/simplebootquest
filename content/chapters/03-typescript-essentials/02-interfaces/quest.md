---
slug: ts-interfaces
title: Interfaces & Type Aliases
type: code
language: ts
xp: 15
---
# Interfaces & Type Aliases

Describe the **shape** of objects with an `interface` or a `type` alias:

```ts
interface Book {
  id: number;
  title: string;
  author: string;
  dueDate?: string;          // optional
  readonly isbn: string;     // can't be reassigned
}

type BookId = number;        // alias for a primitive
type Point = { x: number; y: number };
```

`interface` and `type` are nearly interchangeable for objects. A common convention: use `interface` for object shapes and `type` for unions and aliases.

### Extending

```ts
interface Entity { id: number; createdAt: string }
interface User extends Entity { email: string }
```

### Structural typing

TypeScript checks **shape, not names**. Any object with the right properties fits an interface. You don't have to `implements` anything. This is called *structural* (or "duck") typing.

## Your task

Given the `Book` interface in the starter:

1. `isOverdue(book, today)` returns `true` if the book has a `dueDate` (ISO `"YYYY-MM-DD"`) **before** `today`. Books without a due date are never overdue.
2. `checkout(book, today, days)` returns a **new** book with `dueDate` set `days` after `today`, also as `"YYYY-MM-DD"`.
3. `overdueTitles(books, today)` returns the titles of overdue books, sorted alphabetically.

Hint: ISO date strings compare correctly with `<`, and `new Date('2026-01-31T00:00:00Z')` with `setUTCDate` avoids time-zone surprises.
