---
slug: "node-search-params-45"
title: "Node Drill: URLSearchParams #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"language=Go&q=x%2By&language=Go\");\n```\n\nWhat is `params.get(\"language\")`?","options":["`null`","`undefined`","`\"Go\"`","`[\"Go\"]`"],"answer":2,"explanation":"It's `\"Go\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=chat&q=hello%20world&channel=email\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`\"email\"`","`[\"chat\"]`","`null`"],"answer":3,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=hybrid&q=hello%20world&fuel=diesel\");\n```\n\nWhat is `params.get('missing')`?","options":["`\"diesel\"`","`null`","`undefined`","`[\"hybrid\"]`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=UK&q=a%26b&country=UK\");\n```\n\nWhat is `params.get(\"country\")`?","options":["`[\"UK\"]`","`null`","`\"UK\"`","`undefined`"],"answer":2,"explanation":"It's `\"UK\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=low&q=a%26b&light=low\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`null`","`\"low\"`","`[\"low\"]`"],"answer":0,"explanation":"It's `3`."}]
---
# Node Drill: URLSearchParams #45

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
