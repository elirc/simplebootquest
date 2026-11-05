---
slug: "node-url-parts-16"
title: "Node Drill: Parsing URLs #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/courses/22?level=advanced&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`''`","`/v2/courses/22`","`?level=advanced&page=3`","`shop.test`"],"answer":3,"explanation":"`url.host` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/books/25?genre=classic&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`3000`","`shop.test:3000`","`/v2/books/25`","`?genre=classic&page=5`"],"answer":0,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/flights/74?airline=star&page=2#top\");\n```\n\nWhat is `url.hash`?","options":["`shop.test:3000`","`/v2/flights/74`","`?airline=star&page=2`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/products/96?category=office&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`api.example.com`","`/v2/products/96`","`api.example.com:8080`","`?category=office&page=5`"],"answer":2,"explanation":"`url.host` is `api.example.com:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/plants/62?light=medium&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v1/plants/62`","`localhost:8080`","`?light=medium&page=3`","`localhost`"],"answer":0,"explanation":"`url.pathname` is `/v1/plants/62`."}]
---
# Node Drill: Parsing URLs #16

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
