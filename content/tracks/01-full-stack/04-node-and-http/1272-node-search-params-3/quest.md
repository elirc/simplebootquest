---
slug: "node-search-params-3"
title: "Node Drill: URLSearchParams #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"kind=cardio&q=caf%C3%A9&kind=strength\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`\"kind=cardio&q=caf%C3%A9&kind=strength\"`","`[\"cardio\"]`","`\"strength\"`"],"answer":1,"explanation":"It's `\"kind=cardio&q=caf%C3%A9&kind=strength\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=food&q=hello%20world&category=travel\");\n```\n\nWhat is `params.has(\"category\")`?","options":["`null`","`\"travel\"`","`[\"food\"]`","`true`"],"answer":3,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Asia&q=hello%20world&continent=Oceania\");\n```\n\nWhat is `params.toString()`?","options":["`[\"Asia\"]`","`\"Oceania\"`","`\"continent=Asia&q=hello+world&continent=Oceania\"`","`null`"],"answer":2,"explanation":"It's `\"continent=Asia&q=hello+world&continent=Oceania\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=comedy&q=hello%20world&genre=thriller\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"comedy\"]`","`\"thriller\"`","`null`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=star&q=caf%C3%A9&airline=skyteam\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`[\"star\"]`","`\"skyteam\"`","`\"café\"`"],"answer":3,"explanation":"It's `\"café\"`."}]
---
# Node Drill: URLSearchParams #3

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
