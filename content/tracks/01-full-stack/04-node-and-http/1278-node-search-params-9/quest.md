---
slug: "node-search-params-9"
title: "Node Drill: URLSearchParams #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"priority=low&q=a%26b&priority=normal\");\n```\n\nWhat is `params.getAll(\"priority\")`?","options":["`\"normal\"`","`[\"low\"]`","`null`","`[\"low\",\"normal\"]`"],"answer":3,"explanation":"It's `[\"low\",\"normal\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=hybrid&q=caf%C3%A9&fuel=electric\");\n```\n\nWhat is `params.get(\"fuel\")`?","options":["`null`","`[\"hybrid\"]`","`\"electric\"`","`\"hybrid\"`"],"answer":3,"explanation":"It's `\"hybrid\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=diesel&q=caf%C3%A9&fuel=electric\");\n```\n\nWhat is `params.has(\"fuel\")`?","options":["`[\"diesel\"]`","`true`","`\"electric\"`","`null`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=mid&q=a%26b&level=junior\");\n```\n\nWhat is `params.get('q')`?","options":["`\"a&b\"`","`null`","`\"junior\"`","`[\"mid\"]`"],"answer":0,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"light=medium&q=a%26b&light=bright\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`[\"medium\"]`","`\"bright\"`","`null`"],"answer":3,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #9

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
