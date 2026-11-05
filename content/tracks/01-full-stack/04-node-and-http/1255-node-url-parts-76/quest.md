---
slug: "node-url-parts-76"
title: "Node Drill: Parsing URLs #76"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/events/40?format=online&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`/v2/events/40`","`3000`","`shop.test:3000`","`?format=online&page=5`"],"answer":1,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/books/83?genre=classic&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`?genre=classic&page=1`","`#top`","`api.example.com`","`/v1/books/83`"],"answer":1,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/transactions/79?category=rent&page=4#top\");\n```\n\nWhat is `url.pathname`?","options":["`?category=rent&page=4`","`api.example.com`","`/v2/transactions/79`","`api.example.com:3000`"],"answer":2,"explanation":"`url.pathname` is `/v2/transactions/79`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/courses/86?level=beginner&page=2#top\");\n```\n\nWhat is `url.hash`?","options":["`?level=beginner&page=2`","`shop.test`","`#top`","`/v2/courses/86`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/employees/5?level=platform&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`?level=platform&page=3`","`https://api.example.com:8080`","`api.example.com:8080`","`/v1/employees/5`"],"answer":1,"explanation":"`url.origin` is `https://api.example.com:8080`."}]
---
# Node Drill: Parsing URLs #76

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
