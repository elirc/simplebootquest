---
slug: "node-search-params-30"
title: "Node Drill: URLSearchParams #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Europe&q=caf%C3%A9&continent=Europe\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"Europe\"`","`[\"Europe\"]`","`null`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=tech&q=a%26b&genre=classic\");\n```\n\nWhat is `params.get(\"genre\")`?","options":["`null`","`[\"tech\"]`","`\"tech\"`","`\"classic\"`"],"answer":2,"explanation":"It's `\"tech\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=cardio&q=x%2By&kind=mobility\");\n```\n\nWhat is `params.has(\"kind\")`?","options":["`[\"cardio\"]`","`\"mobility\"`","`true`","`null`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=UK&q=a%26b&country=DE\");\n```\n\nWhat is `params.getAll(\"country\")`?","options":["`[\"UK\"]`","`null`","`\"DE\"`","`[\"UK\",\"DE\"]`"],"answer":3,"explanation":"It's `[\"UK\",\"DE\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=email&q=a%26b&channel=phone\");\n```\n\nWhat is `params.get('q')`?","options":["`\"phone\"`","`[\"email\"]`","`\"a&b\"`","`null`"],"answer":2,"explanation":"It's `\"a&b\"`."}]
---
# Node Drill: URLSearchParams #30

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
