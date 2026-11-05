---
slug: "node-search-params-40"
title: "Node Drill: URLSearchParams #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"channel=chat&q=x%2By&channel=email\");\n```\n\nWhat is `params.get('q')`?","options":["`\"x+y\"`","`\"email\"`","`null`","`[\"chat\"]`"],"answer":0,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=caf%C3%A9&level=advanced\");\n```\n\nWhat is `params.get('q')`?","options":["`[\"intermediate\"]`","`null`","`\"café\"`","`\"advanced\"`"],"answer":2,"explanation":"It's `\"café\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=in-person&q=a%26b&format=online\");\n```\n\nWhat is `params.getAll(\"format\")`?","options":["`null`","`\"online\"`","`[\"in-person\",\"online\"]`","`[\"in-person\"]`"],"answer":2,"explanation":"It's `[\"in-person\",\"online\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=in-person&q=x%2By&format=hybrid\");\n```\n\nWhat is `params.getAll(\"format\")`?","options":["`[\"in-person\"]`","`\"hybrid\"`","`null`","`[\"in-person\",\"hybrid\"]`"],"answer":3,"explanation":"It's `[\"in-person\",\"hybrid\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=petrol&q=a%26b&fuel=petrol\");\n```\n\nWhat is `params.get(\"fuel\")`?","options":["`\"petrol\"`","`null`","`[\"petrol\"]`","`undefined`"],"answer":0,"explanation":"It's `\"petrol\"`."}]
---
# Node Drill: URLSearchParams #40

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
