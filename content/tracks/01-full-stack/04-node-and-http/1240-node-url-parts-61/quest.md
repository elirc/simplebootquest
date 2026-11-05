---
slug: "node-url-parts-61"
title: "Node Drill: Parsing URLs #61"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/students/75?course=design&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`/v2/students/75`","`api.example.com`","`?course=design&page=1`","`api.example.com:8080`"],"answer":3,"explanation":"`url.host` is `api.example.com:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/hotels/29?city=Lisbon&page=1#top\");\n```\n\nWhat is `url.search`?","options":["`shop.test`","`?city=Lisbon&page=1`","`shop.test:3000`","`/v1/hotels/29`"],"answer":1,"explanation":"`url.search` is `?city=Lisbon&page=1`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/orders/70?country=cancelled&page=3#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`?country=cancelled&page=3`","`localhost:3000`","`/v1/orders/70`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/workouts/42?kind=strength&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v1/workouts/42`","`api.example.com:8080`","`api.example.com`","`?kind=strength&page=5`"],"answer":2,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/plants/80?light=medium&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`?light=medium&page=1`","`3000`","`/v2/plants/80`","`shop.test:3000`"],"answer":1,"explanation":"`url.port` is `3000`."}]
---
# Node Drill: Parsing URLs #61

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
