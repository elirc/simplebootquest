---
slug: "node-url-parts-40"
title: "Node Drill: Parsing URLs #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/plants/35?light=bright&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`?light=bright&page=5`","`''`","`/v1/plants/35`","`api.example.com`"],"answer":0,"explanation":"`url.search` is `?light=bright&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/tasks/31?status=done&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`api.example.com:8080`","`/v1/tasks/31`","`api.example.com`","`?status=done&page=5`"],"answer":3,"explanation":"`url.search` is `?status=done&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/recipes/15?difficulty=medium&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`?difficulty=medium&page=3`","`shop.test:8080`","`https://shop.test:8080`","`/v2/recipes/15`"],"answer":2,"explanation":"`url.origin` is `https://shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/hotels/26?city=Kyoto&page=5#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost:3000`","`/v1/hotels/26`","`localhost`","`?city=Kyoto&page=5`"],"answer":1,"explanation":"`url.pathname` is `/v1/hotels/26`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/courses/81?level=beginner&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`/v2/courses/81`","`#top`","`api.example.com:8080`","`?level=beginner&page=1`"],"answer":1,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #40

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
