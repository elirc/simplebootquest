---
slug: "node-search-params-13"
title: "Node Drill: URLSearchParams #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"priority=low&q=x%2By&priority=urgent\");\n```\n\nWhat is `params.get(\"priority\")`?","options":["`[\"low\"]`","`\"urgent\"`","`null`","`\"low\"`"],"answer":3,"explanation":"It's `\"low\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=mobility&q=caf%C3%A9&kind=strength\");\n```\n\nWhat is `params.toString()`?","options":["`[\"mobility\"]`","`null`","`\"kind=mobility&q=caf%C3%A9&kind=strength\"`","`\"strength\"`"],"answer":2,"explanation":"It's `\"kind=mobility&q=caf%C3%A9&kind=strength\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=office&q=x%2By&category=office\");\n```\n\nWhat is `params.getAll(\"category\")`?","options":["`null`","`[\"office\"]`","`[\"office\",\"office\"]`","`\"office\"`"],"answer":2,"explanation":"It's `[\"office\",\"office\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=strength&q=caf%C3%A9&kind=cardio\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`undefined`","`\"cardio\"`","`[\"strength\"]`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=UK&q=a%26b&country=US\");\n```\n\nWhat is `params.get(\"country\")`?","options":["`\"UK\"`","`[\"UK\"]`","`\"US\"`","`null`"],"answer":0,"explanation":"It's `\"UK\"`."}]
---
# Node Drill: URLSearchParams #13

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
