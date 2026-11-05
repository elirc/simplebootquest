---
slug: "node-search-params-62"
title: "Node Drill: URLSearchParams #62"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"genre=thriller&q=x%2By&genre=comedy\");\n```\n\nWhat is `params.has(\"genre\")`?","options":["`[\"thriller\"]`","`\"comedy\"`","`true`","`null`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=fun&q=a%26b&category=fun\");\n```\n\nWhat is `params.get('q')`?","options":["`[\"fun\"]`","`\"a&b\"`","`\"fun\"`","`null`"],"answer":1,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=beginner&q=x%2By&level=beginner\");\n```\n\nWhat is `params.toString()`?","options":["`\"level=beginner&q=x%2By&level=beginner\"`","`null`","`[\"beginner\"]`","`\"beginner\"`"],"answer":0,"explanation":"It's `\"level=beginner&q=x%2By&level=beginner\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=home&q=hello%20world&category=tech\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"home\"]`","`\"tech\"`","`3`","`null`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=rent&q=hello%20world&category=salary\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`null`","`\"salary\"`","`[\"rent\"]`"],"answer":1,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #62

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
