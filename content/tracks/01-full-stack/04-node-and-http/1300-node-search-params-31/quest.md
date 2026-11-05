---
slug: "node-search-params-31"
title: "Node Drill: URLSearchParams #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"priority=urgent&q=caf%C3%A9&priority=urgent\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`[\"urgent\"]`","`\"urgent\"`","`undefined`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=web&q=caf%C3%A9&course=design\");\n```\n\nWhat is `params.get(\"course\")`?","options":["`null`","`[\"web\"]`","`\"web\"`","`\"design\"`"],"answer":2,"explanation":"It's `\"web\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=junior&q=a%26b&level=senior\");\n```\n\nWhat is `params.get(\"level\")`?","options":["`\"junior\"`","`\"senior\"`","`null`","`[\"junior\"]`"],"answer":0,"explanation":"It's `\"junior\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=senior&q=x%2By&level=senior\");\n```\n\nWhat is `params.get('q')`?","options":["`\"x+y\"`","`\"senior\"`","`null`","`[\"senior\"]`"],"answer":0,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=bright&q=a%26b&light=low\");\n```\n\nWhat is `params.getAll(\"light\")`?","options":["`\"low\"`","`[\"bright\",\"low\"]`","`[\"bright\"]`","`null`"],"answer":1,"explanation":"It's `[\"bright\",\"low\"]`."}]
---
# Node Drill: URLSearchParams #31

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
