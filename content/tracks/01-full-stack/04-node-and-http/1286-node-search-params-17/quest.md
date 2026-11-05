---
slug: "node-search-params-17"
title: "Node Drill: URLSearchParams #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"category=salary&q=x%2By&category=salary\");\n```\n\nWhat is `params.getAll(\"category\")`?","options":["`null`","`\"salary\"`","`[\"salary\"]`","`[\"salary\",\"salary\"]`"],"answer":3,"explanation":"It's `[\"salary\",\"salary\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Nova&q=caf%C3%A9&artist=Kairo\");\n```\n\nWhat is `params.has(\"artist\")`?","options":["`\"Kairo\"`","`[\"Nova\"]`","`true`","`null`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=fun&q=hello%20world&category=fun\");\n```\n\nWhat is `params.get(\"category\")`?","options":["`[\"fun\"]`","`\"fun\"`","`null`","`undefined`"],"answer":1,"explanation":"It's `\"fun\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=doing&q=hello%20world&status=todo\");\n```\n\nWhat is `params.getAll(\"status\")`?","options":["`null`","`\"todo\"`","`[\"doing\"]`","`[\"doing\",\"todo\"]`"],"answer":3,"explanation":"It's `[\"doing\",\"todo\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=medium&q=a%26b&light=low\");\n```\n\nWhat is `params.get('missing')`?","options":["`[\"medium\"]`","`null`","`\"low\"`","`undefined`"],"answer":1,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #17

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
