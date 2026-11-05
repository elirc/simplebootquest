---
slug: "node-url-parts-34"
title: "Node Drill: Parsing URLs #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/tickets/11?channel=low&page=2#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com:8080`","`?channel=low&page=2`","`/v2/tickets/11`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/employees/7?team=data&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v1/employees/7`","`shop.test`","`''`","`?team=data&page=3`"],"answer":0,"explanation":"`url.pathname` is `/v1/employees/7`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/tickets/18?channel=phone&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost`","`?channel=phone&page=2`","`localhost:8080`","`/v2/tickets/18`"],"answer":3,"explanation":"`url.pathname` is `/v2/tickets/18`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/courses/88?level=beginner&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/courses/88`","`api.example.com:3000`","`api.example.com`","`?level=beginner&page=5`"],"answer":1,"explanation":"`url.host` is `api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/students/69?course=web&page=2#top\");\n```\n\nWhat is `url.hash`?","options":["`shop.test`","`/v2/students/69`","`?course=web&page=2`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #34

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
