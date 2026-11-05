---
slug: "node-search-params-16"
title: "Node Drill: URLSearchParams #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"course=data&q=caf%C3%A9&course=design\");\n```\n\nWhat is `params.getAll(\"course\")`?","options":["`null`","`\"design\"`","`[\"data\"]`","`[\"data\",\"design\"]`"],"answer":3,"explanation":"It's `[\"data\",\"design\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=rent&q=a%26b&category=food\");\n```\n\nWhat is `params.toString()`?","options":["`[\"rent\"]`","`null`","`\"category=rent&q=a%26b&category=food\"`","`\"food\"`"],"answer":2,"explanation":"It's `\"category=rent&q=a%26b&category=food\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"mood=dark&q=hello%20world&mood=happy\");\n```\n\nWhat is `params.toString()`?","options":["`\"mood=dark&q=hello+world&mood=happy\"`","`\"happy\"`","`null`","`[\"dark\"]`"],"answer":0,"explanation":"It's `\"mood=dark&q=hello+world&mood=happy\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=online&q=x%2By&format=in-person\");\n```\n\nWhat is `params.getAll(\"format\")`?","options":["`[\"online\",\"in-person\"]`","`\"in-person\"`","`[\"online\"]`","`null`"],"answer":0,"explanation":"It's `[\"online\",\"in-person\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=cardio&q=caf%C3%A9&kind=strength\");\n```\n\nWhat is `params.has(\"kind\")`?","options":["`null`","`true`","`[\"cardio\"]`","`\"strength\"`"],"answer":1,"explanation":"It's `true`."}]
---
# Node Drill: URLSearchParams #16

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
