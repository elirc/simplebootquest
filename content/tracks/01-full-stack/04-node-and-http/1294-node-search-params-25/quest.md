---
slug: "node-search-params-25"
title: "Node Drill: URLSearchParams #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"country=UK&q=caf%C3%A9&country=UK\");\n```\n\nWhat is `params.get('missing')`?","options":["`[\"UK\"]`","`null`","`\"UK\"`","`undefined`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"priority=low&q=hello%20world&priority=normal\");\n```\n\nWhat is `params.getAll(\"priority\")`?","options":["`null`","`[\"low\"]`","`[\"low\",\"normal\"]`","`\"normal\"`"],"answer":2,"explanation":"It's `[\"low\",\"normal\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=mid&q=a%26b&level=senior\");\n```\n\nWhat is `params.get('q')`?","options":["`[\"mid\"]`","`\"senior\"`","`\"a&b\"`","`null`"],"answer":2,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"status=doing&q=hello%20world&status=done\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`\"done\"`","`null`","`[\"doing\"]`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=phone&q=caf%C3%A9&channel=chat\");\n```\n\nWhat is `params.get('q')`?","options":["`\"chat\"`","`[\"phone\"]`","`null`","`\"café\"`"],"answer":3,"explanation":"It's `\"café\"`."}]
---
# Node Drill: URLSearchParams #25

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
