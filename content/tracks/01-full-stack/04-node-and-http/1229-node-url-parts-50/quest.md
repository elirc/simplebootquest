---
slug: "node-url-parts-50"
title: "Node Drill: Parsing URLs #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/tasks/25?assignee=linus&page=1#top\");\n```\n\nWhat is `url.origin`?","options":["`/v2/tasks/25`","`localhost`","`https://localhost`","`?assignee=linus&page=1`"],"answer":2,"explanation":"`url.origin` is `https://localhost`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/orders/56?country=UK&page=1#top\");\n```\n\nWhat is `url.origin`?","options":["`https://localhost:3000`","`localhost:3000`","`?country=UK&page=1`","`/v2/orders/56`"],"answer":0,"explanation":"`url.origin` is `https://localhost:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/plants/33?light=low&page=2#top\");\n```\n\nWhat is `url.origin`?","options":["`/v1/plants/33`","`https://localhost:3000`","`localhost:3000`","`?light=low&page=2`"],"answer":1,"explanation":"`url.origin` is `https://localhost:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/courses/6?level=intermediate&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`8080`","`?level=intermediate&page=5`","`shop.test:8080`","`/v2/courses/6`"],"answer":0,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/flights/10?airline=skyteam&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v1/flights/10`","`localhost`","`?airline=skyteam&page=1`","`localhost:3000`"],"answer":1,"explanation":"`url.hostname` is `localhost`."}]
---
# Node Drill: Parsing URLs #50

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
