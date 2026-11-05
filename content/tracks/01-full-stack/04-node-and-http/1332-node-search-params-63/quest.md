---
slug: "node-search-params-63"
title: "Node Drill: URLSearchParams #63"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Kairo&q=a%26b&artist=The%20Pines\");\n```\n\nWhat is `params.getAll(\"artist\")`?","options":["`\"The Pines\"`","`[\"Kairo\",\"The Pines\"]`","`null`","`[\"Kairo\"]`"],"answer":1,"explanation":"It's `[\"Kairo\",\"The Pines\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=design&q=a%26b&course=web\");\n```\n\nWhat is `params.get('q')`?","options":["`\"web\"`","`[\"design\"]`","`\"a&b\"`","`null`"],"answer":2,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=design&q=x%2By&course=web\");\n```\n\nWhat is `params.get('q')`?","options":["`\"web\"`","`[\"design\"]`","`\"x+y\"`","`null`"],"answer":2,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=strength&q=hello%20world&kind=mobility\");\n```\n\nWhat is `params.get(\"kind\")`?","options":["`\"strength\"`","`null`","`\"mobility\"`","`[\"strength\"]`"],"answer":0,"explanation":"It's `\"strength\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=drama&q=a%26b&genre=thriller\");\n```\n\nWhat is `params.getAll(\"genre\")`?","options":["`[\"drama\",\"thriller\"]`","`null`","`[\"drama\"]`","`\"thriller\"`"],"answer":0,"explanation":"It's `[\"drama\",\"thriller\"]`."}]
---
# Node Drill: URLSearchParams #63

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
