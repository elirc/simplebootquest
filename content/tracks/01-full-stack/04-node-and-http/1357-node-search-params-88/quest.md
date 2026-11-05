---
slug: "node-search-params-88"
title: "Node Drill: URLSearchParams #88"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"city=Toronto&q=x%2By&city=Lisbon\");\n```\n\nWhat is `params.has(\"city\")`?","options":["`null`","`\"Lisbon\"`","`[\"Toronto\"]`","`true`"],"answer":3,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=The%20Pines&q=hello%20world&artist=The%20Pines\");\n```\n\nWhat is `params.getAll(\"artist\")`?","options":["`\"The Pines\"`","`null`","`[\"The Pines\"]`","`[\"The Pines\",\"The Pines\"]`"],"answer":3,"explanation":"It's `[\"The Pines\",\"The Pines\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=diesel&q=x%2By&fuel=diesel\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"diesel\"`","`null`","`[\"diesel\"]`","`undefined`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=strength&q=x%2By&kind=mobility\");\n```\n\nWhat is `params.getAll(\"kind\")`?","options":["`\"mobility\"`","`null`","`[\"strength\"]`","`[\"strength\",\"mobility\"]`"],"answer":3,"explanation":"It's `[\"strength\",\"mobility\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=done&q=caf%C3%A9&status=doing\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`null`","`[\"done\"]`","`\"doing\"`"],"answer":1,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #88

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
