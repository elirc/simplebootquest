---
slug: "node-url-parts-81"
title: "Node Drill: Parsing URLs #81"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/events/57?format=in-person&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`api.example.com`","`?format=in-person&page=5`","`/v2/events/57`","`api.example.com:8080`"],"answer":3,"explanation":"`url.host` is `api.example.com:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/songs/92?mood=Kairo&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`/v1/songs/92`","`shop.test:3000`","`?mood=Kairo&page=4`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/employees/64?level=product&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`api.example.com`","`/v2/employees/64`","`?level=product&page=4`","`''`"],"answer":2,"explanation":"`url.search` is `?level=product&page=4`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/books/66?genre=classic&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`?genre=classic&page=1`","`''`","`/v2/books/66`","`localhost`"],"answer":3,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/recipes/42?difficulty=mexican&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost`","`localhost:8080`","`/v1/recipes/42`","`?difficulty=mexican&page=3`"],"answer":2,"explanation":"`url.pathname` is `/v1/recipes/42`."}]
---
# Node Drill: Parsing URLs #81

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
