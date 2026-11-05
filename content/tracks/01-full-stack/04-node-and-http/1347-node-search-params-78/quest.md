---
slug: "node-search-params-78"
title: "Node Drill: URLSearchParams #78"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"course=data&q=x%2By&course=web\");\n```\n\nWhat is `params.toString()`?","options":["`\"course=data&q=x%2By&course=web\"`","`null`","`\"web\"`","`[\"data\"]`"],"answer":0,"explanation":"It's `\"course=data&q=x%2By&course=web\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=classic&q=hello%20world&genre=classic\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`\"genre=classic&q=hello+world&genre=classic\"`","`[\"classic\"]`","`\"classic\"`"],"answer":1,"explanation":"It's `\"genre=classic&q=hello+world&genre=classic\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=hello%20world&level=intermediate\");\n```\n\nWhat is `params.get(\"level\")`?","options":["`undefined`","`\"intermediate\"`","`[\"intermediate\"]`","`null`"],"answer":1,"explanation":"It's `\"intermediate\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=mobility&q=caf%C3%A9&kind=mobility\");\n```\n\nWhat is `params.get('q')`?","options":["`\"café\"`","`\"mobility\"`","`null`","`[\"mobility\"]`"],"answer":0,"explanation":"It's `\"café\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"difficulty=easy&q=a%26b&difficulty=medium\");\n```\n\nWhat is `params.has(\"difficulty\")`?","options":["`\"medium\"`","`null`","`true`","`[\"easy\"]`"],"answer":2,"explanation":"It's `true`."}]
---
# Node Drill: URLSearchParams #78

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
