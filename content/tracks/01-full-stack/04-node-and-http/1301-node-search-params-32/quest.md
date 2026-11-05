---
slug: "node-search-params-32"
title: "Node Drill: URLSearchParams #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"level=mid&q=x%2By&level=mid\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`[\"mid\"]`","`\"mid\"`","`null`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=home&q=hello%20world&category=office\");\n```\n\nWhat is `params.get(\"category\")`?","options":["`null`","`\"office\"`","`[\"home\"]`","`\"home\"`"],"answer":3,"explanation":"It's `\"home\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=Python&q=caf%C3%A9&language=Python\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`[\"Python\"]`","`\"Python\"`","`null`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=diesel&q=caf%C3%A9&fuel=diesel\");\n```\n\nWhat is `params.has(\"fuel\")`?","options":["`null`","`[\"diesel\"]`","`true`","`\"diesel\"`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=electric&q=x%2By&fuel=petrol\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`[\"electric\"]`","`\"petrol\"`","`null`"],"answer":3,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #32

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
