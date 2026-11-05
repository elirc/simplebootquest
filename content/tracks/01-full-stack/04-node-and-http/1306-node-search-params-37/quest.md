---
slug: "node-search-params-37"
title: "Node Drill: URLSearchParams #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=a%26b&level=advanced\");\n```\n\nWhat is `params.has(\"level\")`?","options":["`true`","`null`","`[\"intermediate\"]`","`\"advanced\"`"],"answer":0,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=home&q=caf%C3%A9&category=office\");\n```\n\nWhat is `params.get(\"category\")`?","options":["`\"home\"`","`null`","`[\"home\"]`","`\"office\"`"],"answer":0,"explanation":"It's `\"home\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=data&q=caf%C3%A9&course=web\");\n```\n\nWhat is `params.toString()`?","options":["`[\"data\"]`","`\"course=data&q=caf%C3%A9&course=web\"`","`null`","`\"web\"`"],"answer":1,"explanation":"It's `\"course=data&q=caf%C3%A9&course=web\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Lisbon&q=a%26b&city=Toronto\");\n```\n\nWhat is `params.get(\"city\")`?","options":["`\"Lisbon\"`","`null`","`\"Toronto\"`","`[\"Lisbon\"]`"],"answer":0,"explanation":"It's `\"Lisbon\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=low&q=x%2By&light=medium\");\n```\n\nWhat is `params.get('q')`?","options":["`[\"low\"]`","`\"x+y\"`","`null`","`\"medium\"`"],"answer":1,"explanation":"It's `\"x+y\"`."}]
---
# Node Drill: URLSearchParams #37

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
