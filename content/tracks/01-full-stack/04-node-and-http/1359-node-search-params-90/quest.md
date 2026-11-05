---
slug: "node-search-params-90"
title: "Node Drill: URLSearchParams #90"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"light=low&q=a%26b&light=medium\");\n```\n\nWhat is `params.get('q')`?","options":["`\"medium\"`","`null`","`\"a&b\"`","`[\"low\"]`"],"answer":2,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Europe&q=x%2By&continent=Americas\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"Americas\"`","`3`","`null`","`[\"Europe\"]`"],"answer":1,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=design&q=a%26b&course=web\");\n```\n\nWhat is `params.get(\"course\")`?","options":["`null`","`\"web\"`","`[\"design\"]`","`\"design\"`"],"answer":3,"explanation":"It's `\"design\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=mid&q=hello%20world&level=mid\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`\"mid\"`","`\"level=mid&q=hello+world&level=mid\"`","`[\"mid\"]`"],"answer":2,"explanation":"It's `\"level=mid&q=hello+world&level=mid\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"difficulty=hard&q=hello%20world&difficulty=hard\");\n```\n\nWhat is `params.get(\"difficulty\")`?","options":["`null`","`undefined`","`[\"hard\"]`","`\"hard\"`"],"answer":3,"explanation":"It's `\"hard\"`."}]
---
# Node Drill: URLSearchParams #90

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
