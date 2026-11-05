---
slug: "node-search-params-79"
title: "Node Drill: URLSearchParams #79"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=ada&q=caf%C3%A9&assignee=grace\");\n```\n\nWhat is `params.get(\"assignee\")`?","options":["`\"grace\"`","`null`","`[\"ada\"]`","`\"ada\"`"],"answer":3,"explanation":"It's `\"ada\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=diesel&q=caf%C3%A9&fuel=petrol\");\n```\n\nWhat is `params.getAll(\"fuel\")`?","options":["`[\"diesel\",\"petrol\"]`","`\"petrol\"`","`[\"diesel\"]`","`null`"],"answer":0,"explanation":"It's `[\"diesel\",\"petrol\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=grace&q=caf%C3%A9&assignee=linus\");\n```\n\nWhat is `params.toString()`?","options":["`\"linus\"`","`null`","`\"assignee=grace&q=caf%C3%A9&assignee=linus\"`","`[\"grace\"]`"],"answer":2,"explanation":"It's `\"assignee=grace&q=caf%C3%A9&assignee=linus\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=intermediate&q=caf%C3%A9&level=advanced\");\n```\n\nWhat is `params.has(\"level\")`?","options":["`[\"intermediate\"]`","`\"advanced\"`","`null`","`true`"],"answer":3,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=tech&q=hello%20world&genre=fiction\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"tech\"]`","`3`","`null`","`\"fiction\"`"],"answer":1,"explanation":"It's `3`."}]
---
# Node Drill: URLSearchParams #79

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
