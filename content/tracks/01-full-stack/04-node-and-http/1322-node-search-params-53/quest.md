---
slug: "node-search-params-53"
title: "Node Drill: URLSearchParams #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"difficulty=medium&q=hello%20world&difficulty=medium\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"medium\"`","`null`","`[\"medium\"]`","`undefined`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=thriller&q=hello%20world&genre=comedy\");\n```\n\nWhat is `params.get(\"genre\")`?","options":["`\"comedy\"`","`null`","`[\"thriller\"]`","`\"thriller\"`"],"answer":3,"explanation":"It's `\"thriller\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=fiction&q=a%26b&genre=sci-fi\");\n```\n\nWhat is `params.has(\"genre\")`?","options":["`true`","`\"sci-fi\"`","`[\"fiction\"]`","`null`"],"answer":0,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=mid&q=a%26b&level=junior\");\n```\n\nWhat is `params.has(\"level\")`?","options":["`\"junior\"`","`true`","`[\"mid\"]`","`null`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=The%20Pines&q=x%2By&artist=Nova\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"Nova\"`","`null`","`[\"The Pines\"]`","`3`"],"answer":3,"explanation":"It's `3`."}]
---
# Node Drill: URLSearchParams #53

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
