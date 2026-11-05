---
slug: "node-url-parts-71"
title: "Node Drill: Parsing URLs #71"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/tasks/61?status=ada&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`/v1/tasks/61`","`api.example.com:3000`","`https://api.example.com:3000`","`?status=ada&page=3`"],"answer":2,"explanation":"`url.origin` is `https://api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/students/3?course=design&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`localhost:3000`","`localhost`","`?course=design&page=2`","`/v1/students/3`"],"answer":2,"explanation":"`url.search` is `?course=design&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/transactions/47?category=salary&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`/v2/transactions/47`","`''`","`api.example.com`","`?category=salary&page=5`"],"answer":3,"explanation":"`url.search` is `?category=salary&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/orders/86?country=US&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test`","`/v1/orders/86`","`?country=US&page=1`","`''`"],"answer":1,"explanation":"`url.pathname` is `/v1/orders/86`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/movies/8?genre=drama&page=2#top\");\n```\n\nWhat is `url.host`?","options":["`api.example.com:8080`","`api.example.com`","`?genre=drama&page=2`","`/v1/movies/8`"],"answer":0,"explanation":"`url.host` is `api.example.com:8080`."}]
---
# Node Drill: Parsing URLs #71

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
