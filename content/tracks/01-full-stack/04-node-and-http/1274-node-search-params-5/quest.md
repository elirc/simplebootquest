---
slug: "node-search-params-5"
title: "Node Drill: URLSearchParams #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"team=platform&q=caf%C3%A9&team=platform\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`\"platform\"`","`[\"platform\"]`","`null`"],"answer":3,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"mood=dark&q=hello%20world&mood=calm\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"calm\"`","`null`","`[\"dark\"]`","`undefined`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=todo&q=hello%20world&status=todo\");\n```\n\nWhat is `params.has(\"status\")`?","options":["`true`","`[\"todo\"]`","`\"todo\"`","`null`"],"answer":0,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=DE&q=hello%20world&country=UK\");\n```\n\nWhat is `params.get('q')`?","options":["`\"UK\"`","`null`","`[\"DE\"]`","`\"hello world\"`"],"answer":3,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Americas&q=hello%20world&continent=Americas\");\n```\n\nWhat is `params.get(\"continent\")`?","options":["`[\"Americas\"]`","`undefined`","`null`","`\"Americas\"`"],"answer":3,"explanation":"It's `\"Americas\"`."}]
---
# Node Drill: URLSearchParams #5

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
