---
slug: "node-search-params-36"
title: "Node Drill: URLSearchParams #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Americas&q=x%2By&continent=Americas\");\n```\n\nWhat is `params.get(\"continent\")`?","options":["`[\"Americas\"]`","`undefined`","`null`","`\"Americas\"`"],"answer":3,"explanation":"It's `\"Americas\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=hybrid&q=hello%20world&format=in-person\");\n```\n\nWhat is `params.has(\"format\")`?","options":["`\"in-person\"`","`true`","`null`","`[\"hybrid\"]`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=email&q=hello%20world&channel=email\");\n```\n\nWhat is `params.getAll(\"channel\")`?","options":["`null`","`[\"email\"]`","`[\"email\",\"email\"]`","`\"email\"`"],"answer":2,"explanation":"It's `[\"email\",\"email\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=bright&q=hello%20world&light=bright\");\n```\n\nWhat is `params.getAll(\"light\")`?","options":["`null`","`\"bright\"`","`[\"bright\",\"bright\"]`","`[\"bright\"]`"],"answer":2,"explanation":"It's `[\"bright\",\"bright\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Kairo&q=caf%C3%A9&artist=Kairo\");\n```\n\nWhat is `params.toString()`?","options":["`\"artist=Kairo&q=caf%C3%A9&artist=Kairo\"`","`\"Kairo\"`","`[\"Kairo\"]`","`null`"],"answer":0,"explanation":"It's `\"artist=Kairo&q=caf%C3%A9&artist=Kairo\"`."}]
---
# Node Drill: URLSearchParams #36

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
