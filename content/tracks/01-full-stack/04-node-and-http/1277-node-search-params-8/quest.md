---
slug: "node-search-params-8"
title: "Node Drill: URLSearchParams #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"airline=skyteam&q=caf%C3%A9&airline=star\");\n```\n\nWhat is `params.has(\"airline\")`?","options":["`true`","`[\"skyteam\"]`","`null`","`\"star\"`"],"answer":0,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=tech&q=caf%C3%A9&genre=fiction\");\n```\n\nWhat is `params.get(\"genre\")`?","options":["`null`","`\"fiction\"`","`[\"tech\"]`","`\"tech\"`"],"answer":3,"explanation":"It's `\"tech\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=shipped&q=hello%20world&status=paid\");\n```\n\nWhat is `params.has(\"status\")`?","options":["`null`","`[\"shipped\"]`","`\"paid\"`","`true`"],"answer":3,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=TypeScript&q=x%2By&language=TypeScript\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"TypeScript\"]`","`null`","`\"TypeScript\"`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=star&q=caf%C3%A9&airline=star\");\n```\n\nWhat is `params.get('q')`?","options":["`\"café\"`","`\"star\"`","`null`","`[\"star\"]`"],"answer":0,"explanation":"It's `\"café\"`."}]
---
# Node Drill: URLSearchParams #8

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
