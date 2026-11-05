---
slug: "node-search-params-20"
title: "Node Drill: URLSearchParams #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"city=Lisbon&q=caf%C3%A9&city=Lisbon\");\n```\n\nWhat is `params.get('missing')`?","options":["`[\"Lisbon\"]`","`null`","`\"Lisbon\"`","`undefined`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=email&q=hello%20world&channel=email\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`\"hello world\"`","`[\"email\"]`","`\"email\"`"],"answer":1,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=mobility&q=a%26b&kind=strength\");\n```\n\nWhat is `params.get('q')`?","options":["`\"strength\"`","`null`","`\"a&b\"`","`[\"mobility\"]`"],"answer":2,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=UK&q=a%26b&country=US\");\n```\n\nWhat is `params.getAll(\"country\")`?","options":["`\"US\"`","`[\"UK\",\"US\"]`","`null`","`[\"UK\"]`"],"answer":1,"explanation":"It's `[\"UK\",\"US\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=home&q=a%26b&category=office\");\n```\n\nWhat is `params.get(\"category\")`?","options":["`null`","`[\"home\"]`","`\"office\"`","`\"home\"`"],"answer":3,"explanation":"It's `\"home\"`."}]
---
# Node Drill: URLSearchParams #20

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
