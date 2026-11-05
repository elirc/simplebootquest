---
slug: "node-url-parts-35"
title: "Node Drill: Parsing URLs #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/events/36?format=in-person&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`https://shop.test:8080`","`shop.test:8080`","`/v1/events/36`","`?format=in-person&page=5`"],"answer":0,"explanation":"`url.origin` is `https://shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/hotels/4?city=Toronto&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`/v2/hotels/4`","`https://api.example.com:3000`","`api.example.com:3000`","`?city=Toronto&page=5`"],"answer":1,"explanation":"`url.origin` is `https://api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/flights/89?airline=oneworld&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`localhost:8080`","`/v1/flights/89`","`?airline=oneworld&page=4`","`8080`"],"answer":3,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/products/49?category=tech&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`/v1/products/49`","`''`","`?category=tech&page=1`","`api.example.com`"],"answer":1,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/workouts/26?kind=strength&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`3000`","`/v1/workouts/26`","`shop.test:3000`","`?kind=strength&page=4`"],"answer":0,"explanation":"`url.port` is `3000`."}]
---
# Node Drill: Parsing URLs #35

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
