---
slug: "node-search-params-14"
title: "Node Drill: URLSearchParams #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Kairo&q=caf%C3%A9&artist=The%20Pines\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`\"The Pines\"`","`\"artist=Kairo&q=caf%C3%A9&artist=The+Pines\"`","`[\"Kairo\"]`"],"answer":2,"explanation":"It's `\"artist=Kairo&q=caf%C3%A9&artist=The+Pines\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=web&q=hello%20world&course=data\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`\"data\"`","`[\"web\"]`","`\"hello world\"`"],"answer":3,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"mood=dark&q=caf%C3%A9&mood=calm\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`[\"dark\"]`","`\"calm\"`","`\"mood=dark&q=caf%C3%A9&mood=calm\"`"],"answer":3,"explanation":"It's `\"mood=dark&q=caf%C3%A9&mood=calm\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=skyteam&q=a%26b&airline=star\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`[\"skyteam\"]`","`\"star\"`","`\"airline=skyteam&q=a%26b&airline=star\"`"],"answer":3,"explanation":"It's `\"airline=skyteam&q=a%26b&airline=star\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=shipped&q=caf%C3%A9&status=cancelled\");\n```\n\nWhat is `params.has(\"status\")`?","options":["`\"cancelled\"`","`null`","`true`","`[\"shipped\"]`"],"answer":2,"explanation":"It's `true`."}]
---
# Node Drill: URLSearchParams #14

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
