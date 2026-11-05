---
slug: "node-url-parts-52"
title: "Node Drill: Parsing URLs #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/tasks/57?status=linus&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`3000`","`/v1/tasks/57`","`shop.test:3000`","`?status=linus&page=4`"],"answer":0,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/orders/64?status=UK&page=4#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost`","`/v2/orders/64`","`?status=UK&page=4`","`localhost:3000`"],"answer":0,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/tickets/81?channel=chat&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`api.example.com`","`/v2/tickets/81`","`?channel=chat&page=5`","`https://api.example.com`"],"answer":3,"explanation":"`url.origin` is `https://api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/repos/31?language=TypeScript&page=5#top\");\n```\n\nWhat is `url.hash`?","options":["`localhost`","`/v1/repos/31`","`#top`","`?language=TypeScript&page=5`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/employees/15?team=mid&page=3#top\");\n```\n\nWhat is `url.hash`?","options":["`?team=mid&page=3`","`api.example.com`","`/v1/employees/15`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #52

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
