---
slug: "node-search-params-65"
title: "Node Drill: URLSearchParams #65"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"format=online&q=a%26b&format=hybrid\");\n```\n\nWhat is `params.get(\"format\")`?","options":["`null`","`\"online\"`","`[\"online\"]`","`\"hybrid\"`"],"answer":1,"explanation":"It's `\"online\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=petrol&q=x%2By&fuel=petrol\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`[\"petrol\"]`","`null`","`\"petrol\"`"],"answer":2,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"mood=dark&q=x%2By&mood=calm\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`\"mood=dark&q=x%2By&mood=calm\"`","`[\"dark\"]`","`\"calm\"`"],"answer":1,"explanation":"It's `\"mood=dark&q=x%2By&mood=calm\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=home&q=a%26b&category=tech\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"home\"]`","`null`","`3`","`\"tech\"`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=email&q=hello%20world&channel=chat\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`[\"email\"]`","`\"hello world\"`","`\"chat\"`"],"answer":2,"explanation":"It's `\"hello world\"`."}]
---
# Node Drill: URLSearchParams #65

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
