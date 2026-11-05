---
slug: "node-search-params-76"
title: "Node Drill: URLSearchParams #76"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"language=Go&q=caf%C3%A9&language=Go\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`null`","`[\"Go\"]`","`\"Go\"`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=rent&q=hello%20world&category=travel\");\n```\n\nWhat is `params.get(\"category\")`?","options":["`\"travel\"`","`null`","`[\"rent\"]`","`\"rent\"`"],"answer":3,"explanation":"It's `\"rent\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"difficulty=medium&q=hello%20world&difficulty=easy\");\n```\n\nWhat is `params.get(\"difficulty\")`?","options":["`null`","`\"easy\"`","`\"medium\"`","`[\"medium\"]`"],"answer":2,"explanation":"It's `\"medium\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=Python&q=caf%C3%A9&language=Python\");\n```\n\nWhat is `params.getAll(\"language\")`?","options":["`[\"Python\"]`","`null`","`[\"Python\",\"Python\"]`","`\"Python\"`"],"answer":2,"explanation":"It's `[\"Python\",\"Python\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=caf%C3%A9&genre=tech\");\n```\n\nWhat is `params.get(\"genre\")`?","options":["`null`","`\"tech\"`","`[\"sci-fi\"]`","`\"sci-fi\"`"],"answer":3,"explanation":"It's `\"sci-fi\"`."}]
---
# Node Drill: URLSearchParams #76

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
