---
slug: "node-url-parts-59"
title: "Node Drill: Parsing URLs #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/students/70?course=design&page=4#top\");\n```\n\nWhat is `url.hostname`?","options":["`''`","`api.example.com`","`/v2/students/70`","`?course=design&page=4`"],"answer":1,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/tasks/64?assignee=doing&page=5#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`/v1/tasks/64`","`?assignee=doing&page=5`","`api.example.com:3000`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/transactions/94?category=fun&page=3#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost`","`localhost:8080`","`/v2/transactions/94`","`?category=fun&page=3`"],"answer":0,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/events/6?format=in-person&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`''`","`?format=in-person&page=2`","`/v2/events/6`","`api.example.com`"],"answer":1,"explanation":"`url.search` is `?format=in-person&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/books/35?genre=tech&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/books/35`","`?genre=tech&page=5`","`''`","`shop.test`"],"answer":3,"explanation":"`url.host` is `shop.test`."}]
---
# Node Drill: Parsing URLs #59

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
