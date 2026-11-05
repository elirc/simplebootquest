---
slug: "node-search-params-4"
title: "Node Drill: URLSearchParams #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"artist=Nova&q=x%2By&artist=The%20Pines\");\n```\n\nWhat is `params.toString()`?","options":["`\"artist=Nova&q=x%2By&artist=The+Pines\"`","`null`","`[\"Nova\"]`","`\"The Pines\"`"],"answer":0,"explanation":"It's `\"artist=Nova&q=x%2By&artist=The+Pines\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=mid&q=caf%C3%A9&level=mid\");\n```\n\nWhat is `params.toString()`?","options":["`\"level=mid&q=caf%C3%A9&level=mid\"`","`\"mid\"`","`[\"mid\"]`","`null`"],"answer":0,"explanation":"It's `\"level=mid&q=caf%C3%A9&level=mid\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=comedy&q=x%2By&genre=sci-fi\");\n```\n\nWhat is `params.get('missing')`?","options":["`undefined`","`\"sci-fi\"`","`null`","`[\"comedy\"]`"],"answer":2,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=a%26b&genre=thriller\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`\"thriller\"`","`undefined`","`[\"sci-fi\"]`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"city=Toronto&q=caf%C3%A9&city=Kyoto\");\n```\n\nWhat is `params.get('q')`?","options":["`\"Kyoto\"`","`\"café\"`","`null`","`[\"Toronto\"]`"],"answer":1,"explanation":"It's `\"café\"`."}]
---
# Node Drill: URLSearchParams #4

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
