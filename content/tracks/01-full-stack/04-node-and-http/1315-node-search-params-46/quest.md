---
slug: "node-search-params-46"
title: "Node Drill: URLSearchParams #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst params = new URLSearchParams(\"city=Kyoto&q=a%26b&city=Lisbon\");\n```\n\nWhat is `params.toString()`?","options":["`[\"Kyoto\"]`","`null`","`\"city=Kyoto&q=a%26b&city=Lisbon\"`","`\"Lisbon\"`"],"answer":2,"explanation":"It's `\"city=Kyoto&q=a%26b&city=Lisbon\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=linus&q=a%26b&assignee=linus\");\n```\n\nWhat is `params.toString()`?","options":["`\"linus\"`","`null`","`[\"linus\"]`","`\"assignee=linus&q=a%26b&assignee=linus\"`"],"answer":3,"explanation":"It's `\"assignee=linus&q=a%26b&assignee=linus\"`."},{"prompt":"```js\nconst params = new URLSearchParams(\"assignee=grace&q=hello%20world&assignee=grace\");\n```\n\nWhat is `params.get('missing')`?","options":["`null`","`\"grace\"`","`undefined`","`[\"grace\"]`"],"answer":0,"explanation":"It's `null`."},{"prompt":"```js\nconst params = new URLSearchParams(\"continent=Africa&q=caf%C3%A9&continent=Oceania\");\n```\n\nWhat is `[...params.keys()].length`?","options":["`\"Oceania\"`","`null`","`3`","`[\"Africa\"]`"],"answer":2,"explanation":"It's `3`."},{"prompt":"```js\nconst params = new URLSearchParams(\"genre=drama&q=a%26b&genre=thriller\");\n```\n\nWhat is `params.get(\"genre\")`?","options":["`\"drama\"`","`\"thriller\"`","`null`","`[\"drama\"]`"],"answer":0,"explanation":"It's `\"drama\"`."}]
---
# Node Drill: URLSearchParams #46

`URLSearchParams` handles encoding for you: spaces become `+`, `&` becomes `%26`, and `getAll` returns every value of a repeated key. `get` returns the **first** value, or `null` if it's missing.
