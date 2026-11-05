---
slug: "node-url-parts-11"
title: "Node Drill: Parsing URLs #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/workouts/32?kind=mobility&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`''`","`localhost`","`?kind=mobility&page=2`","`/v1/workouts/32`"],"answer":0,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/cars/95?fuel=diesel&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`api.example.com`","`api.example.com:8080`","`/v2/cars/95`","`?fuel=diesel&page=5`"],"answer":1,"explanation":"`url.host` is `api.example.com:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/cars/51?fuel=hybrid&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`?fuel=hybrid&page=1`","`shop.test`","`shop.test:3000`","`/v2/cars/51`"],"answer":3,"explanation":"`url.pathname` is `/v2/cars/51`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/transactions/27?category=salary&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost`","`/v2/transactions/27`","`localhost:8080`","`?category=salary&page=2`"],"answer":1,"explanation":"`url.pathname` is `/v2/transactions/27`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/plants/14?light=low&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com:3000`","`#top`","`/v2/plants/14`","`?light=low&page=1`"],"answer":1,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #11

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
