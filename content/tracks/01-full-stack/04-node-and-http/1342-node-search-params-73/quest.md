---
slug: "node-search-params-73"
title: "Node Drill: URLSearchParams #73"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"airline=skyteam&q=x%2By&airline=star\");\n```\n\nWhat is `params.has(\"airline\")`?","options":["`\"star\"`","`null`","`[\"skyteam\"]`","`true`"],"answer":3,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=cancelled&q=x%2By&status=pending\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`\"pending\"`","`[\"cancelled\"]`","`null`"],"answer":3,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=web&q=hello%20world&course=design\");\n```\n\nWhat is `params.toString()`?","options":["`[\"web\"]`","`null`","`\"course=web&q=hello+world&course=design\"`","`\"design\"`"],"answer":2,"explanation":"It's `\"course=web&q=hello+world&course=design\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=online&q=a%26b&format=online\");\n```\n\nWhat is `params.get(\"format\")`?","options":["`undefined`","`\"online\"`","`null`","`[\"online\"]`"],"answer":1,"explanation":"It's `\"online\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"difficulty=medium&q=a%26b&difficulty=hard\");\n```\n\nWhat is `params.has(\"difficulty\")`?","options":["`true`","`null`","`[\"medium\"]`","`\"hard\"`"],"answer":0,"explanation":"It's `true`."}]
---
# Node Drill: URLSearchParams #73

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
