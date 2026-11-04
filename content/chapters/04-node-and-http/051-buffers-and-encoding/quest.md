---
slug: "node-encoding"
title: "Encoding: UTF-8 & Base64"
type: "code"
language: "js"
xp: 20
hints: ["Encode the string to bytes with `TextEncoder`, turn each byte into a char, then `btoa`.", "Split user and password on the **first** colon only."]
resources: [{"title": "MDN: Base64", "url": "https://developer.mozilla.org/en-US/docs/Glossary/Base64"}]
---
# Encoding: UTF-8 & Base64

Text and bytes are different things. A string is characters, and the network and disk carry **bytes**. UTF-8 is how characters become bytes (1 to 4 bytes per character):

```js
new TextEncoder().encode('é');   // Uint8Array [195, 169]: 2 bytes for 1 character
new TextDecoder().decode(bytes); // back to a string
```

**Base64** represents arbitrary bytes using only safe ASCII characters, for things like email attachments, data URLs (`data:image/png;base64,...`) and Basic auth headers. In Node you'd use `Buffer.from(str).toString('base64')`. In browsers, `btoa`/`atob` only handle Latin-1, so non-ASCII text needs the bytes first.

⚠️ Base64 is **encoding, not encryption**. Anyone can decode it.

## Your task

1. `byteLength(str)` returns the UTF-8 byte length.
2. `toBase64(str)` base64-encodes a **UTF-8** string (it must work for `"héllo 👋"`).
3. `fromBase64(b64)` reverses it.
4. `basicAuthHeader(user, pass)` returns `"Basic <base64 of user:pass>"`.
5. `parseBasicAuth(header)` returns `{ user, pass }`, or `null` if the header isn't valid Basic auth. The password may contain `:`.
