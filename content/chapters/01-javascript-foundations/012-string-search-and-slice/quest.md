---
slug: "js-string-slice"
title: "Slicing & Searching Strings"
type: "code"
language: "js"
xp: 10
hints: ["`lastIndexOf` finds the last occurrence; `indexOf` finds the first.", "Remember the `+ 1` to skip past the `@` or `.` itself."]
---
# Slicing & Searching Strings

```js
const email = 'ada@example.com';
email.indexOf('@');        // 3   (-1 if not found)
email.slice(0, 3);         // 'ada'       (start, end-exclusive)
email.slice(4);            // 'example.com'
email.slice(-4);           // '.com'
email.replace('ada', 'grace');   // replaces the FIRST match
'a-b-c'.replaceAll('-', '/');    // 'a/b/c'
'a,b,c'.split(',');              // ['a', 'b', 'c']
['a', 'b'].join(' + ');          // 'a + b'
```

`slice(start, end)` is the workhorse: the `end` index is *not* included, and negative numbers count from the end.

## Your task

1. `emailDomain(email)` returns everything after the `@` (`"example.com"`). Return `null` if there's no `@`.
2. `truncate(text, max)` returns the text unchanged if it's at most `max` characters long. Otherwise it returns the first `max - 1` characters followed by `"…"` (one character), so the result is exactly `max` characters.
3. `fileExtension(filename)` returns the part after the **last** dot, lowercased (`"Photo.JPG"` → `"jpg"`), or `""` if there's no dot.
