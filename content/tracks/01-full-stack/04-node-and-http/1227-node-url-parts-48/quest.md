---
slug: "node-url-parts-48"
title: "Node Drill: Parsing URLs #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/courses/62?level=intermediate&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`?level=intermediate&page=2`","`localhost:3000`","`localhost`","`/v1/courses/62`"],"answer":3,"explanation":"`url.pathname` is `/v1/courses/62`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/songs/20?mood=Nova&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`api.example.com`","`''`","`?mood=Nova&page=5`","`/v2/songs/20`"],"answer":0,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/tickets/68?priority=email&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`shop.test`","`?priority=email&page=1`","`#top`","`/v1/tickets/68`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/movies/58?genre=sci-fi&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`?genre=sci-fi&page=2`","`shop.test:8080`","`shop.test`","`/v2/movies/58`"],"answer":0,"explanation":"`url.search` is `?genre=sci-fi&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/tickets/13?priority=phone&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`/v1/tickets/13`","`shop.test:8080`","`8080`","`?priority=phone&page=2`"],"answer":2,"explanation":"`url.port` is `8080`."}]
---
# Node Drill: Parsing URLs #48

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
