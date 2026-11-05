---
slug: "node-search-params-39"
title: "Node Drill: URLSearchParams #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"course=web&q=caf%C3%A9&course=design\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`\"design\"`","`[\"web\"]`","`\"course=web&q=caf%C3%A9&course=design\"`"],"answer":3,"explanation":"It's `\"course=web&q=caf%C3%A9&course=design\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=hello%20world&city=Toronto\");\n```\n\nWhat is `params.has(\"city\")`?","options":["`\"Toronto\"`","`null`","`true`","`[\"Kyoto\"]`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"priority=normal&q=x%2By&priority=urgent\");\n```\n\nWhat is `params.has(\"priority\")`?","options":["`[\"normal\"]`","`null`","`\"urgent\"`","`true`"],"answer":3,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=design&q=x%2By&course=data\");\n```\n\nWhat is `params.getAll(\"course\")`?","options":["`null`","`[\"design\",\"data\"]`","`\"data\"`","`[\"design\"]`"],"answer":1,"explanation":"It's `[\"design\",\"data\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"mood=dark&q=x%2By&mood=calm\");\n```\n\nWhat is `params.get('q')`?","options":["`[\"dark\"]`","`null`","`\"calm\"`","`\"x+y\"`"],"answer":3,"explanation":"It's `\"x+y\"`."}]
---
# Node Drill: URLSearchParams #39

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
