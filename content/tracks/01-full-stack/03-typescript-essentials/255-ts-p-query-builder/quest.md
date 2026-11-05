---
slug: "ts-p-query-builder"
title: "Practice: A Typed, Chainable Query Builder"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice"
hints: ["Push each value into an array and use its new length as the placeholder number.", "Values are never placed in the SQL text; identifiers are allow-listed by regex."]
---
# Practice: A Typed, Chainable Query Builder

Fluent builders (`.where().orderBy().limit()`) are everywhere: Knex, Drizzle, Prisma's API. Each method returns `this`, so calls chain.

## Your task
`class QueryBuilder` for a table:

- `new QueryBuilder('users')`
- `.where(column, op, value)` with `op` one of `'=' | '!=' | '>' | '<' | '>=' | '<=' | 'like'`. Multiple wheres are joined with `AND`.
- `.orderBy(column, dir = 'asc')`
- `.limit(n)`
- `.toSQL()` returns `{ text, values }` with **numbered parameters** (`$1, $2`), never interpolating values into the SQL string. That's how you prevent SQL injection.

Column names must match `/^[a-z_][a-z0-9_]*$/`, otherwise throw an `Error('Invalid column: <name>')`.
