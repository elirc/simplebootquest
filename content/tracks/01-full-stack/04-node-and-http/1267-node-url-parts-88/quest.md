---
slug: "node-url-parts-88"
title: "Node Drill: Parsing URLs #88"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/cities/27?continent=Asia&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/cities/27`","`api.example.com`","`api.example.com:8080`","`?continent=Asia&page=5`"],"answer":2,"explanation":"`url.host` is `api.example.com:8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/students/84?course=web&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`?course=web&page=3`","`api.example.com`","`/v1/students/84`","`api.example.com:8080`"],"answer":0,"explanation":"`url.search` is `?course=web&page=3`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/orders/49?status=cancelled&page=3#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v2/orders/49`","`shop.test`","`shop.test:3000`","`?status=cancelled&page=3`"],"answer":1,"explanation":"`url.hostname` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/books/25?genre=classic&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`/v1/books/25`","`?genre=classic&page=4`","`#top`","`api.example.com:8080`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/courses/4?level=advanced&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`?level=advanced&page=1`","`8080`","`shop.test:8080`","`/v2/courses/4`"],"answer":1,"explanation":"`url.port` is `8080`."}]
---
# Node Drill: Parsing URLs #88

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
