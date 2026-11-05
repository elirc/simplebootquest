---
slug: "node-search-params-42"
title: "Node Drill: URLSearchParams #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"genre=fiction&q=caf%C3%A9&genre=classic\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`[\"fiction\"]`","`\"genre=fiction&q=caf%C3%A9&genre=classic\"`","`\"classic\"`"],"answer":2,"explanation":"It's `\"genre=fiction&q=caf%C3%A9&genre=classic\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=oneworld&q=x%2By&airline=skyteam\");\n```\n\nWhat is `params.get(\"airline\")`?","options":["`null`","`\"oneworld\"`","`[\"oneworld\"]`","`\"skyteam\"`"],"answer":1,"explanation":"It's `\"oneworld\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=fiction&q=x%2By&genre=tech\");\n```\n\nWhat is `params.getAll(\"genre\")`?","options":["`[\"fiction\"]`","`null`","`[\"fiction\",\"tech\"]`","`\"tech\"`"],"answer":2,"explanation":"It's `[\"fiction\",\"tech\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"priority=urgent&q=a%26b&priority=low\");\n```\n\nWhat is `params.get('q')`?","options":["`\"a&b\"`","`[\"urgent\"]`","`\"low\"`","`null`"],"answer":0,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=web&q=a%26b&course=design\");\n```\n\nWhat is `params.has(\"course\")`?","options":["`\"design\"`","`[\"web\"]`","`null`","`true`"],"answer":3,"explanation":"It's `true`."}]
---
# Node Drill: URLSearchParams #42

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
