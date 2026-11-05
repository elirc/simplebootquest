---
slug: "node-url-parts-44"
title: "Node Drill: Parsing URLs #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/transactions/76?category=fun&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`/v2/transactions/76`","`shop.test`","`?category=fun&page=3`","`shop.test:8080`"],"answer":3,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/employees/34?team=mid&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`localhost`","`/v1/employees/34`","`?team=mid&page=2`","`localhost:8080`"],"answer":2,"explanation":"`url.search` is `?team=mid&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/songs/98?mood=The%20Pines&page=4#top\");\n```\n\nWhat is `url.origin`?","options":["`/v1/songs/98`","`?mood=The%20Pines&page=4`","`https://shop.test:3000`","`shop.test:3000`"],"answer":2,"explanation":"`url.origin` is `https://shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/products/51?category=home&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test:3000`","`?category=home&page=3`","`/v2/products/51`","`shop.test`"],"answer":2,"explanation":"`url.pathname` is `/v2/products/51`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/tickets/29?priority=low&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`?priority=low&page=3`","`''`","`/v1/tickets/29`","`localhost`"],"answer":0,"explanation":"`url.search` is `?priority=low&page=3`."}]
---
# Node Drill: Parsing URLs #44

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
