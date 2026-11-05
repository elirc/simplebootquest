---
slug: "node-search-params-55"
title: "Node Drill: URLSearchParams #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"status=done&q=x%2By&status=todo\");\n```\n\nWhat is `params.get('missing')`?","options":["`[\"done\"]`","`\"todo\"`","`null`","`undefined`"],"answer":2,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Americas&q=caf%C3%A9&continent=Asia\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"Asia\"`","`[\"Americas\"]`","`null`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=junior&q=hello%20world&level=senior\");\n```\n\nWhat is `params.has(\"level\")`?","options":["`[\"junior\"]`","`\"senior\"`","`true`","`null`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"priority=normal&q=a%26b&priority=normal\");\n```\n\nWhat is `params.get(\"priority\")`?","options":["`undefined`","`null`","`[\"normal\"]`","`\"normal\"`"],"answer":3,"explanation":"It's `\"normal\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=x%2By&city=Kyoto\");\n```\n\nWhat is `params.get(\"city\")`?","options":["`\"Kyoto\"`","`undefined`","`null`","`[\"Kyoto\"]`"],"answer":0,"explanation":"It's `\"Kyoto\"`."}]
---
# Node Drill: URLSearchParams #55

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
