---
slug: "node-search-params-77"
title: "Node Drill: URLSearchParams #77"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=diesel&q=caf%C3%A9&fuel=electric\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"electric\"`","`3`","`null`","`[\"diesel\"]`"],"answer":1,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Europe&q=caf%C3%A9&continent=Americas\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`[\"Europe\"]`","`\"Americas\"`","`\"café\"`"],"answer":3,"explanation":"It's `\"café\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Asia&q=x%2By&continent=Europe\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`undefined`","`[\"Asia\"]`","`\"Europe\"`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"format=hybrid&q=hello%20world&format=in-person\");\n```\n\nWhat is `params.get('q')`?","options":["`\"in-person\"`","`null`","`\"hello world\"`","`[\"hybrid\"]`"],"answer":2,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=diesel&q=hello%20world&fuel=hybrid\");\n```\n\nWhat is `params.getAll(\"fuel\")`?","options":["`[\"diesel\",\"hybrid\"]`","`\"hybrid\"`","`null`","`[\"diesel\"]`"],"answer":0,"explanation":"It's `[\"diesel\",\"hybrid\"]`."}]
---
# Node Drill: URLSearchParams #77

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
