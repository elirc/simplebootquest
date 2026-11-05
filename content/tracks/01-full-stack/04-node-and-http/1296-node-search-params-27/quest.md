---
slug: "node-search-params-27"
title: "Node Drill: URLSearchParams #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"genre=fiction&q=hello%20world&genre=sci-fi\");\n```\n\nWhat is `params.get('q')`?","options":["`\"sci-fi\"`","`\"hello world\"`","`[\"fiction\"]`","`null`"],"answer":1,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=petrol&q=x%2By&fuel=hybrid\");\n```\n\nWhat is `params.has(\"fuel\")`?","options":["`null`","`true`","`[\"petrol\"]`","`\"hybrid\"`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=junior&q=caf%C3%A9&level=senior\");\n```\n\nWhat is `params.get(\"level\")`?","options":["`null`","`[\"junior\"]`","`\"junior\"`","`\"senior\"`"],"answer":2,"explanation":"It's `\"junior\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=hello%20world&city=Kyoto\");\n```\n\nWhat is `params.has(\"city\")`?","options":["`\"Kyoto\"`","`true`","`null`","`[\"Kyoto\"]`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"category=office&q=a%26b&category=tech\");\n```\n\nWhat is `params.get(\"category\")`?","options":["`\"office\"`","`null`","`[\"office\"]`","`\"tech\"`"],"answer":0,"explanation":"It's `\"office\"`."}]
---
# Node Drill: URLSearchParams #27

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
