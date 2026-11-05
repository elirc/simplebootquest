---
slug: "node-search-params-56"
title: "Node Drill: URLSearchParams #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"level=mid&q=hello%20world&level=senior\");\n```\n\nWhat is `params.has(\"level\")`?","options":["`\"senior\"`","`null`","`true`","`[\"mid\"]`"],"answer":2,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=electric&q=caf%C3%A9&fuel=diesel\");\n```\n\nWhat is `params.get(\"fuel\")`?","options":["`[\"electric\"]`","`\"diesel\"`","`null`","`\"electric\"`"],"answer":3,"explanation":"It's `\"electric\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Americas&q=a%26b&continent=Americas\");\n```\n\nWhat is `params.getAll(\"continent\")`?","options":["`null`","`\"Americas\"`","`[\"Americas\"]`","`[\"Americas\",\"Americas\"]`"],"answer":3,"explanation":"It's `[\"Americas\",\"Americas\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"cuisine=asian&q=hello%20world&cuisine=asian\");\n```\n\nWhat is `params.get(\"cuisine\")`?","options":["`[\"asian\"]`","`undefined`","`\"asian\"`","`null`"],"answer":2,"explanation":"It's `\"asian\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=email&q=x%2By&channel=email\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"email\"]`","`3`","`null`","`\"email\"`"],"answer":1,"explanation":"It's `3`."}]
---
# Node Drill: URLSearchParams #56

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
