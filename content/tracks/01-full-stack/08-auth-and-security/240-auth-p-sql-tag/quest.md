---
slug: "auth-p-sql-tag"
title: "Practice: Parameterised Queries with a Tagged Template"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["`strings` always has one more element than `values`. Start with `strings[0]`, then for each value append its placeholder and `strings[i + 1]`.", "Use a small class for raw fragments, so a plain string can never be mistaken for one."]
resources: [{"title": "MDN: Tagged templates", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates"}]
---
# Practice: Parameterised Queries with a Tagged Template

SQL injection happens when user input becomes part of the SQL **text**:

```js
db.query(`SELECT * FROM users WHERE email = '${email}'`);  // ❌ email = "' OR '1'='1"
```

The fix is **parameters**: the SQL text has placeholders, and the values travel separately. A **tagged template** makes this ergonomic. It's how `postgres.js` and Prisma's `$queryRaw` work:

```js
sql`SELECT * FROM users WHERE email = ${email}`
// → { text: 'SELECT * FROM users WHERE email = $1', values: [email] }
```

A tag function receives the literal string parts and the interpolated values **separately**, so it can't confuse the two.

## Your task
Write the tag `sql(strings, ...values)` returning `{ text, values }`:
- Each interpolation becomes `$1`, `$2`, … in order.
- An **array** value expands to a list of placeholders, for `IN (...)`: `${[1, 2, 3]}` → `$1, $2, $3`. An empty array → throw `Error('Empty list in sql')`.
- A value created with `sql.raw(str)` is inserted as-is (for trusted identifiers you've checked against an allow-list).
