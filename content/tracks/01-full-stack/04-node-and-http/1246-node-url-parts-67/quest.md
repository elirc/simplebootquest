---
slug: "node-url-parts-67"
title: "Node Drill: Parsing URLs #67"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/courses/6?level=advanced&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`/v2/courses/6`","`?level=advanced&page=2`","`api.example.com`","`api.example.com:3000`"],"answer":1,"explanation":"`url.search` is `?level=advanced&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/tickets/82?priority=urgent&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`/v2/tickets/82`","`?priority=urgent&page=2`","`localhost`","`localhost:3000`"],"answer":1,"explanation":"`url.search` is `?priority=urgent&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/plants/59?light=bright&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`?light=bright&page=1`","`/v2/plants/59`","`''`","`localhost`"],"answer":2,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/cars/48?fuel=diesel&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`shop.test`","`/v2/cars/48`","`''`","`?fuel=diesel&page=3`"],"answer":0,"explanation":"`url.host` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/products/32?category=home&page=4#top\");\n```\n\nWhat is `url.pathname`?","options":["`api.example.com`","`?category=home&page=4`","`/v1/products/32`","`''`"],"answer":2,"explanation":"`url.pathname` is `/v1/products/32`."}]
---
# Node Drill: Parsing URLs #67

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
