---
slug: "node-search-params-34"
title: "Node Drill: URLSearchParams #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"status=doing&q=x%2By&status=todo\");\n```\n\nWhat is `params.getAll(\"status\")`?","options":["`null`","`[\"doing\",\"todo\"]`","`[\"doing\"]`","`\"todo\"`"],"answer":1,"explanation":"It's `[\"doing\",\"todo\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=TypeScript&q=hello%20world&language=TypeScript\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`[\"TypeScript\"]`","`undefined`","`\"TypeScript\"`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=thriller&q=hello%20world&genre=drama\");\n```\n\nWhat is `params.getAll(\"genre\")`?","options":["`[\"thriller\"]`","`[\"thriller\",\"drama\"]`","`\"drama\"`","`null`"],"answer":1,"explanation":"It's `[\"thriller\",\"drama\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"mood=calm&q=caf%C3%A9&mood=calm\");\n```\n\nWhat is `params.toString()`?","options":["`null`","`\"mood=calm&q=caf%C3%A9&mood=calm\"`","`\"calm\"`","`[\"calm\"]`"],"answer":1,"explanation":"It's `\"mood=calm&q=caf%C3%A9&mood=calm\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=advanced&q=a%26b&level=beginner\");\n```\n\nWhat is `params.toString()`?","options":["`\"beginner\"`","`null`","`\"level=advanced&q=a%26b&level=beginner\"`","`[\"advanced\"]`"],"answer":2,"explanation":"It's `\"level=advanced&q=a%26b&level=beginner\"`."}]
---
# Node Drill: URLSearchParams #34

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
