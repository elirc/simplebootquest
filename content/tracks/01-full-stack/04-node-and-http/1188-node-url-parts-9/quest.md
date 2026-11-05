---
slug: "node-url-parts-9"
title: "Node Drill: Parsing URLs #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/plants/56?light=medium&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`''`","`?light=medium&page=1`","`localhost`","`/v1/plants/56`"],"answer":3,"explanation":"`url.pathname` is `/v1/plants/56`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/tasks/67?status=linus&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`/v2/tasks/67`","`3000`","`?status=linus&page=5`","`api.example.com:3000`"],"answer":1,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/plants/60?light=medium&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com`","`?light=medium&page=4`","`/v2/plants/60`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/products/34?category=office&page=4#top\");\n```\n\nWhat is `url.pathname`?","options":["`?category=office&page=4`","`localhost`","`/v1/products/34`","`localhost:8080`"],"answer":2,"explanation":"`url.pathname` is `/v1/products/34`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/employees/96?level=product&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`3000`","`/v1/employees/96`","`shop.test:3000`","`?level=product&page=3`"],"answer":0,"explanation":"`url.port` is `3000`."}]
---
# Node Drill: Parsing URLs #9

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
