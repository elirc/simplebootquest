---
slug: "node-search-params-33"
title: "Node Drill: URLSearchParams #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"airline=oneworld&q=a%26b&airline=star\");\n```\n\nWhat is `params.getAll(\"airline\")`?","options":["`\"star\"`","`[\"oneworld\"]`","`null`","`[\"oneworld\",\"star\"]`"],"answer":3,"explanation":"It's `[\"oneworld\",\"star\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=todo&q=hello%20world&status=done\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"todo\"]`","`null`","`3`","`\"done\"`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"cuisine=middle-eastern&q=caf%C3%A9&cuisine=mexican\");\n```\n\nWhat is `params.get('missing')`?","options":["`[\"middle-eastern\"]`","`undefined`","`null`","`\"mexican\"`"],"answer":2,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"priority=urgent&q=caf%C3%A9&priority=low\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`undefined`","`[\"urgent\"]`","`\"low\"`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=travel&q=hello%20world&category=food\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`[\"travel\"]`","`\"food\"`","`undefined`"],"answer":0,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #33

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
