---
slug: "node-search-params-72"
title: "Node Drill: URLSearchParams #72"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"course=design&q=hello%20world&course=design\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`[\"design\"]`","`\"design\"`","`null`"],"answer":3,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=petrol&q=x%2By&fuel=hybrid\");\n```\n\nWhat is `params.get('q')`?","options":["`\"x+y\"`","`[\"petrol\"]`","`null`","`\"hybrid\"`"],"answer":0,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"kind=mobility&q=hello%20world&kind=mobility\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`[\"mobility\"]`","`\"mobility\"`","`null`"],"answer":0,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=ada&q=a%26b&assignee=ada\");\n```\n\nWhat is `params.get('q')`?","options":["`[\"ada\"]`","`\"a&b\"`","`\"ada\"`","`null`"],"answer":1,"explanation":"It's `\"a&b\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=grace&q=caf%C3%A9&assignee=grace\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`3`","`null`","`\"grace\"`","`[\"grace\"]`"],"answer":0,"explanation":"It's `3`."}]
---
# Node Drill: URLSearchParams #72

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
