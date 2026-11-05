---
slug: "node-search-params-67"
title: "Node Drill: URLSearchParams #67"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"language=Go&q=caf%C3%A9&language=TypeScript\");\n```\n\nWhat is `params.toString()`?","options":["`\"TypeScript\"`","`[\"Go\"]`","`\"language=Go&q=caf%C3%A9&language=TypeScript\"`","`null`"],"answer":2,"explanation":"It's `\"language=Go&q=caf%C3%A9&language=TypeScript\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Asia&q=a%26b&continent=Oceania\");\n```\n\nWhat is `params.has(\"continent\")`?","options":["`true`","`\"Oceania\"`","`[\"Asia\"]`","`null`"],"answer":0,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=phone&q=x%2By&channel=chat\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"chat\"`","`[\"phone\"]`","`null`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=thriller&q=x%2By&genre=drama\");\n```\n\nWhat is `params.get('q')`?","options":["`\"x+y\"`","`\"drama\"`","`[\"thriller\"]`","`null`"],"answer":0,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=bright&q=hello%20world&light=medium\");\n```\n\nWhat is `params.getAll(\"light\")`?","options":["`[\"bright\",\"medium\"]`","`null`","`\"medium\"`","`[\"bright\"]`"],"answer":0,"explanation":"It's `[\"bright\",\"medium\"]`."}]
---
# Node Drill: URLSearchParams #67

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
