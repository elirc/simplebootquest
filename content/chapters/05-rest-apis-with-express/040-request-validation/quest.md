---
slug: express-request-validation
title: Request Validation
type: code
language: js
xp: 25
hints: ["Loop over the schema fields, not the data, so unknown fields are stripped automatically.", "Return the first error for each field."]
resources: [{"title": "Zod docs", "url": "https://zod.dev/"}]
---
# Request Validation

**Never trust the client.** Anyone can send any JSON to your API with `curl`, whatever your frontend form allows. Validate every body, param and query string on the server.

In real projects you'll use a schema library such as **Zod**:

```js
const TodoSchema = z.object({
  title: z.string().trim().min(1).max(100),
  priority: z.enum(['low', 'medium', 'high']).default('medium'),
});

const result = TodoSchema.safeParse(req.body);
if (!result.success) return res.status(400).json({ errors: result.error.issues });
```

Building a mini version teaches you what these libraries do: a schema is just **data describing rules**, and a validator walks the data and checks each rule.

## Your task

Implement `validate(schema, data)`. A schema maps field names to rule objects:

```js
const schema = {
  title: { type: 'string', required: true, minLength: 1, maxLength: 100 },
  priority: { type: 'string', enum: ['low', 'medium', 'high'], default: 'medium' },
  estimate: { type: 'number', min: 0 },
};
```

Return `{ ok: true, value }` or `{ ok: false, errors }`, where `errors` maps field names to the first error message for that field:

| Rule | Error message |
|------|---------------|
| `required` and missing (`undefined`) | `"is required"` |
| wrong `type` (`'string'`, `'number'`, `'boolean'`) | `"must be a <type>"` |
| `minLength` / `maxLength` (strings are trimmed first) | `"must be at least N characters"` / `"must be at most N characters"` |
| `min` / `max` (numbers) | `"must be at least N"` / `"must be at most N"` |
| `enum` | `"must be one of: a, b, c"` |

Additional rules:

- Missing optional fields with a `default` get the default. Missing optional fields without one are left out of `value`.
- Strings in `value` are trimmed.
- **Unknown fields are stripped** from `value`. This protects you from "mass assignment", where a user sends `{ "isAdmin": true }`.
