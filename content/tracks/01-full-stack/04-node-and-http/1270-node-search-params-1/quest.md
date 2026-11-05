---
slug: "node-search-params-1"
title: "Node Drill: URLSearchParams #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"mood=calm&q=a%26b&mood=calm\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"calm\"`","`[\"calm\"]`","`undefined`","`null`"],"answer":3,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=skyteam&q=x%2By&airline=oneworld\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"oneworld\"`","`null`","`3`","`[\"skyteam\"]`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=strength&q=x%2By&kind=strength\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`\"strength\"`","`3`","`[\"strength\"]`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=mid&q=hello%20world&level=mid\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"mid\"`","`[\"mid\"]`","`3`","`null`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=low&q=x%2By&light=low\");\n```\n\nWhat is `params.get('q')`?","options":["`\"low\"`","`\"x+y\"`","`null`","`[\"low\"]`"],"answer":1,"explanation":"It's `\"x+y\"`."}]
---
# Node Drill: URLSearchParams #1

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
