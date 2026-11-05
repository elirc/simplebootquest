---
slug: "node-search-params-43"
title: "Node Drill: URLSearchParams #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"cuisine=asian&q=a%26b&cuisine=mexican\");\n```\n\nWhat is `params.toString()`?","options":["`\"cuisine=asian&q=a%26b&cuisine=mexican\"`","`[\"asian\"]`","`\"mexican\"`","`null`"],"answer":0,"explanation":"It's `\"cuisine=asian&q=a%26b&cuisine=mexican\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=oneworld&q=a%26b&airline=star\");\n```\n\nWhat is `params.get(\"airline\")`?","options":["`\"oneworld\"`","`[\"oneworld\"]`","`null`","`\"star\"`"],"answer":0,"explanation":"It's `\"oneworld\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"language=TypeScript&q=a%26b&language=TypeScript\");\n```\n\nWhat is `params.getAll(\"language\")`?","options":["`null`","`\"TypeScript\"`","`[\"TypeScript\"]`","`[\"TypeScript\",\"TypeScript\"]`"],"answer":3,"explanation":"It's `[\"TypeScript\",\"TypeScript\"]`."},{"prompt":"```js\nconst params = new URLSearchParams(\"cuisine=asian&q=hello%20world&cuisine=mexican\");\n```\n\nWhat is `params.toString()`?","options":["`\"mexican\"`","`[\"asian\"]`","`\"cuisine=asian&q=hello+world&cuisine=mexican\"`","`null`"],"answer":2,"explanation":"It's `\"cuisine=asian&q=hello+world&cuisine=mexican\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"channel=chat&q=hello%20world&channel=phone\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`[\"chat\"]`","`\"phone\"`","`null`"],"answer":3,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #43

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
