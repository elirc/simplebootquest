---
slug: "node-search-params-51"
title: "Node Drill: URLSearchParams #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"category=rent&q=x%2By&category=fun\");\n```\n\nWhat is `params.getAll(\"category\")`?","options":["`null`","`\"fun\"`","`[\"rent\"]`","`[\"rent\",\"fun\"]`"],"answer":3,"explanation":"It's `[\"rent\",\"fun\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=online&q=hello%20world&format=in-person\");\n```\n\nWhat is `params.getAll(\"format\")`?","options":["`null`","`\"in-person\"`","`[\"online\"]`","`[\"online\",\"in-person\"]`"],"answer":3,"explanation":"It's `[\"online\",\"in-person\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=x%2By&city=Toronto\");\n```\n\nWhat is `params.getAll(\"city\")`?","options":["`\"Toronto\"`","`[\"Kyoto\",\"Toronto\"]`","`[\"Kyoto\"]`","`null`"],"answer":1,"explanation":"It's `[\"Kyoto\",\"Toronto\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=office&q=x%2By&category=home\");\n```\n\nWhat is `params.get('q')`?","options":["`\"home\"`","`\"x+y\"`","`null`","`[\"office\"]`"],"answer":1,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=strength&q=x%2By&kind=strength\");\n```\n\nWhat is `params.toString()`?","options":["`\"kind=strength&q=x%2By&kind=strength\"`","`null`","`[\"strength\"]`","`\"strength\"`"],"answer":0,"explanation":"It's `\"kind=strength&q=x%2By&kind=strength\"`."}]
---
# Node Drill: URLSearchParams #51

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
