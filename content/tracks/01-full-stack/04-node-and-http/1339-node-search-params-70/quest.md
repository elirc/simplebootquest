---
slug: "node-search-params-70"
title: "Node Drill: URLSearchParams #70"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"light=medium&q=a%26b&light=medium\");\n```\n\nWhat is `params.get(\"light\")`?","options":["`[\"medium\"]`","`null`","`undefined`","`\"medium\"`"],"answer":3,"explanation":"It's `\"medium\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"team=product&q=a%26b&team=data\");\n```\n\nWhat is `params.toString()`?","options":["`\"data\"`","`null`","`[\"product\"]`","`\"team=product&q=a%26b&team=data\"`"],"answer":3,"explanation":"It's `\"team=product&q=a%26b&team=data\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=low&q=caf%C3%A9&light=low\");\n```\n\nWhat is `params.get(\"light\")`?","options":["`\"low\"`","`undefined`","`null`","`[\"low\"]`"],"answer":0,"explanation":"It's `\"low\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=rent&q=x%2By&category=food\");\n```\n\nWhat is `params.toString()`?","options":["`[\"rent\"]`","`\"food\"`","`null`","`\"category=rent&q=x%2By&category=food\"`"],"answer":3,"explanation":"It's `\"category=rent&q=x%2By&category=food\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=paid&q=a%26b&status=paid\");\n```\n\nWhat is `params.getAll(\"status\")`?","options":["`\"paid\"`","`null`","`[\"paid\"]`","`[\"paid\",\"paid\"]`"],"answer":3,"explanation":"It's `[\"paid\",\"paid\"]`."}]
---
# Node Drill: URLSearchParams #70

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
