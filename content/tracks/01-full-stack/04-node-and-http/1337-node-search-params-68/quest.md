---
slug: "node-search-params-68"
title: "Node Drill: URLSearchParams #68"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"mood=happy&q=hello%20world&mood=happy\");\n```\n\nWhat is `params.has(\"mood\")`?","options":["`[\"happy\"]`","`\"happy\"`","`true`","`null`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=caf%C3%A9&level=advanced\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`\"advanced\"`","`\"level=intermediate&q=caf%C3%A9&level=advanced\"`","`[\"intermediate\"]`"],"answer":2,"explanation":"It's `\"level=intermediate&q=caf%C3%A9&level=advanced\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=rent&q=caf%C3%A9&category=food\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`[\"rent\"]`","`\"food\"`","`undefined`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=classic&q=hello%20world&genre=tech\");\n```\n\nWhat is `params.getAll(\"genre\")`?","options":["`null`","`\"tech\"`","`[\"classic\",\"tech\"]`","`[\"classic\"]`"],"answer":2,"explanation":"It's `[\"classic\",\"tech\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=cardio&q=x%2By&kind=mobility\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"mobility\"`","`null`","`[\"cardio\"]`","`3`"],"answer":3,"explanation":"It's `3`."}]
---
# Node Drill: URLSearchParams #68

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
