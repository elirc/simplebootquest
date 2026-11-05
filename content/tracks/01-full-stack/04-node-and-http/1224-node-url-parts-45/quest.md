---
slug: "node-url-parts-45"
title: "Node Drill: Parsing URLs #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/products/38?category=office&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`3000`","`/v2/products/38`","`api.example.com:3000`","`?category=office&page=5`"],"answer":0,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/plants/66?light=bright&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost`","`/v2/plants/66`","`localhost:3000`","`?light=bright&page=1`"],"answer":1,"explanation":"`url.pathname` is `/v2/plants/66`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/workouts/78?kind=cardio&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`?kind=cardio&page=3`","`shop.test`","`shop.test:8080`","`/v1/workouts/78`"],"answer":2,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/courses/94?level=beginner&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`/v1/courses/94`","`api.example.com`","`https://api.example.com`","`?level=beginner&page=3`"],"answer":2,"explanation":"`url.origin` is `https://api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/orders/81?country=DE&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v1/orders/81`","`localhost`","`?country=DE&page=2`","`''`"],"answer":0,"explanation":"`url.pathname` is `/v1/orders/81`."}]
---
# Node Drill: Parsing URLs #45

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
