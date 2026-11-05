---
slug: "node-search-params-23"
title: "Node Drill: URLSearchParams #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"airline=star&q=x%2By&airline=oneworld\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`null`","`\"oneworld\"`","`[\"star\"]`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Asia&q=a%26b&continent=Africa\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`null`","`\"Africa\"`","`[\"Asia\"]`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=pending&q=a%26b&status=cancelled\");\n```\n\nWhat is `params.get(\"status\")`?","options":["`null`","`\"pending\"`","`\"cancelled\"`","`[\"pending\"]`"],"answer":1,"explanation":"It's `\"pending\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"mood=dark&q=hello%20world&mood=dark\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"dark\"`","`[\"dark\"]`","`null`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=Python&q=x%2By&language=TypeScript\");\n```\n\nWhat is `params.get(\"language\")`?","options":["`\"Python\"`","`null`","`[\"Python\"]`","`\"TypeScript\"`"],"answer":0,"explanation":"It's `\"Python\"`."}]
---
# Node Drill: URLSearchParams #23

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
