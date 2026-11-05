---
slug: "node-url-parts-8"
title: "Node Drill: Parsing URLs #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/courses/59?level=beginner&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`/v2/courses/59`","`api.example.com:8080`","`?level=beginner&page=1`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/tasks/69?status=todo&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`''`","`localhost`","`?status=todo&page=5`","`/v2/tasks/69`"],"answer":0,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/tickets/5?priority=chat&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`?priority=chat&page=1`","`#top`","`/v1/tickets/5`","`api.example.com:3000`"],"answer":1,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/movies/97?genre=thriller&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`?genre=thriller&page=5`","`/v1/movies/97`","`api.example.com:8080`","`https://api.example.com:8080`"],"answer":3,"explanation":"`url.origin` is `https://api.example.com:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/cities/27?continent=Oceania&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost:3000`","`?continent=Oceania&page=1`","`/v2/cities/27`","`localhost`"],"answer":2,"explanation":"`url.pathname` is `/v2/cities/27`."}]
---
# Node Drill: Parsing URLs #8

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
