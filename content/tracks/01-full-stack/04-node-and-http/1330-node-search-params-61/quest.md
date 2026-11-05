---
slug: "node-search-params-61"
title: "Node Drill: URLSearchParams #61"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"light=medium&q=a%26b&light=medium\");\n```\n\nWhat is `params.get('missing')`?","options":["`[\"medium\"]`","`undefined`","`\"medium\"`","`null`"],"answer":3,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=caf%C3%A9&city=Kyoto\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"Kyoto\"`","`[\"Kyoto\"]`","`null`","`undefined`"],"answer":2,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=design&q=a%26b&course=design\");\n```\n\nWhat is `params.getAll(\"course\")`?","options":["`[\"design\"]`","`[\"design\",\"design\"]`","`\"design\"`","`null`"],"answer":1,"explanation":"It's `[\"design\",\"design\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=petrol&q=a%26b&fuel=diesel\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`[\"petrol\"]`","`\"fuel=petrol&q=a%26b&fuel=diesel\"`","`\"diesel\"`"],"answer":2,"explanation":"It's `\"fuel=petrol&q=a%26b&fuel=diesel\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=UK&q=x%2By&country=UK\");\n```\n\nWhat is `params.toString()`?","options":["`\"country=UK&q=x%2By&country=UK\"`","`\"UK\"`","`[\"UK\"]`","`null`"],"answer":0,"explanation":"It's `\"country=UK&q=x%2By&country=UK\"`."}]
---
# Node Drill: URLSearchParams #61

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
