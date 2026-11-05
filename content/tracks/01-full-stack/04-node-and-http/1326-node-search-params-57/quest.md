---
slug: "node-search-params-57"
title: "Node Drill: URLSearchParams #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"artist=The%20Pines&q=caf%C3%A9&artist=The%20Pines\");\n```\n\nWhat is `params.getAll(\"artist\")`?","options":["`[\"The Pines\",\"The Pines\"]`","`null`","`[\"The Pines\"]`","`\"The Pines\"`"],"answer":0,"explanation":"It's `[\"The Pines\",\"The Pines\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=caf%C3%A9&city=Lisbon\");\n```\n\nWhat is `params.get('q')`?","options":["`\"Lisbon\"`","`[\"Kyoto\"]`","`null`","`\"café\"`"],"answer":3,"explanation":"It's `\"café\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Nova&q=hello%20world&artist=The%20Pines\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`\"The Pines\"`","`[\"Nova\"]`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=office&q=a%26b&category=tech\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`[\"office\"]`","`\"tech\"`","`undefined`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=a%26b&level=intermediate\");\n```\n\nWhat is `params.get(\"level\")`?","options":["`undefined`","`null`","`[\"intermediate\"]`","`\"intermediate\"`"],"answer":3,"explanation":"It's `\"intermediate\"`."}]
---
# Node Drill: URLSearchParams #57

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
