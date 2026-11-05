---
slug: "node-search-params-58"
title: "Node Drill: URLSearchParams #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"channel=chat&q=caf%C3%A9&channel=phone\");\n```\n\nWhat is `params.get('q')`?","options":["`\"phone\"`","`[\"chat\"]`","`null`","`\"café\"`"],"answer":3,"explanation":"It's `\"café\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"difficulty=medium&q=x%2By&difficulty=medium\");\n```\n\nWhat is `params.has(\"difficulty\")`?","options":["`\"medium\"`","`null`","`true`","`[\"medium\"]`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=web&q=caf%C3%A9&course=web\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`[\"web\"]`","`\"web\"`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=thriller&q=hello%20world&genre=thriller\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`\"thriller\"`","`null`","`[\"thriller\"]`"],"answer":2,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"team=platform&q=hello%20world&team=product\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"platform\"]`","`3`","`null`","`\"product\"`"],"answer":1,"explanation":"It's `3`."}]
---
# Node Drill: URLSearchParams #58

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
