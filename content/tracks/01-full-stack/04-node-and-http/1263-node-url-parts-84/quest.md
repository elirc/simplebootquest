---
slug: "node-url-parts-84"
title: "Node Drill: Parsing URLs #84"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/products/39?category=office&page=5#top\");\n```\n\nWhat is `url.hash`?","options":["`?category=office&page=5`","`/v1/products/39`","`api.example.com`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/recipes/46?difficulty=easy&page=4#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v2/recipes/46`","`shop.test:8080`","`shop.test`","`?difficulty=easy&page=4`"],"answer":2,"explanation":"`url.hostname` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/tickets/13?priority=phone&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`localhost`","`localhost:8080`","`/v1/tickets/13`","`?priority=phone&page=3`"],"answer":3,"explanation":"`url.search` is `?priority=phone&page=3`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/flights/62?airline=oneworld&page=5#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test`","`?airline=oneworld&page=5`","`shop.test:8080`","`/v2/flights/62`"],"answer":3,"explanation":"`url.pathname` is `/v2/flights/62`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/students/71?course=web&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v1/students/71`","`''`","`?course=web&page=3`","`shop.test`"],"answer":0,"explanation":"`url.pathname` is `/v1/students/71`."}]
---
# Node Drill: Parsing URLs #84

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
