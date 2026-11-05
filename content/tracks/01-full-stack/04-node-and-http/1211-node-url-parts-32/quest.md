---
slug: "node-url-parts-32"
title: "Node Drill: Parsing URLs #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/plants/68?light=bright&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`?light=bright&page=1`","`shop.test:8080`","`shop.test`","`/v2/plants/68`"],"answer":1,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/orders/38?country=UK&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`?country=UK&page=5`","`https://localhost`","`/v2/orders/38`","`localhost`"],"answer":1,"explanation":"`url.origin` is `https://localhost`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/cities/43?continent=Oceania&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`localhost:8080`","`?continent=Oceania&page=1`","`/v2/cities/43`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/movies/52?genre=sci-fi&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`localhost:8080`","`8080`","`/v2/movies/52`","`?genre=sci-fi&page=4`"],"answer":1,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/tickets/60?channel=low&page=2#top\");\n```\n\nWhat is `url.host`?","options":["`/v2/tickets/60`","`''`","`?channel=low&page=2`","`api.example.com`"],"answer":3,"explanation":"`url.host` is `api.example.com`."}]
---
# Node Drill: Parsing URLs #32

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
