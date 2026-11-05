---
slug: "node-search-params-85"
title: "Node Drill: URLSearchParams #85"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"category=food&q=x%2By&category=travel\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"food\"]`","`\"travel\"`","`3`","`null`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=thriller&q=a%26b&genre=thriller\");\n```\n\nWhat is `params.has(\"genre\")`?","options":["`true`","`[\"thriller\"]`","`\"thriller\"`","`null`"],"answer":0,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=data&q=caf%C3%A9&course=data\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`null`","`\"data\"`","`[\"data\"]`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Lisbon&q=x%2By&city=Lisbon\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`[\"Lisbon\"]`","`\"city=Lisbon&q=x%2By&city=Lisbon\"`","`\"Lisbon\"`"],"answer":2,"explanation":"It's `\"city=Lisbon&q=x%2By&city=Lisbon\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=tech&q=x%2By&genre=tech\");\n```\n\nWhat is `params.get('q')`?","options":["`\"x+y\"`","`[\"tech\"]`","`null`","`\"tech\"`"],"answer":0,"explanation":"It's `\"x+y\"`."}]
---
# Node Drill: URLSearchParams #85

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
