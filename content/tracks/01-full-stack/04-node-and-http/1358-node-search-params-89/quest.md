---
slug: "node-search-params-89"
title: "Node Drill: URLSearchParams #89"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"genre=fiction&q=hello%20world&genre=tech\");\n```\n\nWhat is `params.getAll(\"genre\")`?","options":["`null`","`\"tech\"`","`[\"fiction\"]`","`[\"fiction\",\"tech\"]`"],"answer":3,"explanation":"It's `[\"fiction\",\"tech\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=medium&q=hello%20world&light=medium\");\n```\n\nWhat is `params.toString()`?","options":["`\"medium\"`","`null`","`[\"medium\"]`","`\"light=medium&q=hello+world&light=medium\"`"],"answer":3,"explanation":"It's `\"light=medium&q=hello+world&light=medium\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=Python&q=hello%20world&language=Go\");\n```\n\nWhat is `params.get('q')`?","options":["`\"Go\"`","`\"hello world\"`","`[\"Python\"]`","`null`"],"answer":1,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Asia&q=hello%20world&continent=Americas\");\n```\n\nWhat is `params.has(\"continent\")`?","options":["`[\"Asia\"]`","`true`","`null`","`\"Americas\"`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Africa&q=hello%20world&continent=Africa\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"Africa\"]`","`3`","`null`","`\"Africa\"`"],"answer":1,"explanation":"It's `3`."}]
---
# Node Drill: URLSearchParams #89

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
