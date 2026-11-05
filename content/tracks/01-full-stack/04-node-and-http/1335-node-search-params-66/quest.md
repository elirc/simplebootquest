---
slug: "node-search-params-66"
title: "Node Drill: URLSearchParams #66"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=a%26b&level=advanced\");\n```\n\nWhat is `params.get(\"level\")`?","options":["`\"intermediate\"`","`[\"intermediate\"]`","`null`","`\"advanced\"`"],"answer":0,"explanation":"It's `\"intermediate\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=star&q=x%2By&airline=skyteam\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`[\"star\"]`","`\"skyteam\"`","`null`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"mood=calm&q=x%2By&mood=dark\");\n```\n\nWhat is `params.toString()`?","options":["`\"dark\"`","`null`","`\"mood=calm&q=x%2By&mood=dark\"`","`[\"calm\"]`"],"answer":2,"explanation":"It's `\"mood=calm&q=x%2By&mood=dark\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=DE&q=caf%C3%A9&country=DE\");\n```\n\nWhat is `params.has(\"country\")`?","options":["`null`","`true`","`\"DE\"`","`[\"DE\"]`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=skyteam&q=hello%20world&airline=skyteam\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`[\"skyteam\"]`","`\"hello world\"`","`\"skyteam\"`"],"answer":2,"explanation":"It's `\"hello world\"`."}]
---
# Node Drill: URLSearchParams #66

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
