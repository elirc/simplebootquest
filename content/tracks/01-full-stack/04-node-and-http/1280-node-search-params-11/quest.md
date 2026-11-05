---
slug: "node-search-params-11"
title: "Node Drill: URLSearchParams #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"kind=cardio&q=hello%20world&kind=cardio\");\n```\n\nWhat is `params.has(\"kind\")`?","options":["`\"cardio\"`","`true`","`[\"cardio\"]`","`null`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=home&q=x%2By&category=home\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`[\"home\"]`","`\"home\"`","`\"x+y\"`"],"answer":3,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=salary&q=caf%C3%A9&category=food\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`[\"salary\"]`","`null`","`\"food\"`"],"answer":2,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=shipped&q=a%26b&status=paid\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`\"a&b\"`","`[\"shipped\"]`","`\"paid\"`"],"answer":1,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Nova&q=hello%20world&artist=Nova\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`[\"Nova\"]`","`null`","`\"Nova\"`"],"answer":2,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #11

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
