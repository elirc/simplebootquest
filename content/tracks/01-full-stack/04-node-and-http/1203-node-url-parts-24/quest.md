---
slug: "node-url-parts-24"
title: "Node Drill: Parsing URLs #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/movies/50?genre=thriller&page=4#top\");\n```\n\nWhat is `url.origin`?","options":["`/v1/movies/50`","`localhost`","`https://localhost`","`?genre=thriller&page=4`"],"answer":2,"explanation":"`url.origin` is `https://localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/plants/23?light=medium&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v2/plants/23`","`api.example.com`","`?light=medium&page=5`","`api.example.com:3000`"],"answer":1,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/students/7?course=data&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`shop.test`","`?course=data&page=2`","`/v1/students/7`","`shop.test:3000`"],"answer":1,"explanation":"`url.search` is `?course=data&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/plants/78?light=bright&page=4#top\");\n```\n\nWhat is `url.host`?","options":["`localhost`","`localhost:8080`","`?light=bright&page=4`","`/v2/plants/78`"],"answer":1,"explanation":"`url.host` is `localhost:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/transactions/92?category=fun&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`https://localhost:8080`","`localhost:8080`","`/v1/transactions/92`","`?category=fun&page=3`"],"answer":0,"explanation":"`url.origin` is `https://localhost:8080`."}]
---
# Node Drill: Parsing URLs #24

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
