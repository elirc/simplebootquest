---
slug: "node-search-params-41"
title: "Node Drill: URLSearchParams #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"category=home&q=hello%20world&category=tech\");\n```\n\nWhat is `params.toString()`?","options":["`\"tech\"`","`null`","`\"category=home&q=hello+world&category=tech\"`","`[\"home\"]`"],"answer":2,"explanation":"It's `\"category=home&q=hello+world&category=tech\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=medium&q=caf%C3%A9&light=bright\");\n```\n\nWhat is `params.toString()`?","options":["`\"bright\"`","`[\"medium\"]`","`\"light=medium&q=caf%C3%A9&light=bright\"`","`null`"],"answer":2,"explanation":"It's `\"light=medium&q=caf%C3%A9&light=bright\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=strength&q=caf%C3%A9&kind=strength\");\n```\n\nWhat is `params.get('q')`?","options":["`[\"strength\"]`","`\"strength\"`","`\"café\"`","`null`"],"answer":2,"explanation":"It's `\"café\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=cancelled&q=a%26b&status=shipped\");\n```\n\nWhat is `params.getAll(\"status\")`?","options":["`[\"cancelled\"]`","`\"shipped\"`","`[\"cancelled\",\"shipped\"]`","`null`"],"answer":2,"explanation":"It's `[\"cancelled\",\"shipped\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=a%26b&genre=classic\");\n```\n\nWhat is `params.has(\"genre\")`?","options":["`true`","`\"classic\"`","`null`","`[\"sci-fi\"]`"],"answer":0,"explanation":"It's `true`."}]
---
# Node Drill: URLSearchParams #41

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
