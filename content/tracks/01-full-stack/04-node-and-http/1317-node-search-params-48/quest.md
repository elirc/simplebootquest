---
slug: "node-search-params-48"
title: "Node Drill: URLSearchParams #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"genre=classic&q=caf%C3%A9&genre=fiction\");\n```\n\nWhat is `params.get('q')`?","options":["`\"café\"`","`\"fiction\"`","`null`","`[\"classic\"]`"],"answer":0,"explanation":"It's `\"café\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=phone&q=x%2By&channel=phone\");\n```\n\nWhat is `params.getAll(\"channel\")`?","options":["`null`","`[\"phone\",\"phone\"]`","`[\"phone\"]`","`\"phone\"`"],"answer":1,"explanation":"It's `[\"phone\",\"phone\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=thriller&q=hello%20world&genre=thriller\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"thriller\"]`","`3`","`null`","`\"thriller\"`"],"answer":1,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=star&q=caf%C3%A9&airline=skyteam\");\n```\n\nWhat is `params.get(\"airline\")`?","options":["`[\"star\"]`","`null`","`\"skyteam\"`","`\"star\"`"],"answer":3,"explanation":"It's `\"star\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=in-person&q=caf%C3%A9&format=online\");\n```\n\nWhat is `params.get('q')`?","options":["`\"café\"`","`\"online\"`","`[\"in-person\"]`","`null`"],"answer":0,"explanation":"It's `\"café\"`."}]
---
# Node Drill: URLSearchParams #48

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
