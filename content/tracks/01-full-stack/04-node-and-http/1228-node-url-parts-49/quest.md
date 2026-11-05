---
slug: "node-url-parts-49"
title: "Node Drill: Parsing URLs #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/tickets/90?priority=normal&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`shop.test`","`/v2/tickets/90`","`https://shop.test`","`?priority=normal&page=3`"],"answer":2,"explanation":"`url.origin` is `https://shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/cities/18?continent=Asia&page=2#top\");\n```\n\nWhat is `url.host`?","options":["`api.example.com`","`?continent=Asia&page=2`","`''`","`/v1/cities/18`"],"answer":0,"explanation":"`url.host` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/movies/94?genre=comedy&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`api.example.com:3000`","`?genre=comedy&page=5`","`3000`","`/v1/movies/94`"],"answer":2,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/movies/7?genre=sci-fi&page=3#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v2/movies/7`","`api.example.com`","`api.example.com:8080`","`?genre=sci-fi&page=3`"],"answer":1,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/events/74?format=online&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`/v2/events/74`","`?format=online&page=5`","`api.example.com`","`api.example.com:8080`"],"answer":1,"explanation":"`url.search` is `?format=online&page=5`."}]
---
# Node Drill: Parsing URLs #49

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
