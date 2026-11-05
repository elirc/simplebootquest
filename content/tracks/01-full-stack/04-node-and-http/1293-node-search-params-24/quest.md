---
slug: "node-search-params-24"
title: "Node Drill: URLSearchParams #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"difficulty=easy&q=hello%20world&difficulty=medium\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`null`","`\"medium\"`","`[\"easy\"]`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=advanced&q=caf%C3%A9&level=intermediate\");\n```\n\nWhat is `params.toString()`?","options":["`\"intermediate\"`","`[\"advanced\"]`","`null`","`\"level=advanced&q=caf%C3%A9&level=intermediate\"`"],"answer":3,"explanation":"It's `\"level=advanced&q=caf%C3%A9&level=intermediate\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=low&q=a%26b&light=low\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`null`","`\"low\"`","`[\"low\"]`"],"answer":1,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=email&q=caf%C3%A9&channel=chat\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"email\"]`","`null`","`3`","`\"chat\"`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=x%2By&city=Kyoto\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`[\"Kyoto\"]`","`null`","`\"Kyoto\"`"],"answer":2,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #24

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
