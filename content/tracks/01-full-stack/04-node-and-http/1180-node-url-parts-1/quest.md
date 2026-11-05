---
slug: "node-url-parts-1"
title: "Node Drill: Parsing URLs #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/students/6?course=design&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`''`","`/v2/students/6`","`?course=design&page=3`","`api.example.com`"],"answer":0,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/transactions/64?category=rent&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`localhost:8080`","`8080`","`?category=rent&page=3`","`/v2/transactions/64`"],"answer":1,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/employees/25?level=junior&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`/v1/employees/25`","`?level=junior&page=4`","`localhost:3000`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/courses/97?level=beginner&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`?level=beginner&page=1`","`/v1/courses/97`","`shop.test:3000`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/books/48?genre=sci-fi&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/books/48`","`localhost`","`''`","`?genre=sci-fi&page=3`"],"answer":1,"explanation":"`url.host` is `localhost`."}]
---
# Node Drill: Parsing URLs #1

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
