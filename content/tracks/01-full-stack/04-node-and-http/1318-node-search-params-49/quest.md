---
slug: "node-search-params-49"
title: "Node Drill: URLSearchParams #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"genre=tech&q=caf%C3%A9&genre=tech\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`[\"tech\"]`","`null`","`\"tech\"`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=a%26b&city=Toronto\");\n```\n\nWhat is `params.has(\"city\")`?","options":["`true`","`\"Toronto\"`","`[\"Kyoto\"]`","`null`"],"answer":0,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=todo&q=x%2By&status=done\");\n```\n\nWhat is `params.get(\"status\")`?","options":["`\"done\"`","`null`","`\"todo\"`","`[\"todo\"]`"],"answer":2,"explanation":"It's `\"todo\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=paid&q=a%26b&status=pending\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`\"pending\"`","`[\"paid\"]`","`\"status=paid&q=a%26b&status=pending\"`"],"answer":3,"explanation":"It's `\"status=paid&q=a%26b&status=pending\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=low&q=x%2By&light=medium\");\n```\n\nWhat is `params.get(\"light\")`?","options":["`\"low\"`","`[\"low\"]`","`\"medium\"`","`null`"],"answer":0,"explanation":"It's `\"low\"`."}]
---
# Node Drill: URLSearchParams #49

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
