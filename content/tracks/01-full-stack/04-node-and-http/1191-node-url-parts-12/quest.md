---
slug: "node-url-parts-12"
title: "Node Drill: Parsing URLs #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/events/91?format=in-person&page=4#top\");\n```\n\nWhat is `url.origin`?","options":["`https://shop.test:8080`","`?format=in-person&page=4`","`shop.test:8080`","`/v2/events/91`"],"answer":0,"explanation":"`url.origin` is `https://shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/cars/31?fuel=hybrid&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`?fuel=hybrid&page=5`","`shop.test:3000`","`shop.test`","`/v2/cars/31`"],"answer":0,"explanation":"`url.search` is `?fuel=hybrid&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/students/74?course=data&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com:8080`","`/v2/students/74`","`#top`","`?course=data&page=4`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/recipes/98?difficulty=hard&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`?difficulty=hard&page=2`","`3000`","`/v2/recipes/98`","`shop.test:3000`"],"answer":1,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/students/17?course=data&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test:3000`","`?course=data&page=1`","`shop.test`","`/v1/students/17`"],"answer":3,"explanation":"`url.pathname` is `/v1/students/17`."}]
---
# Node Drill: Parsing URLs #12

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
