---
slug: "node-search-params-59"
title: "Node Drill: URLSearchParams #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"language=TypeScript&q=a%26b&language=Python\");\n```\n\nWhat is `params.has(\"language\")`?","options":["`[\"TypeScript\"]`","`null`","`\"Python\"`","`true`"],"answer":3,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=caf%C3%A9&genre=classic\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`[\"sci-fi\"]`","`null`","`\"classic\"`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=bright&q=x%2By&light=low\");\n```\n\nWhat is `params.has(\"light\")`?","options":["`[\"bright\"]`","`null`","`true`","`\"low\"`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=star&q=caf%C3%A9&airline=oneworld\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`[\"star\"]`","`3`","`\"oneworld\"`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=hybrid&q=caf%C3%A9&format=hybrid\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`[\"hybrid\"]`","`null`","`\"hybrid\"`"],"answer":2,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #59

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
