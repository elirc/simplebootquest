---
slug: "node-search-params-81"
title: "Node Drill: URLSearchParams #81"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"airline=star&q=a%26b&airline=star\");\n```\n\nWhat is `params.has(\"airline\")`?","options":["`\"star\"`","`null`","`true`","`[\"star\"]`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=web&q=caf%C3%A9&course=design\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"design\"`","`null`","`[\"web\"]`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=DE&q=a%26b&country=US\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"US\"`","`null`","`[\"DE\"]`","`undefined`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=strength&q=hello%20world&kind=cardio\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"cardio\"`","`null`","`3`","`[\"strength\"]`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=phone&q=caf%C3%A9&channel=phone\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`\"phone\"`","`null`","`[\"phone\"]`"],"answer":2,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #81

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
