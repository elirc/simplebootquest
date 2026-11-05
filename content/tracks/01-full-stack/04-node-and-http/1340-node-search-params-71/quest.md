---
slug: "node-search-params-71"
title: "Node Drill: URLSearchParams #71"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"category=travel&q=hello%20world&category=salary\");\n```\n\nWhat is `params.has(\"category\")`?","options":["`\"salary\"`","`[\"travel\"]`","`null`","`true`"],"answer":3,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Toronto&q=x%2By&city=Toronto\");\n```\n\nWhat is `params.toString()`?","options":["`\"Toronto\"`","`\"city=Toronto&q=x%2By&city=Toronto\"`","`[\"Toronto\"]`","`null`"],"answer":1,"explanation":"It's `\"city=Toronto&q=x%2By&city=Toronto\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=data&q=x%2By&course=data\");\n```\n\nWhat is `params.getAll(\"course\")`?","options":["`null`","`[\"data\"]`","`[\"data\",\"data\"]`","`\"data\"`"],"answer":2,"explanation":"It's `[\"data\",\"data\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"mood=calm&q=hello%20world&mood=calm\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`[\"calm\"]`","`\"calm\"`","`null`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"priority=normal&q=a%26b&priority=normal\");\n```\n\nWhat is `params.get('q')`?","options":["`\"normal\"`","`[\"normal\"]`","`\"a&b\"`","`null`"],"answer":2,"explanation":"It's `\"a&b\"`."}]
---
# Node Drill: URLSearchParams #71

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
