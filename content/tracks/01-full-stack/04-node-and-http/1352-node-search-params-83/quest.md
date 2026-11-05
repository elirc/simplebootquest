---
slug: "node-search-params-83"
title: "Node Drill: URLSearchParams #83"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"light=bright&q=x%2By&light=medium\");\n```\n\nWhat is `params.get('q')`?","options":["`\"medium\"`","`[\"bright\"]`","`\"x+y\"`","`null`"],"answer":2,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=diesel&q=x%2By&fuel=hybrid\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`\"hybrid\"`","`[\"diesel\"]`","`undefined`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=fiction&q=a%26b&genre=tech\");\n```\n\nWhat is `params.getAll(\"genre\")`?","options":["`[\"fiction\",\"tech\"]`","`null`","`\"tech\"`","`[\"fiction\"]`"],"answer":0,"explanation":"It's `[\"fiction\",\"tech\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=medium&q=a%26b&light=low\");\n```\n\nWhat is `params.get('q')`?","options":["`\"a&b\"`","`null`","`[\"medium\"]`","`\"low\"`"],"answer":0,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=The%20Pines&q=caf%C3%A9&artist=Kairo\");\n```\n\nWhat is `params.get('q')`?","options":["`\"café\"`","`null`","`[\"The Pines\"]`","`\"Kairo\"`"],"answer":0,"explanation":"It's `\"café\"`."}]
---
# Node Drill: URLSearchParams #83

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
