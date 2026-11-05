---
slug: "node-url-parts-57"
title: "Node Drill: Parsing URLs #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/orders/8?country=cancelled&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`shop.test`","`/v1/orders/8`","`shop.test:8080`","`?country=cancelled&page=5`"],"answer":2,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/transactions/95?category=rent&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`?category=rent&page=1`","`/v2/transactions/95`","`shop.test:8080`","`shop.test`"],"answer":2,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/tickets/43?channel=low&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost:8080`","`localhost`","`?channel=low&page=2`","`/v2/tickets/43`"],"answer":3,"explanation":"`url.pathname` is `/v2/tickets/43`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/movies/62?genre=sci-fi&page=4#top\");\n```\n\nWhat is `url.origin`?","options":["`https://api.example.com`","`api.example.com`","`?genre=sci-fi&page=4`","`/v1/movies/62`"],"answer":0,"explanation":"`url.origin` is `https://api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/tickets/45?channel=urgent&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`api.example.com:3000`","`/v2/tickets/45`","`api.example.com`","`?channel=urgent&page=5`"],"answer":3,"explanation":"`url.search` is `?channel=urgent&page=5`."}]
---
# Node Drill: Parsing URLs #57

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
