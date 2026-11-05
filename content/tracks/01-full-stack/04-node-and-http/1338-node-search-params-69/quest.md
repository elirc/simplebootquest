---
slug: "node-search-params-69"
title: "Node Drill: URLSearchParams #69"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"light=low&q=x%2By&light=medium\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`[\"low\"]`","`undefined`","`\"medium\"`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Oceania&q=x%2By&continent=Americas\");\n```\n\nWhat is `params.toString()`?","options":["`\"Americas\"`","`null`","`\"continent=Oceania&q=x%2By&continent=Americas\"`","`[\"Oceania\"]`"],"answer":2,"explanation":"It's `\"continent=Oceania&q=x%2By&continent=Americas\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=cardio&q=a%26b&kind=mobility\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`[\"cardio\"]`","`\"mobility\"`","`null`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=home&q=x%2By&category=office\");\n```\n\nWhat is `params.getAll(\"category\")`?","options":["`\"office\"`","`null`","`[\"home\",\"office\"]`","`[\"home\"]`"],"answer":2,"explanation":"It's `[\"home\",\"office\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=thriller&q=x%2By&genre=comedy\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`[\"thriller\"]`","`undefined`","`\"comedy\"`"],"answer":0,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #69

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
