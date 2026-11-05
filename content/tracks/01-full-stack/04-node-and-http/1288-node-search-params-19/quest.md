---
slug: "node-search-params-19"
title: "Node Drill: URLSearchParams #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=diesel&q=hello%20world&fuel=diesel\");\n```\n\nWhat is `params.has(\"fuel\")`?","options":["`null`","`true`","`[\"diesel\"]`","`\"diesel\"`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=food&q=caf%C3%A9&category=rent\");\n```\n\nWhat is `params.toString()`?","options":["`\"category=food&q=caf%C3%A9&category=rent\"`","`[\"food\"]`","`null`","`\"rent\"`"],"answer":0,"explanation":"It's `\"category=food&q=caf%C3%A9&category=rent\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=US&q=caf%C3%A9&country=DE\");\n```\n\nWhat is `params.toString()`?","options":["`\"DE\"`","`\"country=US&q=caf%C3%A9&country=DE\"`","`[\"US\"]`","`null`"],"answer":1,"explanation":"It's `\"country=US&q=caf%C3%A9&country=DE\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=cancelled&q=caf%C3%A9&status=shipped\");\n```\n\nWhat is `params.has(\"status\")`?","options":["`\"shipped\"`","`true`","`[\"cancelled\"]`","`null`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Lisbon&q=a%26b&city=Lisbon\");\n```\n\nWhat is `params.get('missing')`?","options":["`[\"Lisbon\"]`","`undefined`","`null`","`\"Lisbon\"`"],"answer":2,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #19

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
