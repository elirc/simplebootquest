---
slug: "node-search-params-86"
title: "Node Drill: URLSearchParams #86"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"fuel=diesel&q=a%26b&fuel=diesel\");\n```\n\nWhat is `params.toString()`?","options":["`[\"diesel\"]`","`null`","`\"fuel=diesel&q=a%26b&fuel=diesel\"`","`\"diesel\"`"],"answer":2,"explanation":"It's `\"fuel=diesel&q=a%26b&fuel=diesel\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=ada&q=caf%C3%A9&assignee=linus\");\n```\n\nWhat is `params.getAll(\"assignee\")`?","options":["`\"linus\"`","`[\"ada\"]`","`null`","`[\"ada\",\"linus\"]`"],"answer":3,"explanation":"It's `[\"ada\",\"linus\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=grace&q=hello%20world&assignee=linus\");\n```\n\nWhat is `params.has(\"assignee\")`?","options":["`[\"grace\"]`","`true`","`null`","`\"linus\"`"],"answer":1,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=Python&q=hello%20world&language=TypeScript\");\n```\n\nWhat is `params.get('q')`?","options":["`[\"Python\"]`","`\"hello world\"`","`\"TypeScript\"`","`null`"],"answer":1,"explanation":"It's `\"hello world\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=beginner&q=x%2By&level=beginner\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`[\"beginner\"]`","`\"x+y\"`","`\"beginner\"`"],"answer":2,"explanation":"It's `\"x+y\"`."}]
---
# Node Drill: URLSearchParams #86

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
