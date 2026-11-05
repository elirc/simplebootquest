---
slug: "node-search-params-54"
title: "Node Drill: URLSearchParams #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"category=tech&q=x%2By&category=office\");\n```\n\nWhat is `params.get('q')`?","options":["`\"office\"`","`[\"tech\"]`","`\"x+y\"`","`null`"],"answer":2,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=online&q=caf%C3%A9&format=online\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"online\"`","`3`","`[\"online\"]`","`null`"],"answer":1,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=in-person&q=a%26b&format=online\");\n```\n\nWhat is `params.get(\"format\")`?","options":["`null`","`[\"in-person\"]`","`\"online\"`","`\"in-person\"`"],"answer":3,"explanation":"It's `\"in-person\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=done&q=hello%20world&status=doing\");\n```\n\nWhat is `params.toString()`?","options":["`[\"done\"]`","`\"status=done&q=hello+world&status=doing\"`","`\"doing\"`","`null`"],"answer":1,"explanation":"It's `\"status=done&q=hello+world&status=doing\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=design&q=hello%20world&course=data\");\n```\n\nWhat is `params.get(\"course\")`?","options":["`\"design\"`","`[\"design\"]`","`null`","`\"data\"`"],"answer":0,"explanation":"It's `\"design\"`."}]
---
# Node Drill: URLSearchParams #54

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
