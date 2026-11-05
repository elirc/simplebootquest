---
slug: "node-search-params-7"
title: "Node Drill: URLSearchParams #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"course=web&q=a%26b&course=design\");\n```\n\nWhat is `params.toString()`?","options":["`\"course=web&q=a%26b&course=design\"`","`null`","`\"design\"`","`[\"web\"]`"],"answer":0,"explanation":"It's `\"course=web&q=a%26b&course=design\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"priority=normal&q=a%26b&priority=urgent\");\n```\n\nWhat is `params.toString()`?","options":["`\"priority=normal&q=a%26b&priority=urgent\"`","`null`","`[\"normal\"]`","`\"urgent\"`"],"answer":0,"explanation":"It's `\"priority=normal&q=a%26b&priority=urgent\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=caf%C3%A9&city=Toronto\");\n```\n\nWhat is `params.has(\"city\")`?","options":["`\"Toronto\"`","`[\"Kyoto\"]`","`null`","`true`"],"answer":3,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=in-person&q=caf%C3%A9&format=in-person\");\n```\n\nWhat is `params.get('q')`?","options":["`\"in-person\"`","`\"café\"`","`[\"in-person\"]`","`null`"],"answer":1,"explanation":"It's `\"café\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=shipped&q=caf%C3%A9&status=pending\");\n```\n\nWhat is `params.get(\"status\")`?","options":["`[\"shipped\"]`","`null`","`\"shipped\"`","`\"pending\"`"],"answer":2,"explanation":"It's `\"shipped\"`."}]
---
# Node Drill: URLSearchParams #7

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
