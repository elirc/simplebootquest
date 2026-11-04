---
slug: "js-regex-validation"
title: "Regular Expressions for Validation"
type: "code"
language: "js"
xp: 20
hints: ["Use `^...$` anchors and `.test(s)`.", "`text.matchAll(/#(\\w+)/g)` gives you every match with its capture group."]
resources: [{"title": "regex101", "url": "https://regex101.com/"}, {"title": "javascript.info: Regular expressions", "url": "https://javascript.info/regular-expressions"}]
---
# Regular Expressions for Validation

A **regular expression** describes a pattern in text. They're perfect for validating input shapes:

```js
/^\d{5}$/.test('12345');        // true: exactly 5 digits
/^[a-z0-9-]+$/.test('my-slug');  // true: lowercase letters, digits, dashes
'2026-03-05'.match(/^(\d{4})-(\d{2})-(\d{2})$/);  // captures year, month, day
```

| Pattern | Meaning |
|---------|---------|
| `^` / `$` | start / end of the string (**always anchor validators!**) |
| `\d` `\w` `\s` | digit, word character, whitespace |
| `[abc]` `[^abc]` | one of / none of |
| `+` `*` `?` `{2,4}` | 1+, 0+, optional, between 2 and 4 |
| `( )` | capture group |
| `i` flag | case-insensitive |

Without `^` and `$`, `/\d{5}/` happily matches `"abc12345xyz"`.

## Your task

1. `isHexColor(s)`: `#` followed by exactly 3 or 6 hex digits (case-insensitive). `#fff`, `#A1B2C3` are valid.
2. `isUsername(s)`: 3–16 characters of letters, digits or underscores, and it must start with a letter.
3. `parseDate(s)`: for `"YYYY-MM-DD"` returns `{ year, month, day }` as numbers, otherwise `null`.
4. `extractHashtags(text)`: returns every `#word` (letters, digits, underscore) without the `#`, lowercased.
