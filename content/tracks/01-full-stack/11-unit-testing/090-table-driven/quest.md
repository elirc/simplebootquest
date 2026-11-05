---
slug: "ut-table-driven"
title: "Many Cases, One Test: Table-Driven Tests"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
hints: ["Each rule needs a case that fails ONLY that rule, while passing all the others.", "Exactly 11 and exactly 12 characters are both important cases."]
resources: [{"title": "Vitest: test.each", "url": "https://vitest.dev/api/#test-each"}]
---
# Many Cases, One Test: Table-Driven Tests

When you have many input/output pairs, write them as **data** and loop:

```js
const cases = [
  ['correct horse battery staple', true],
  ['short', false],
];

for (const [password, expected] of cases) {
  test(`isStrongPassword(${JSON.stringify(password)}) is ${expected}`, () => {
    expect(isStrongPassword(password)).toBe(expected);
  });
}
```

Vitest has `test.each(cases)(name, fn)` for the same thing. Each case shows up as its own test, so a failure tells you exactly which input broke.

`isStrongPassword(pw)` returns `true` only if **all** of these hold:

- at least **12** characters,
- at least one **letter**,
- at least one **digit or space** (so passphrases count),
- **not** in the list `['password1234', 'qwertyuiop12', '123456789abc']` (compared case-insensitively).
