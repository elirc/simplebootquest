---
slug: "node-url-parts-87"
title: "Node Drill: Parsing URLs #87"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v2/cities/61?continent=Europe&page=3#top\");\n```\n\nWhat is `url.hash`?","options":["`?continent=Europe&page=3`","`localhost:3000`","`#top`","`/v2/cities/61`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/hotels/88?city=Lisbon&page=5#top\");\n```\n\nWhat is `url.port`?","options":["`''`","`localhost`","`?city=Lisbon&page=5`","`/v2/hotels/88`"],"answer":0,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/courses/82?level=intermediate&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`?level=intermediate&page=5`","`/v1/courses/82`","`shop.test:3000`","`shop.test`"],"answer":2,"explanation":"`url.host` is `shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/plants/56?light=medium&page=1#top\");\n```\n\nWhat is `url.pathname`?","options":["`?light=medium&page=1`","`/v1/plants/56`","`''`","`shop.test`"],"answer":1,"explanation":"`url.pathname` is `/v1/plants/56`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/workouts/19?kind=mobility&page=2#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/workouts/19`","`localhost`","`?kind=mobility&page=2`","`localhost:3000`"],"answer":3,"explanation":"`url.host` is `localhost:3000`."}]
---
# Node Drill: Parsing URLs #87

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
