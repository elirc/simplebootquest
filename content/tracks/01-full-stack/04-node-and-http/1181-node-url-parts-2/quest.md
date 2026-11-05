---
slug: "node-url-parts-2"
title: "Node Drill: Parsing URLs #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/songs/78?mood=dark&page=4#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test:3000`","`/v1/songs/78`","`?mood=dark&page=4`","`shop.test`"],"answer":1,"explanation":"`url.pathname` is `/v1/songs/78`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/employees/75?team=platform&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`/v1/employees/75`","`8080`","`shop.test:8080`","`?team=platform&page=2`"],"answer":1,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/books/69?genre=tech&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v2/books/69`","`api.example.com:3000`","`?genre=tech&page=2`","`api.example.com`"],"answer":3,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/products/46?category=home&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`?category=home&page=3`","`shop.test:3000`","`/v2/products/46`","`shop.test`"],"answer":1,"explanation":"`url.host` is `shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/orders/54?country=DE&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`?country=DE&page=2`","`/v1/orders/54`","`''`","`localhost`"],"answer":3,"explanation":"`url.hostname` is `localhost`."}]
---
# Node Drill: Parsing URLs #2

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
