---
slug: "express-escape-html"
title: "Escaping Output"
type: "code"
language: "js"
xp: 15
hints: ["Escape `&` first, or you will double-escape the other entities.", "Have `html` return a `raw(...)` value, so nested templates are not escaped twice."]
resources: [{"title": "OWASP XSS prevention cheat sheet", "url": "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"}]
---
# Escaping Output

If your server builds HTML from user input, a comment like `<script>stealCookies()</script>` becomes **running code** in other users' browsers. That's XSS. The fix is to **escape** the five special characters before inserting text into HTML:

| Character | Entity |
|-----------|--------|
| `&` | `&amp;` (always escape this one first!) |
| `<` | `&lt;` |
| `>` | `&gt;` |
| `"` | `&quot;` |
| `'` | `&#39;` |

React escapes text automatically, but server-rendered templates, emails and error pages built by hand don't. **Escape at output time**, matched to the context: HTML text, attributes, URLs and JavaScript each have their own rules.

## Your task

1. `escapeHtml(text)` escapes the five characters.
2. `` html`...` `` is a **tagged template** that escapes every interpolated value, except values wrapped with `raw(...)`. Arrays are escaped item by item and joined without a separator. `null`, `undefined` and `false` render as an empty string.
3. `raw(str)` marks a string as trusted.
