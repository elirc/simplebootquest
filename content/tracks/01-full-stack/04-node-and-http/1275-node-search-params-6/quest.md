---
slug: "node-search-params-6"
title: "Node Drill: URLSearchParams #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"level=beginner&q=caf%C3%A9&level=advanced\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`[\"beginner\"]`","`3`","`\"advanced\"`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"mood=dark&q=x%2By&mood=dark\");\n```\n\nWhat is `params.get('q')`?","options":["`\"x+y\"`","`[\"dark\"]`","`null`","`\"dark\"`"],"answer":0,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=hybrid&q=hello%20world&format=hybrid\");\n```\n\nWhat is `params.get('q')`?","options":["`\"hybrid\"`","`[\"hybrid\"]`","`null`","`\"hello world\"`"],"answer":3,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=medium&q=caf%C3%A9&light=bright\");\n```\n\nWhat is `params.has(\"light\")`?","options":["`\"bright\"`","`true`","`null`","`[\"medium\"]`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=a%26b&level=beginner\");\n```\n\nWhat is `params.get('missing')`?","options":["`[\"intermediate\"]`","`undefined`","`null`","`\"beginner\"`"],"answer":2,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #6

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
