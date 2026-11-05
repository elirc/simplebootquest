---
slug: "node-search-params-18"
title: "Node Drill: URLSearchParams #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"channel=email&q=x%2By&channel=phone\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`[\"email\"]`","`null`","`\"phone\"`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"priority=normal&q=x%2By&priority=low\");\n```\n\nWhat is `params.get(\"priority\")`?","options":["`\"low\"`","`null`","`[\"normal\"]`","`\"normal\"`"],"answer":3,"explanation":"It's `\"normal\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=hybrid&q=x%2By&format=in-person\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`[\"hybrid\"]`","`null`","`\"in-person\"`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=medium&q=a%26b&light=low\");\n```\n\nWhat is `params.has(\"light\")`?","options":["`true`","`null`","`\"low\"`","`[\"medium\"]`"],"answer":0,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=fiction&q=hello%20world&genre=classic\");\n```\n\nWhat is `params.getAll(\"genre\")`?","options":["`[\"fiction\",\"classic\"]`","`[\"fiction\"]`","`null`","`\"classic\"`"],"answer":0,"explanation":"It's `[\"fiction\",\"classic\"]`."}]
---
# Node Drill: URLSearchParams #18

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
