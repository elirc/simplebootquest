---
slug: "node-search-params-74"
title: "Node Drill: URLSearchParams #74"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"level=mid&q=a%26b&level=mid\");\n```\n\nWhat is `params.get(\"level\")`?","options":["`[\"mid\"]`","`null`","`undefined`","`\"mid\"`"],"answer":3,"explanation":"It's `\"mid\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=x%2By&level=advanced\");\n```\n\nWhat is `params.getAll(\"level\")`?","options":["`null`","`[\"intermediate\",\"advanced\"]`","`[\"intermediate\"]`","`\"advanced\"`"],"answer":1,"explanation":"It's `[\"intermediate\",\"advanced\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=strength&q=x%2By&kind=cardio\");\n```\n\nWhat is `params.get('q')`?","options":["`\"cardio\"`","`null`","`[\"strength\"]`","`\"x+y\"`"],"answer":3,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=home&q=a%26b&category=office\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"office\"`","`null`","`3`","`[\"home\"]`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Lisbon&q=a%26b&city=Lisbon\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`[\"Lisbon\"]`","`\"Lisbon\"`","`\"city=Lisbon&q=a%26b&city=Lisbon\"`"],"answer":3,"explanation":"It's `\"city=Lisbon&q=a%26b&city=Lisbon\"`."}]
---
# Node Drill: URLSearchParams #74

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
