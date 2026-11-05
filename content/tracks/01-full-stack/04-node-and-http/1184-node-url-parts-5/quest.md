---
slug: "node-url-parts-5"
title: "Node Drill: Parsing URLs #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/songs/97?artist=calm&page=4#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v2/songs/97`","`?artist=calm&page=4`","`api.example.com`","`api.example.com:3000`"],"answer":2,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/students/76?course=web&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`shop.test:3000`","`/v2/students/76`","`3000`","`?course=web&page=2`"],"answer":2,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/movies/5?genre=drama&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`api.example.com`","`/v1/movies/5`","`?genre=drama&page=4`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/products/37?category=home&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`''`","`?category=home&page=5`","`shop.test`","`/v2/products/37`"],"answer":2,"explanation":"`url.host` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/events/81?format=online&page=4#top\");\n```\n\nWhat is `url.host`?","options":["`/v2/events/81`","`localhost`","`?format=online&page=4`","`''`"],"answer":1,"explanation":"`url.host` is `localhost`."}]
---
# Node Drill: Parsing URLs #5

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
