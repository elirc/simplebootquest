---
slug: "node-url-parts-65"
title: "Node Drill: Parsing URLs #65"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/movies/79?genre=comedy&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`shop.test`","`?genre=comedy&page=2`","`/v2/movies/79`","`shop.test:3000`"],"answer":1,"explanation":"`url.search` is `?genre=comedy&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/repos/3?language=Go&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`''`","`/v2/repos/3`","`shop.test`","`?language=Go&page=3`"],"answer":3,"explanation":"`url.search` is `?language=Go&page=3`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/recipes/26?difficulty=mexican&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`shop.test:8080`","`?difficulty=mexican&page=5`","`shop.test`","`/v1/recipes/26`"],"answer":0,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/cities/18?continent=Oceania&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`?continent=Oceania&page=5`","`/v1/cities/18`","`https://localhost:8080`","`localhost:8080`"],"answer":2,"explanation":"`url.origin` is `https://localhost:8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/employees/12?team=junior&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`?team=junior&page=2`","`/v1/employees/12`","`api.example.com`","`''`"],"answer":1,"explanation":"`url.pathname` is `/v1/employees/12`."}]
---
# Node Drill: Parsing URLs #65

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
