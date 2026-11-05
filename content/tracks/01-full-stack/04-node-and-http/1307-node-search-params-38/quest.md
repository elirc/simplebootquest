---
slug: "node-search-params-38"
title: "Node Drill: URLSearchParams #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"format=online&q=hello%20world&format=hybrid\");\n```\n\nWhat is `params.getAll(\"format\")`?","options":["`\"hybrid\"`","`null`","`[\"online\",\"hybrid\"]`","`[\"online\"]`"],"answer":2,"explanation":"It's `[\"online\",\"hybrid\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=todo&q=a%26b&status=done\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`null`","`\"done\"`","`[\"todo\"]`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Kairo&q=hello%20world&artist=Kairo\");\n```\n\nWhat is `params.get('q')`?","options":["`\"Kairo\"`","`[\"Kairo\"]`","`\"hello world\"`","`null`"],"answer":2,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=home&q=hello%20world&category=home\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`\"home\"`","`[\"home\"]`","`null`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=web&q=a%26b&course=web\");\n```\n\nWhat is `params.get('missing')`?","options":["`[\"web\"]`","`null`","`undefined`","`\"web\"`"],"answer":1,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #38

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
