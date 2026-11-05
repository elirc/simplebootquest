---
slug: "node-url-parts-82"
title: "Node Drill: Parsing URLs #82"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/tasks/72?assignee=doing&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`shop.test:3000`","`shop.test`","`/v2/tasks/72`","`?assignee=doing&page=3`"],"answer":3,"explanation":"`url.search` is `?assignee=doing&page=3`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/employees/78?team=product&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`?team=product&page=5`","`/v1/employees/78`","`''`","`api.example.com`"],"answer":0,"explanation":"`url.search` is `?team=product&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/tasks/7?status=done&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`api.example.com:8080`","`/v2/tasks/7`","`?status=done&page=5`","`8080`"],"answer":3,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/transactions/64?category=salary&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`/v1/transactions/64`","`''`","`api.example.com`","`?category=salary&page=1`"],"answer":1,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/repos/60?language=Python&page=3#top\");\n```\n\nWhat is `url.hostname`?","options":["`''`","`/v1/repos/60`","`localhost`","`?language=Python&page=3`"],"answer":2,"explanation":"`url.hostname` is `localhost`."}]
---
# Node Drill: Parsing URLs #82

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
