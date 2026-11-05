---
slug: "node-search-params-15"
title: "Node Drill: URLSearchParams #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"category=salary&q=hello%20world&category=salary\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"salary\"]`","`\"salary\"`","`null`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Oceania&q=a%26b&continent=Americas\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`[\"Oceania\"]`","`\"Americas\"`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=hybrid&q=a%26b&format=hybrid\");\n```\n\nWhat is `params.getAll(\"format\")`?","options":["`\"hybrid\"`","`null`","`[\"hybrid\"]`","`[\"hybrid\",\"hybrid\"]`"],"answer":3,"explanation":"It's `[\"hybrid\",\"hybrid\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=doing&q=a%26b&status=done\");\n```\n\nWhat is `params.get(\"status\")`?","options":["`null`","`\"doing\"`","`[\"doing\"]`","`\"done\"`"],"answer":1,"explanation":"It's `\"doing\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=Python&q=hello%20world&language=TypeScript\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`\"TypeScript\"`","`undefined`","`[\"Python\"]`"],"answer":0,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #15

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
