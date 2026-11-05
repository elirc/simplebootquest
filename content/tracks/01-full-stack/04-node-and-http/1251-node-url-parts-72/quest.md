---
slug: "node-url-parts-72"
title: "Node Drill: Parsing URLs #72"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/employees/87?team=senior&page=1#top\");\n```\n\nWhat is `url.origin`?","options":["`localhost:3000`","`https://localhost:3000`","`/v1/employees/87`","`?team=senior&page=1`"],"answer":1,"explanation":"`url.origin` is `https://localhost:3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/products/46?category=home&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com:8080`","`#top`","`/v2/products/46`","`?category=home&page=4`"],"answer":1,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/students/69?course=data&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v1/students/69`","`?course=data&page=5`","`localhost`","`''`"],"answer":2,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/repos/75?language=Go&page=2#top\");\n```\n\nWhat is `url.host`?","options":["`api.example.com`","`''`","`/v1/repos/75`","`?language=Go&page=2`"],"answer":0,"explanation":"`url.host` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/students/80?course=design&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`''`","`api.example.com`","`/v2/students/80`","`?course=design&page=5`"],"answer":1,"explanation":"`url.hostname` is `api.example.com`."}]
---
# Node Drill: Parsing URLs #72

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
