---
slug: "node-search-params-2"
title: "Node Drill: URLSearchParams #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"channel=chat&q=caf%C3%A9&channel=phone\");\n```\n\nWhat is `params.getAll(\"channel\")`?","options":["`[\"chat\",\"phone\"]`","`\"phone\"`","`null`","`[\"chat\"]`"],"answer":0,"explanation":"It's `[\"chat\",\"phone\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=tech&q=x%2By&genre=classic\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"classic\"`","`null`","`[\"tech\"]`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=cardio&q=caf%C3%A9&kind=cardio\");\n```\n\nWhat is `params.get(\"kind\")`?","options":["`null`","`undefined`","`[\"cardio\"]`","`\"cardio\"`"],"answer":3,"explanation":"It's `\"cardio\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=TypeScript&q=caf%C3%A9&language=Go\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`[\"TypeScript\"]`","`\"café\"`","`\"Go\"`"],"answer":2,"explanation":"It's `\"café\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=skyteam&q=hello%20world&airline=star\");\n```\n\nWhat is `params.toString()`?","options":["`\"star\"`","`null`","`[\"skyteam\"]`","`\"airline=skyteam&q=hello+world&airline=star\"`"],"answer":3,"explanation":"It's `\"airline=skyteam&q=hello+world&airline=star\"`."}]
---
# Node Drill: URLSearchParams #2

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
