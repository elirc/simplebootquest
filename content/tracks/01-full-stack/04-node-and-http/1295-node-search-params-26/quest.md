---
slug: "node-search-params-26"
title: "Node Drill: URLSearchParams #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Europe&q=x%2By&continent=Europe\");\n```\n\nWhat is `params.has(\"continent\")`?","options":["`null`","`\"Europe\"`","`true`","`[\"Europe\"]`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Nova&q=hello%20world&artist=The%20Pines\");\n```\n\nWhat is `params.has(\"artist\")`?","options":["`\"The Pines\"`","`true`","`null`","`[\"Nova\"]`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=electric&q=caf%C3%A9&fuel=hybrid\");\n```\n\nWhat is `params.getAll(\"fuel\")`?","options":["`null`","`[\"electric\",\"hybrid\"]`","`\"hybrid\"`","`[\"electric\"]`"],"answer":1,"explanation":"It's `[\"electric\",\"hybrid\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"country=UK&q=x%2By&country=UK\");\n```\n\nWhat is `params.getAll(\"country\")`?","options":["`\"UK\"`","`null`","`[\"UK\",\"UK\"]`","`[\"UK\"]`"],"answer":2,"explanation":"It's `[\"UK\",\"UK\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"difficulty=medium&q=hello%20world&difficulty=easy\");\n```\n\nWhat is `params.has(\"difficulty\")`?","options":["`null`","`[\"medium\"]`","`\"easy\"`","`true`"],"answer":3,"explanation":"It's `true`."}]
---
# Node Drill: URLSearchParams #26

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
