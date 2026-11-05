---
slug: "testing-table-driven"
title: "Table-Driven Tests"
type: "code"
language: "js"
xp: 15
hints: ["Inside `each`, loop over the cases and call the global `test(name, fn)` for each one.", "Replace placeholders one at a time with a regex callback, consuming arguments in order."]
resources: [{"title": "Vitest: test.each", "url": "https://vitest.dev/api/#test-each"}]
---
# Table-Driven Tests

When many tests share the same shape, list the cases as **data**:

```js
test.each([
  ['1.2.3', '1.2.4', -1],
  ['2.0.0', '1.9.9', 1],
  ['1.0.0', '1.0.0', 0],
])('compare(%s, %s) = %i', (a, b, expected) => {
  expect(compareVersions(a, b)).toBe(expected);
});
```

Adding a case becomes a one-line change, and the test names document the behaviour.

## Your task

1. Implement `each(cases, register = test)` returning `(nameTemplate, fn) => void`. It registers one test per case by calling `register(name, () => ...)`:
   - Each case is an array of arguments, passed to `fn(...args)`.
   - The name replaces placeholders in order: `%s` (string), `%i` (integer via `Math.trunc`), `%j` (JSON) and `%#` (the case index).
   - Objects can be used instead of arrays. Then `fn` receives the object, and `$name` placeholders read its properties.
2. Export `slugifyCases`: an array of at least 4 `[input, expected]` pairs for the provided `slugify`, covering the cases listed in the starter.
3. Use `each(slugifyCases)` to register real tests for `slugify`.

`register` defaults to the real `test`, but the checker passes its own function to capture what you register. Injecting dependencies makes even a test helper testable!
