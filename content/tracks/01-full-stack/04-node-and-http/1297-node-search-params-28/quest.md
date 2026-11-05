---
slug: "node-search-params-28"
title: "Node Drill: URLSearchParams #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"team=product&q=hello%20world&team=data\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`3`","`[\"product\"]`","`\"data\"`"],"answer":1,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=a%26b&city=Lisbon\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"Lisbon\"`","`null`","`[\"Kyoto\"]`","`undefined`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=low&q=hello%20world&light=bright\");\n```\n\nWhat is `params.toString()`?","options":["`\"light=low&q=hello+world&light=bright\"`","`[\"low\"]`","`null`","`\"bright\"`"],"answer":0,"explanation":"It's `\"light=low&q=hello+world&light=bright\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=comedy&q=caf%C3%A9&genre=comedy\");\n```\n\nWhat is `params.has(\"genre\")`?","options":["`true`","`\"comedy\"`","`null`","`[\"comedy\"]`"],"answer":0,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Toronto&q=hello%20world&city=Toronto\");\n```\n\nWhat is `params.get('q')`?","options":["`[\"Toronto\"]`","`null`","`\"Toronto\"`","`\"hello world\"`"],"answer":3,"explanation":"It's `\"hello world\"`."}]
---
# Node Drill: URLSearchParams #28

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
