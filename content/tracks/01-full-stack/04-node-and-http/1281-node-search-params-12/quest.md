---
slug: "node-search-params-12"
title: "Node Drill: URLSearchParams #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Africa&q=hello%20world&continent=Americas\");\n```\n\nWhat is `params.has(\"continent\")`?","options":["`true`","`null`","`\"Americas\"`","`[\"Africa\"]`"],"answer":0,"explanation":"It's `true`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Americas&q=a%26b&continent=Asia\");\n```\n\nWhat is `params.toString()`?","options":["`\"Asia\"`","`null`","`[\"Americas\"]`","`\"continent=Americas&q=a%26b&continent=Asia\"`"],"answer":3,"explanation":"It's `\"continent=Americas&q=a%26b&continent=Asia\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"airline=oneworld&q=caf%C3%A9&airline=skyteam\");\n```\n\nWhat is `params.toString()`?","options":["`\"skyteam\"`","`null`","`\"airline=oneworld&q=caf%C3%A9&airline=skyteam\"`","`[\"oneworld\"]`"],"answer":2,"explanation":"It's `\"airline=oneworld&q=caf%C3%A9&airline=skyteam\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=sci-fi&q=x%2By&genre=classic\");\n```\n\nWhat is `params.get('q')`?","options":["`null`","`[\"sci-fi\"]`","`\"classic\"`","`\"x+y\"`"],"answer":3,"explanation":"It's `\"x+y\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"level=mid&q=caf%C3%A9&level=mid\");\n```\n\nWhat is `params.get('missing')`?","options":["`[\"mid\"]`","`\"mid\"`","`undefined`","`null`"],"answer":3,"explanation":"It's `null`."}]
---
# Node Drill: URLSearchParams #12

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
