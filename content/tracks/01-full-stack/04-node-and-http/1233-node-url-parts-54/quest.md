---
slug: "node-url-parts-54"
title: "Node Drill: Parsing URLs #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/transactions/76?category=rent&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v1/transactions/76`","`localhost`","`?category=rent&page=3`","`localhost:3000`"],"answer":0,"explanation":"`url.pathname` is `/v1/transactions/76`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/repos/61?language=Python&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`?language=Python&page=3`","`localhost`","`/v2/repos/61`","`localhost:8080`"],"answer":0,"explanation":"`url.search` is `?language=Python&page=3`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/transactions/61?category=rent&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`?category=rent&page=1`","`''`","`/v1/transactions/61`","`localhost`"],"answer":3,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/cars/81?fuel=diesel&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`localhost:8080`","`8080`","`/v1/cars/81`","`?fuel=diesel&page=5`"],"answer":1,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/workouts/26?kind=strength&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`api.example.com`","`?kind=strength&page=1`","`/v1/workouts/26`","`api.example.com:8080`"],"answer":0,"explanation":"`url.hostname` is `api.example.com`."}]
---
# Node Drill: Parsing URLs #54

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
