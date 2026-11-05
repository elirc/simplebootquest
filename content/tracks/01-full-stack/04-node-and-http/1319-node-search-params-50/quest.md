---
slug: "node-search-params-50"
title: "Node Drill: URLSearchParams #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Kairo&q=hello%20world&artist=Nova\");\n```\n\nWhat is `params.get(\"artist\")`?","options":["`\"Nova\"`","`\"Kairo\"`","`[\"Kairo\"]`","`null`"],"answer":1,"explanation":"It's `\"Kairo\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=advanced&q=hello%20world&level=advanced\");\n```\n\nWhat is `params.toString()`?","options":["`\"advanced\"`","`[\"advanced\"]`","`null`","`\"level=advanced&q=hello+world&level=advanced\"`"],"answer":3,"explanation":"It's `\"level=advanced&q=hello+world&level=advanced\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=TypeScript&q=caf%C3%A9&language=Python\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"Python\"`","`undefined`","`null`","`[\"TypeScript\"]`"],"answer":2,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=x%2By&level=intermediate\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`\"intermediate\"`","`\"x+y\"`","`[\"intermediate\"]`"],"answer":2,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=grace&q=x%2By&assignee=grace\");\n```\n\nWhat is `params.get(\"assignee\")`?","options":["`[\"grace\"]`","`undefined`","`null`","`\"grace\"`"],"answer":3,"explanation":"It's `\"grace\"`."}]
---
# Node Drill: URLSearchParams #50

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
