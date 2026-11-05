---
slug: "node-search-params-29"
title: "Node Drill: URLSearchParams #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"mood=calm&q=a%26b&mood=dark\");\n```\n\nWhat is `params.get(\"mood\")`?","options":["`\"dark\"`","`\"calm\"`","`[\"calm\"]`","`null`"],"answer":1,"explanation":"It's `\"calm\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=a%26b&genre=comedy\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`\"a&b\"`","`[\"sci-fi\"]`","`\"comedy\"`"],"answer":1,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=mid&q=a%26b&level=mid\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"mid\"]`","`3`","`null`","`\"mid\"`"],"answer":1,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=drama&q=x%2By&genre=thriller\");\n```\n\nWhat is `params.get(\"genre\")`?","options":["`null`","`\"thriller\"`","`[\"drama\"]`","`\"drama\"`"],"answer":3,"explanation":"It's `\"drama\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=online&q=caf%C3%A9&format=online\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"online\"`","`undefined`","`[\"online\"]`","`null`"],"answer":3,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #29

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
