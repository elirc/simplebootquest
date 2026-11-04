---
slug: "js-json"
title: "JSON"
type: "code"
language: "js"
xp: 15
hints: ["The third argument to `JSON.stringify` is the indentation.", "Passing an array as the second argument of `JSON.stringify` keeps only those keys."]
resources: [{"title": "MDN: JSON", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"}, {"title": "MDN: structuredClone", "url": "https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone"}]
---
# JSON

**JSON** (JavaScript Object Notation) is the language of web APIs. It's a *text format*, so data sent over HTTP or stored in `localStorage` has to be converted to and from it.

```js
JSON.stringify({ id: 1, tags: ['a'] });   // '{"id":1,"tags":["a"]}'
JSON.stringify(data, null, 2);             // pretty-printed with 2-space indent
JSON.parse('{"id":1}');                    // { id: 1 }
JSON.parse('{bad}');                       // throws SyntaxError
```

What JSON **can't** represent: `undefined` (properties are dropped), functions (dropped), `Date` objects (become ISO strings), `Map`/`Set` (become `{}`), and `NaN` (becomes `null`).

`JSON.parse(JSON.stringify(x))` is an old trick for deep-copying plain data. The modern way is `structuredClone(x)`, which also handles Dates, Maps and Sets.

## Your task

1. `toJson(obj)` pretty-prints with 2-space indentation.
2. `parseOr(text, fallback)` parses JSON, returning `fallback` if it's invalid.
3. `roundTrip(obj)` returns what you get after `stringify` then `parse`. Then look at the tests to see what changed!
4. `serializeUser(user)` returns a JSON string containing **only** `id`, `name` and `createdAt` (as an ISO string), using the `replacer` array argument of `JSON.stringify`.
