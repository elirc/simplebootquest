---
slug: "node-url-parts-27"
title: "Node Drill: Parsing URLs #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/tasks/14?status=ada&page=1#top\");\n```\n\nWhat is `url.search`?","options":["`api.example.com`","`?status=ada&page=1`","`api.example.com:8080`","`/v1/tasks/14`"],"answer":1,"explanation":"`url.search` is `?status=ada&page=1`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/movies/5?genre=sci-fi&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`api.example.com:8080`","`?genre=sci-fi&page=5`","`/v2/movies/5`","`8080`"],"answer":3,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/movies/80?genre=thriller&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`https://localhost:8080`","`?genre=thriller&page=5`","`localhost:8080`","`/v1/movies/80`"],"answer":0,"explanation":"`url.origin` is `https://localhost:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/events/63?format=in-person&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`localhost:8080`","`/v1/events/63`","`#top`","`?format=in-person&page=1`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/hotels/55?city=Kyoto&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v1/hotels/55`","`?city=Kyoto&page=2`","`''`","`shop.test`"],"answer":0,"explanation":"`url.pathname` is `/v1/hotels/55`."}]
---
# Node Drill: Parsing URLs #27

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
