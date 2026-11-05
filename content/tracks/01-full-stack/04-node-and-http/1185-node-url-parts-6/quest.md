---
slug: "node-url-parts-6"
title: "Node Drill: Parsing URLs #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/tickets/16?priority=normal&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`shop.test`","`/v1/tickets/16`","`?priority=normal&page=4`","`''`"],"answer":3,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/transactions/43?category=salary&page=4#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v1/transactions/43`","`api.example.com`","`?category=salary&page=4`","`api.example.com:3000`"],"answer":0,"explanation":"`url.pathname` is `/v1/transactions/43`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/hotels/68?city=Lisbon&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`localhost`","`/v1/hotels/68`","`''`","`?city=Lisbon&page=2`"],"answer":3,"explanation":"`url.search` is `?city=Lisbon&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/books/57?genre=fiction&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`''`","`?genre=fiction&page=5`","`/v1/books/57`","`shop.test`"],"answer":3,"explanation":"`url.hostname` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/transactions/77?category=fun&page=1#top\");\n```\n\nWhat is `url.search`?","options":["`api.example.com:8080`","`?category=fun&page=1`","`/v2/transactions/77`","`api.example.com`"],"answer":1,"explanation":"`url.search` is `?category=fun&page=1`."}]
---
# Node Drill: Parsing URLs #6

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
