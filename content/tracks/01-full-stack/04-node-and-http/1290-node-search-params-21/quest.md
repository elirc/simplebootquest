---
slug: "node-search-params-21"
title: "Node Drill: URLSearchParams #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"city=Toronto&q=caf%C3%A9&city=Lisbon\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`[\"Toronto\"]`","`3`","`\"Lisbon\"`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"priority=urgent&q=caf%C3%A9&priority=urgent\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"urgent\"`","`[\"urgent\"]`","`3`","`null`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=strength&q=x%2By&kind=cardio\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"cardio\"`","`null`","`undefined`","`[\"strength\"]`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=a%26b&genre=sci-fi\");\n```\n\nWhat is `params.getAll(\"genre\")`?","options":["`[\"sci-fi\"]`","`null`","`\"sci-fi\"`","`[\"sci-fi\",\"sci-fi\"]`"],"answer":3,"explanation":"It's `[\"sci-fi\",\"sci-fi\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"mood=calm&q=x%2By&mood=happy\");\n```\n\nWhat is `params.has(\"mood\")`?","options":["`[\"calm\"]`","`true`","`null`","`\"happy\"`"],"answer":1,"explanation":"It's `true`."}]
---
# Node Drill: URLSearchParams #21

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
