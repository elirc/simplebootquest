---
slug: "node-search-params-64"
title: "Node Drill: URLSearchParams #64"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"airline=star&q=a%26b&airline=skyteam\");\n```\n\nWhat is `params.toString()`?","options":["`\"airline=star&q=a%26b&airline=skyteam\"`","`\"skyteam\"`","`[\"star\"]`","`null`"],"answer":0,"explanation":"It's `\"airline=star&q=a%26b&airline=skyteam\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=beginner&q=hello%20world&level=advanced\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"advanced\"`","`null`","`undefined`","`[\"beginner\"]`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=x%2By&genre=thriller\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`3`","`\"thriller\"`","`[\"sci-fi\"]`"],"answer":1,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=drama&q=caf%C3%A9&genre=drama\");\n```\n\nWhat is `params.has(\"genre\")`?","options":["`null`","`\"drama\"`","`true`","`[\"drama\"]`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=chat&q=caf%C3%A9&channel=chat\");\n```\n\nWhat is `params.has(\"channel\")`?","options":["`true`","`[\"chat\"]`","`null`","`\"chat\"`"],"answer":0,"explanation":"It's `true`."}]
---
# Node Drill: URLSearchParams #64

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
