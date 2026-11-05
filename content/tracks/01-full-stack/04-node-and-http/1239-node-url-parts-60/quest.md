---
slug: "node-url-parts-60"
title: "Node Drill: Parsing URLs #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/plants/10?light=medium&page=4#top\");\n```\n\nWhat is `url.pathname`?","options":["`?light=medium&page=4`","`localhost`","`localhost:8080`","`/v2/plants/10`"],"answer":3,"explanation":"`url.pathname` is `/v2/plants/10`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/tasks/56?assignee=linus&page=2#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com:3000`","`?assignee=linus&page=2`","`/v1/tasks/56`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/cars/8?fuel=diesel&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`/v1/cars/8`","`localhost`","`?fuel=diesel&page=4`","`localhost:3000`"],"answer":2,"explanation":"`url.search` is `?fuel=diesel&page=4`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/students/7?course=design&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/students/7`","`api.example.com:3000`","`?course=design&page=3`","`api.example.com`"],"answer":1,"explanation":"`url.host` is `api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/cities/87?continent=Americas&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`/v1/cities/87`","`?continent=Americas&page=3`","`localhost:8080`","`8080`"],"answer":3,"explanation":"`url.port` is `8080`."}]
---
# Node Drill: Parsing URLs #60

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
