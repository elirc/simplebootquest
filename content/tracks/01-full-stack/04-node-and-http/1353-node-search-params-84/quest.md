---
slug: "node-search-params-84"
title: "Node Drill: URLSearchParams #84"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"kind=strength&q=hello%20world&kind=strength\");\n```\n\nWhat is `params.toString()`?","options":["`\"kind=strength&q=hello+world&kind=strength\"`","`null`","`[\"strength\"]`","`\"strength\"`"],"answer":0,"explanation":"It's `\"kind=strength&q=hello+world&kind=strength\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=x%2By&genre=sci-fi\");\n```\n\nWhat is `params.get(\"genre\")`?","options":["`[\"sci-fi\"]`","`\"sci-fi\"`","`null`","`undefined`"],"answer":1,"explanation":"It's `\"sci-fi\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=advanced&q=a%26b&level=beginner\");\n```\n\nWhat is `params.has(\"level\")`?","options":["`\"beginner\"`","`true`","`null`","`[\"advanced\"]`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=shipped&q=caf%C3%A9&status=shipped\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"shipped\"`","`null`","`[\"shipped\"]`","`undefined`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=office&q=hello%20world&category=home\");\n```\n\nWhat is `params.getAll(\"category\")`?","options":["`null`","`[\"office\"]`","`\"home\"`","`[\"office\",\"home\"]`"],"answer":3,"explanation":"It's `[\"office\",\"home\"]`."}]
---
# Node Drill: URLSearchParams #84

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
