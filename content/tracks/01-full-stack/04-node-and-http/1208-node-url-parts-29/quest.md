---
slug: "node-url-parts-29"
title: "Node Drill: Parsing URLs #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/flights/85?airline=skyteam&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`?airline=skyteam&page=2`","`/v1/flights/85`","`localhost`","`localhost:8080`"],"answer":1,"explanation":"`url.pathname` is `/v1/flights/85`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/recipes/47?cuisine=italian&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v2/recipes/47`","`api.example.com`","`?cuisine=italian&page=5`","`api.example.com:8080`"],"answer":1,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/repos/65?language=Go&page=1#top\");\n```\n\nWhat is `url.search`?","options":["`''`","`/v2/repos/65`","`localhost`","`?language=Go&page=1`"],"answer":3,"explanation":"`url.search` is `?language=Go&page=1`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/tasks/89?status=grace&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`shop.test:3000`","`shop.test`","`?status=grace&page=4`","`/v1/tasks/89`"],"answer":2,"explanation":"`url.search` is `?status=grace&page=4`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/products/11?category=home&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`/v2/products/11`","`''`","`localhost`","`?category=home&page=5`"],"answer":1,"explanation":"`url.port` is `''`."}]
---
# Node Drill: Parsing URLs #29

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
