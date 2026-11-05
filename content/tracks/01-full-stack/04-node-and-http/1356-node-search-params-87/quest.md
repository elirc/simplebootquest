---
slug: "node-search-params-87"
title: "Node Drill: URLSearchParams #87"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Asia&q=a%26b&continent=Oceania\");\n```\n\nWhat is `params.getAll(\"continent\")`?","options":["`\"Oceania\"`","`[\"Asia\",\"Oceania\"]`","`null`","`[\"Asia\"]`"],"answer":1,"explanation":"It's `[\"Asia\",\"Oceania\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"team=product&q=caf%C3%A9&team=platform\");\n```\n\nWhat is `params.toString()`?","options":["`\"platform\"`","`[\"product\"]`","`\"team=product&q=caf%C3%A9&team=platform\"`","`null`"],"answer":2,"explanation":"It's `\"team=product&q=caf%C3%A9&team=platform\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Kairo&q=a%26b&artist=The%20Pines\");\n```\n\nWhat is `params.get('q')`?","options":["`\"The Pines\"`","`\"a&b\"`","`[\"Kairo\"]`","`null`"],"answer":1,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=todo&q=x%2By&status=done\");\n```\n\nWhat is `params.toString()`?","options":["`[\"todo\"]`","`\"status=todo&q=x%2By&status=done\"`","`null`","`\"done\"`"],"answer":1,"explanation":"It's `\"status=todo&q=x%2By&status=done\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"difficulty=easy&q=hello%20world&difficulty=hard\");\n```\n\nWhat is `params.get('q')`?","options":["`[\"easy\"]`","`null`","`\"hard\"`","`\"hello world\"`"],"answer":3,"explanation":"It's `\"hello world\"`."}]
---
# Node Drill: URLSearchParams #87

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
