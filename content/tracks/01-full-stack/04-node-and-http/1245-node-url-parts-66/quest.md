---
slug: "node-url-parts-66"
title: "Node Drill: Parsing URLs #66"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/cities/89?continent=Africa&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`localhost`","`?continent=Africa&page=5`","`/v2/cities/89`","`localhost:3000`"],"answer":1,"explanation":"`url.search` is `?continent=Africa&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/movies/28?genre=thriller&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost:8080`","`/v2/movies/28`","`?genre=thriller&page=2`","`localhost`"],"answer":3,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/plants/89?light=bright&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`/v2/plants/89`","`api.example.com:3000`","`?light=bright&page=5`","`https://api.example.com:3000`"],"answer":3,"explanation":"`url.origin` is `https://api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/events/85?format=hybrid&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`shop.test:8080`","`/v1/events/85`","`shop.test`","`?format=hybrid&page=5`"],"answer":0,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/plants/32?light=low&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`/v2/plants/32`","`?light=low&page=4`","`8080`","`api.example.com:8080`"],"answer":2,"explanation":"`url.port` is `8080`."}]
---
# Node Drill: Parsing URLs #66

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
