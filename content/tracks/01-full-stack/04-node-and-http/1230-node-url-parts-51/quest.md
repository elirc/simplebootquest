---
slug: "node-url-parts-51"
title: "Node Drill: Parsing URLs #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/courses/40?level=advanced&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`''`","`api.example.com`","`?level=advanced&page=5`","`/v1/courses/40`"],"answer":2,"explanation":"`url.search` is `?level=advanced&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/employees/36?team=junior&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`?team=junior&page=5`","`shop.test`","`''`","`/v2/employees/36`"],"answer":1,"explanation":"`url.hostname` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/flights/90?airline=oneworld&page=4#top\");\n```\n\nWhat is `url.pathname`?","options":["`?airline=oneworld&page=4`","`shop.test:3000`","`/v2/flights/90`","`shop.test`"],"answer":2,"explanation":"`url.pathname` is `/v2/flights/90`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/repos/82?language=Go&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`''`","`/v1/repos/82`","`localhost`","`?language=Go&page=4`"],"answer":0,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/books/6?genre=fiction&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`?genre=fiction&page=5`","`localhost`","`localhost:3000`","`/v1/books/6`"],"answer":2,"explanation":"`url.host` is `localhost:3000`."}]
---
# Node Drill: Parsing URLs #51

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
