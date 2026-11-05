---
slug: "node-p-parse-cookies"
title: "Practice: Parsing the Cookie Header"
type: "code"
language: "js"
xp: 15
hints: ["`indexOf(\"=\")` then two `slice` calls handles values with `=` in them.", "Wrap `decodeURIComponent` in try/catch: it throws `URIError` on malformed input."]
resources: [{"title": "MDN: Cookie header", "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie"}]
---
# Practice: Parsing the Cookie Header

Browsers send cookies in a single header:

```
Cookie: session=abc123; theme=dark; cart=%7B%22n%22%3A2%7D
```

`cookie-parser` turns it into `req.cookies`. Here you write the core of it.

## Your task
Write `parseCookies(header)`:
- Pairs are separated by `;` with optional whitespace.
- Split each pair on the **first** `=` (values can contain `=`, like base64).
- Trim names and values, and `decodeURIComponent` the value. If decoding throws, keep the raw value.
- Ignore pairs with no `=` or an empty name.
- If a name appears twice, keep the **first** one (that's what browsers send as the most specific cookie).
- `undefined` or an empty header gives `{}`.
