---
slug: "node-url-parts-18"
title: "Node Drill: Parsing URLs #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/songs/51?mood=happy&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`?mood=happy&page=1`","`shop.test`","`''`","`/v1/songs/51`"],"answer":2,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/students/6?course=data&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`?course=data&page=2`","`8080`","`shop.test:8080`","`/v2/students/6`"],"answer":1,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/transactions/85?category=food&page=2#top\");\n```\n\nWhat is `url.host`?","options":["`?category=food&page=2`","`shop.test:3000`","`/v2/transactions/85`","`shop.test`"],"answer":1,"explanation":"`url.host` is `shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/flights/21?airline=skyteam&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`api.example.com`","`''`","`/v1/flights/21`","`?airline=skyteam&page=5`"],"answer":3,"explanation":"`url.search` is `?airline=skyteam&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/students/28?course=design&page=4#top\");\n```\n\nWhat is `url.hostname`?","options":["`api.example.com:8080`","`?course=design&page=4`","`api.example.com`","`/v2/students/28`"],"answer":2,"explanation":"`url.hostname` is `api.example.com`."}]
---
# Node Drill: Parsing URLs #18

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
