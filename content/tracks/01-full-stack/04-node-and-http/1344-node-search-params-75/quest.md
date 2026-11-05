---
slug: "node-search-params-75"
title: "Node Drill: URLSearchParams #75"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"priority=normal&q=hello%20world&priority=normal\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`null`","`[\"normal\"]`","`\"normal\"`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=office&q=hello%20world&category=home\");\n```\n\nWhat is `params.get(\"category\")`?","options":["`null`","`\"office\"`","`\"home\"`","`[\"office\"]`"],"answer":1,"explanation":"It's `\"office\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=caf%C3%A9&level=advanced\");\n```\n\nWhat is `params.getAll(\"level\")`?","options":["`[\"intermediate\",\"advanced\"]`","`\"advanced\"`","`null`","`[\"intermediate\"]`"],"answer":0,"explanation":"It's `[\"intermediate\",\"advanced\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=Go&q=hello%20world&language=TypeScript\");\n```\n\nWhat is `params.has(\"language\")`?","options":["`\"TypeScript\"`","`true`","`null`","`[\"Go\"]`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=caf%C3%A9&city=Kyoto\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`null`","`[\"Kyoto\"]`","`\"Kyoto\"`"],"answer":0,"explanation":"It's `3`."}]
---
# Node Drill: URLSearchParams #75

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
