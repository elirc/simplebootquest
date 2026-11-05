---
slug: "node-search-params-82"
title: "Node Drill: URLSearchParams #82"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"kind=cardio&q=caf%C3%A9&kind=mobility\");\n```\n\nWhat is `params.get(\"kind\")`?","options":["`\"cardio\"`","`null`","`\"mobility\"`","`[\"cardio\"]`"],"answer":0,"explanation":"It's `\"cardio\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=a%26b&level=advanced\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"intermediate\"]`","`null`","`\"advanced\"`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=strength&q=caf%C3%A9&kind=mobility\");\n```\n\nWhat is `params.has(\"kind\")`?","options":["`[\"strength\"]`","`true`","`null`","`\"mobility\"`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"team=data&q=hello%20world&team=product\");\n```\n\nWhat is `params.has(\"team\")`?","options":["`null`","`[\"data\"]`","`\"product\"`","`true`"],"answer":3,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=cardio&q=x%2By&kind=strength\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`\"strength\"`","`3`","`[\"cardio\"]`"],"answer":2,"explanation":"It's `3`."}]
---
# Node Drill: URLSearchParams #82

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
