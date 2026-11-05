---
slug: "node-url-parts-30"
title: "Node Drill: Parsing URLs #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/recipes/10?difficulty=medium&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`/v2/recipes/10`","`shop.test:8080`","`?difficulty=medium&page=1`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/hotels/82?city=Toronto&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`''`","`/v1/hotels/82`","`api.example.com`","`?city=Toronto&page=2`"],"answer":2,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/songs/13?mood=The%20Pines&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`/v2/songs/13`","`?mood=The%20Pines&page=3`","`localhost:8080`","`8080`"],"answer":3,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/tasks/1?status=todo&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`?status=todo&page=3`","`shop.test:3000`","`/v1/tasks/1`","`https://shop.test:3000`"],"answer":3,"explanation":"`url.origin` is `https://shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/employees/4?level=data&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`''`","`/v2/employees/4`","`?level=data&page=4`","`localhost`"],"answer":2,"explanation":"`url.search` is `?level=data&page=4`."}]
---
# Node Drill: Parsing URLs #30

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
