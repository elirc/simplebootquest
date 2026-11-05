---
slug: "node-search-params-22"
title: "Node Drill: URLSearchParams #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"airline=skyteam&q=hello%20world&airline=star\");\n```\n\nWhat is `params.get(\"airline\")`?","options":["`\"star\"`","`null`","`\"skyteam\"`","`[\"skyteam\"]`"],"answer":2,"explanation":"It's `\"skyteam\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=comedy&q=a%26b&genre=drama\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"drama\"`","`3`","`null`","`[\"comedy\"]`"],"answer":1,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"team=product&q=a%26b&team=data\");\n```\n\nWhat is `params.getAll(\"team\")`?","options":["`[\"product\"]`","`[\"product\",\"data\"]`","`null`","`\"data\"`"],"answer":1,"explanation":"It's `[\"product\",\"data\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Nova&q=caf%C3%A9&artist=The%20Pines\");\n```\n\nWhat is `params.getAll(\"artist\")`?","options":["`[\"Nova\"]`","`\"The Pines\"`","`[\"Nova\",\"The Pines\"]`","`null`"],"answer":2,"explanation":"It's `[\"Nova\",\"The Pines\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=home&q=a%26b&category=tech\");\n```\n\nWhat is `params.get('q')`?","options":["`\"a&b\"`","`[\"home\"]`","`\"tech\"`","`null`"],"answer":0,"explanation":"It's `\"a&b\"`."}]
---
# Node Drill: URLSearchParams #22

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
