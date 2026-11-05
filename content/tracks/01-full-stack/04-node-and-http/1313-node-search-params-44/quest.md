---
slug: "node-search-params-44"
title: "Node Drill: URLSearchParams #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"kind=mobility&q=a%26b&kind=mobility\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"mobility\"]`","`3`","`\"mobility\"`","`null`"],"answer":1,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=paid&q=a%26b&status=shipped\");\n```\n\nWhat is `params.get(\"status\")`?","options":["`[\"paid\"]`","`\"shipped\"`","`\"paid\"`","`null`"],"answer":2,"explanation":"It's `\"paid\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Toronto&q=hello%20world&city=Lisbon\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"Lisbon\"`","`null`","`undefined`","`[\"Toronto\"]`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=beginner&q=hello%20world&level=intermediate\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"beginner\"]`","`\"intermediate\"`","`null`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=caf%C3%A9&genre=tech\");\n```\n\nWhat is `params.toString()`?","options":["`\"tech\"`","`[\"sci-fi\"]`","`null`","`\"genre=sci-fi&q=caf%C3%A9&genre=tech\"`"],"answer":3,"explanation":"It's `\"genre=sci-fi&q=caf%C3%A9&genre=tech\"`."}]
---
# Node Drill: URLSearchParams #44

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
