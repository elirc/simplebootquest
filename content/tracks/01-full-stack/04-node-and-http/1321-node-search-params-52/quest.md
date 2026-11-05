---
slug: "node-search-params-52"
title: "Node Drill: URLSearchParams #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"light=low&q=a%26b&light=medium\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`\"medium\"`","`[\"low\"]`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=US&q=a%26b&country=US\");\n```\n\nWhat is `params.has(\"country\")`?","options":["`null`","`[\"US\"]`","`true`","`\"US\"`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=cancelled&q=a%26b&status=pending\");\n```\n\nWhat is `params.get(\"status\")`?","options":["`\"cancelled\"`","`[\"cancelled\"]`","`\"pending\"`","`null`"],"answer":0,"explanation":"It's `\"cancelled\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=star&q=hello%20world&airline=skyteam\");\n```\n\nWhat is `params.get('q')`?","options":["`\"skyteam\"`","`\"hello world\"`","`null`","`[\"star\"]`"],"answer":1,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Toronto&q=a%26b&city=Kyoto\");\n```\n\nWhat is `params.get('q')`?","options":["`\"Kyoto\"`","`\"a&b\"`","`null`","`[\"Toronto\"]`"],"answer":1,"explanation":"It's `\"a&b\"`."}]
---
# Node Drill: URLSearchParams #52

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
