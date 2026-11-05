---
slug: "node-url-parts-89"
title: "Node Drill: Parsing URLs #89"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/books/21?genre=fiction&page=1#top\");\n```\n\nWhat is `url.search`?","options":["`api.example.com`","`?genre=fiction&page=1`","`api.example.com:8080`","`/v2/books/21`"],"answer":1,"explanation":"`url.search` is `?genre=fiction&page=1`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/products/10?category=home&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`api.example.com:3000`","`/v2/products/10`","`?category=home&page=1`","`api.example.com`"],"answer":3,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/tasks/73?status=doing&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`https://localhost:8080`","`localhost:8080`","`?status=doing&page=5`","`/v1/tasks/73`"],"answer":0,"explanation":"`url.origin` is `https://localhost:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/events/93?format=in-person&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`/v1/events/93`","`shop.test`","`''`","`?format=in-person&page=2`"],"answer":2,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/tickets/29?channel=urgent&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`?channel=urgent&page=5`","`shop.test:8080`","`shop.test`","`/v2/tickets/29`"],"answer":1,"explanation":"`url.host` is `shop.test:8080`."}]
---
# Node Drill: Parsing URLs #89

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
