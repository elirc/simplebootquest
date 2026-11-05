---
slug: "node-url-parts-43"
title: "Node Drill: Parsing URLs #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/courses/98?level=intermediate&page=3#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`/v2/courses/98`","`api.example.com`","`?level=intermediate&page=3`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/movies/89?genre=sci-fi&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`/v1/movies/89`","`?genre=sci-fi&page=5`","`shop.test:8080`","`shop.test`"],"answer":1,"explanation":"`url.search` is `?genre=sci-fi&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/transactions/50?category=fun&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`8080`","`localhost:8080`","`/v2/transactions/50`","`?category=fun&page=1`"],"answer":0,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/plants/6?light=low&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v2/plants/6`","`shop.test`","`?light=low&page=1`","`shop.test:8080`"],"answer":0,"explanation":"`url.pathname` is `/v2/plants/6`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/courses/25?level=advanced&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`/v2/courses/25`","`#top`","`?level=advanced&page=1`","`api.example.com:8080`"],"answer":1,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #43

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
