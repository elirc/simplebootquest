---
slug: "node-url-parts-83"
title: "Node Drill: Parsing URLs #83"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/movies/76?genre=sci-fi&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com:3000`","`#top`","`/v1/movies/76`","`?genre=sci-fi&page=1`"],"answer":1,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/cars/30?fuel=hybrid&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`''`","`?fuel=hybrid&page=5`","`/v2/cars/30`","`localhost`"],"answer":3,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/flights/99?airline=skyteam&page=5#top\");\n```\n\nWhat is `url.hash`?","options":["`?airline=skyteam&page=5`","`api.example.com:3000`","`#top`","`/v2/flights/99`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/students/90?course=web&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`?course=web&page=3`","`api.example.com:8080`","`api.example.com`","`/v2/students/90`"],"answer":1,"explanation":"`url.host` is `api.example.com:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/employees/75?level=platform&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`?level=platform&page=4`","`shop.test:3000`","`3000`","`/v1/employees/75`"],"answer":2,"explanation":"`url.port` is `3000`."}]
---
# Node Drill: Parsing URLs #83

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
