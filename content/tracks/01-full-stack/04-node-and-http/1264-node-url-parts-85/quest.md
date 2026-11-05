---
slug: "node-url-parts-85"
title: "Node Drill: Parsing URLs #85"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/employees/96?team=data&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`shop.test:3000`","`shop.test`","`/v2/employees/96`","`?team=data&page=5`"],"answer":1,"explanation":"`url.hostname` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/tasks/43?status=grace&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`3000`","`api.example.com:3000`","`?status=grace&page=3`","`/v1/tasks/43`"],"answer":0,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/tickets/31?priority=low&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com:8080`","`/v2/tickets/31`","`#top`","`?priority=low&page=4`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/books/57?genre=sci-fi&page=5#top\");\n```\n\nWhat is `url.pathname`?","options":["`''`","`?genre=sci-fi&page=5`","`/v2/books/57`","`api.example.com`"],"answer":2,"explanation":"`url.pathname` is `/v2/books/57`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/transactions/65?category=salary&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`?category=salary&page=1`","`api.example.com:8080`","`#top`","`/v1/transactions/65`"],"answer":2,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #85

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
