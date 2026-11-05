---
slug: "node-url-parts-64"
title: "Node Drill: Parsing URLs #64"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/orders/12?country=shipped&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`?country=shipped&page=1`","`/v1/orders/12`","`api.example.com:8080`","`api.example.com`"],"answer":2,"explanation":"`url.host` is `api.example.com:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/tasks/60?status=doing&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`shop.test`","`shop.test:3000`","`?status=doing&page=1`","`/v1/tasks/60`"],"answer":1,"explanation":"`url.host` is `shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/courses/32?level=beginner&page=2#top\");\n```\n\nWhat is `url.origin`?","options":["`?level=beginner&page=2`","`/v2/courses/32`","`https://shop.test`","`shop.test`"],"answer":2,"explanation":"`url.origin` is `https://shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/cities/23?continent=Europe&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost:8080`","`?continent=Europe&page=3`","`localhost`","`/v1/cities/23`"],"answer":3,"explanation":"`url.pathname` is `/v1/cities/23`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/plants/93?light=bright&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`shop.test:8080`","`shop.test`","`/v1/plants/93`","`?light=bright&page=5`"],"answer":0,"explanation":"`url.host` is `shop.test:8080`."}]
---
# Node Drill: Parsing URLs #64

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
