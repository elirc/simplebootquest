---
slug: "node-search-params-60"
title: "Node Drill: URLSearchParams #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=electric&q=x%2By&fuel=electric\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"electric\"`","`[\"electric\"]`","`null`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Nova&q=hello%20world&artist=The%20Pines\");\n```\n\nWhat is `params.get('q')`?","options":["`\"The Pines\"`","`\"hello world\"`","`null`","`[\"Nova\"]`"],"answer":1,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=caf%C3%A9&genre=sci-fi\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`3`","`[\"sci-fi\"]`","`\"sci-fi\"`"],"answer":1,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=senior&q=hello%20world&level=junior\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`undefined`","`[\"senior\"]`","`\"junior\"`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=phone&q=hello%20world&channel=email\");\n```\n\nWhat is `params.get(\"channel\")`?","options":["`[\"phone\"]`","`null`","`\"email\"`","`\"phone\"`"],"answer":3,"explanation":"It's `\"phone\"`."}]
---
# Node Drill: URLSearchParams #60

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
