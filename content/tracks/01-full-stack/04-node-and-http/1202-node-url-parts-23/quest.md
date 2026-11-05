---
slug: "node-url-parts-23"
title: "Node Drill: Parsing URLs #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/repos/67?language=Python&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`shop.test`","`?language=Python&page=1`","`''`","`/v2/repos/67`"],"answer":3,"explanation":"`url.pathname` is `/v2/repos/67`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/orders/49?status=shipped&page=5#top\");\n```\n\nWhat is `url.hash`?","options":["`localhost:3000`","`/v2/orders/49`","`#top`","`?status=shipped&page=5`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/flights/86?airline=oneworld&page=5#top\");\n```\n\nWhat is `url.hash`?","options":["`localhost:8080`","`/v1/flights/86`","`?airline=oneworld&page=5`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/tickets/37?channel=email&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`?channel=email&page=2`","`localhost`","`/v1/tickets/37`","`localhost:3000`"],"answer":1,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/plants/72?light=medium&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`api.example.com`","`?light=medium&page=1`","`/v1/plants/72`","`api.example.com:8080`"],"answer":2,"explanation":"`url.pathname` is `/v1/plants/72`."}]
---
# Node Drill: Parsing URLs #23

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
