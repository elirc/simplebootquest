---
slug: "node-url-parts-25"
title: "Node Drill: Parsing URLs #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/movies/72?genre=sci-fi&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`/v1/movies/72`","`https://shop.test:3000`","`shop.test:3000`","`?genre=sci-fi&page=3`"],"answer":1,"explanation":"`url.origin` is `https://shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/orders/29?country=pending&page=1#top\");\n```\n\nWhat is `url.origin`?","options":["`https://localhost:8080`","`localhost:8080`","`?country=pending&page=1`","`/v1/orders/29`"],"answer":0,"explanation":"`url.origin` is `https://localhost:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/cities/93?continent=Asia&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`?continent=Asia&page=1`","`''`","`/v1/cities/93`","`shop.test`"],"answer":1,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/tickets/19?channel=phone&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`/v1/tickets/19`","`8080`","`?channel=phone&page=4`","`localhost:8080`"],"answer":1,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/songs/70?artist=happy&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`?artist=happy&page=5`","`''`","`shop.test`","`/v1/songs/70`"],"answer":2,"explanation":"`url.host` is `shop.test`."}]
---
# Node Drill: Parsing URLs #25

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
