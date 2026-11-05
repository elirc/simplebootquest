---
slug: "node-url-parts-42"
title: "Node Drill: Parsing URLs #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/products/72?category=tech&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`shop.test:8080`","`/v1/products/72`","`?category=tech&page=2`","`8080`"],"answer":3,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/flights/12?airline=star&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`api.example.com`","`api.example.com:8080`","`?airline=star&page=5`","`/v2/flights/12`"],"answer":2,"explanation":"`url.search` is `?airline=star&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/hotels/73?city=Lisbon&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`''`","`/v1/hotels/73`","`localhost`","`?city=Lisbon&page=1`"],"answer":2,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/tickets/14?channel=low&page=5#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test`","`''`","`?channel=low&page=5`","`/v2/tickets/14`"],"answer":3,"explanation":"`url.pathname` is `/v2/tickets/14`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/products/46?category=office&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test`","`''`","`/v1/products/46`","`?category=office&page=1`"],"answer":2,"explanation":"`url.pathname` is `/v1/products/46`."}]
---
# Node Drill: Parsing URLs #42

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
