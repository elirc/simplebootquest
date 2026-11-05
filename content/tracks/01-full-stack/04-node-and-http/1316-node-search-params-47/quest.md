---
slug: "node-search-params-47"
title: "Node Drill: URLSearchParams #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=ada&q=hello%20world&assignee=grace\");\n```\n\nWhat is `params.toString()`?","options":["`[\"ada\"]`","`\"grace\"`","`\"assignee=ada&q=hello+world&assignee=grace\"`","`null`"],"answer":2,"explanation":"It's `\"assignee=ada&q=hello+world&assignee=grace\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=web&q=hello%20world&course=web\");\n```\n\nWhat is `params.get('q')`?","options":["`\"web\"`","`[\"web\"]`","`\"hello world\"`","`null`"],"answer":2,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"team=product&q=x%2By&team=platform\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`\"team=product&q=x%2By&team=platform\"`","`[\"product\"]`","`\"platform\"`"],"answer":1,"explanation":"It's `\"team=product&q=x%2By&team=platform\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"course=web&q=a%26b&course=data\");\n```\n\nWhat is `params.get(\"course\")`?","options":["`\"web\"`","`[\"web\"]`","`null`","`\"data\"`"],"answer":0,"explanation":"It's `\"web\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=US&q=hello%20world&country=US\");\n```\n\nWhat is `params.get(\"country\")`?","options":["`[\"US\"]`","`undefined`","`\"US\"`","`null`"],"answer":2,"explanation":"It's `\"US\"`."}]
---
# Node Drill: URLSearchParams #47

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
