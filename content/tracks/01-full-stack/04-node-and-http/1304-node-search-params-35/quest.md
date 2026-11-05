---
slug: "node-search-params-35"
title: "Node Drill: URLSearchParams #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"cuisine=italian&q=a%26b&cuisine=italian\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`\"italian\"`","`undefined`","`[\"italian\"]`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Toronto&q=a%26b&city=Lisbon\");\n```\n\nWhat is `params.get(\"city\")`?","options":["`\"Toronto\"`","`\"Lisbon\"`","`null`","`[\"Toronto\"]`"],"answer":0,"explanation":"It's `\"Toronto\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=electric&q=x%2By&fuel=diesel\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`\"diesel\"`","`null`","`[\"electric\"]`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=beginner&q=hello%20world&level=intermediate\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`[\"beginner\"]`","`\"intermediate\"`","`undefined`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=online&q=caf%C3%A9&format=in-person\");\n```\n\nWhat is `params.has(\"format\")`?","options":["`\"in-person\"`","`true`","`null`","`[\"online\"]`"],"answer":1,"explanation":"It's `true`."}]
---
# Node Drill: URLSearchParams #35

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
