---
slug: "node-url-parts-22"
title: "Node Drill: Parsing URLs #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/employees/86?team=mid&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`?team=mid&page=2`","`shop.test`","`shop.test:3000`","`/v2/employees/86`"],"answer":0,"explanation":"`url.search` is `?team=mid&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/cars/71?fuel=hybrid&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`https://api.example.com`","`api.example.com`","`/v1/cars/71`","`?fuel=hybrid&page=5`"],"answer":0,"explanation":"`url.origin` is `https://api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/students/23?course=web&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`https://api.example.com:3000`","`?course=web&page=5`","`/v1/students/23`","`api.example.com:3000`"],"answer":0,"explanation":"`url.origin` is `https://api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/cities/66?continent=Africa&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`shop.test:8080`","`/v2/cities/66`","`?continent=Africa&page=5`","`8080`"],"answer":3,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/transactions/79?category=travel&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test`","`''`","`?category=travel&page=3`","`/v1/transactions/79`"],"answer":3,"explanation":"`url.pathname` is `/v1/transactions/79`."}]
---
# Node Drill: Parsing URLs #22

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
