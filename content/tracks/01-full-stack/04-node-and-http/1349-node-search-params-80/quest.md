---
slug: "node-search-params-80"
title: "Node Drill: URLSearchParams #80"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"category=food&q=caf%C3%A9&category=rent\");\n```\n\nWhat is `params.has(\"category\")`?","options":["`true`","`\"rent\"`","`null`","`[\"food\"]`"],"answer":0,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=grace&q=hello%20world&assignee=ada\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`\"ada\"`","`\"hello world\"`","`[\"grace\"]`"],"answer":2,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=online&q=caf%C3%A9&format=in-person\");\n```\n\nWhat is `params.get(\"format\")`?","options":["`[\"online\"]`","`\"online\"`","`null`","`\"in-person\"`"],"answer":1,"explanation":"It's `\"online\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=tech&q=a%26b&genre=classic\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"classic\"`","`3`","`null`","`[\"tech\"]`"],"answer":1,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"cuisine=middle-eastern&q=hello%20world&cuisine=asian\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`null`","`\"asian\"`","`[\"middle-eastern\"]`"],"answer":1,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #80

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
