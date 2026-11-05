---
slug: "node-search-params-10"
title: "Node Drill: URLSearchParams #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"light=low&q=a%26b&light=low\");\n```\n\nWhat is `params.get(\"light\")`?","options":["`null`","`\"low\"`","`undefined`","`[\"low\"]`"],"answer":1,"explanation":"It's `\"low\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=oneworld&q=hello%20world&airline=skyteam\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`\"hello world\"`","`[\"oneworld\"]`","`\"skyteam\"`"],"answer":1,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=travel&q=hello%20world&category=travel\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`\"hello world\"`","`\"travel\"`","`[\"travel\"]`"],"answer":1,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=ada&q=hello%20world&assignee=grace\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`null`","`[\"ada\"]`","`\"grace\"`","`3`"],"answer":3,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=x%2By&genre=classic\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`[\"sci-fi\"]`","`\"classic\"`","`3`","`null`"],"answer":2,"explanation":"It's `3`."}]
---
# Node Drill: URLSearchParams #10

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
