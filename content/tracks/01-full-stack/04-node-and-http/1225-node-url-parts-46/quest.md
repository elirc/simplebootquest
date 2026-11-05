---
slug: "node-url-parts-46"
title: "Node Drill: Parsing URLs #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/books/47?genre=tech&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com:3000`","`/v2/books/47`","`#top`","`?genre=tech&page=1`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/students/94?course=data&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost:3000`","`?course=data&page=5`","`localhost`","`/v1/students/94`"],"answer":2,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/hotels/21?city=Lisbon&page=3#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com`","`?city=Lisbon&page=3`","`#top`","`/v2/hotels/21`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/plants/98?light=bright&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`shop.test:3000`","`/v1/plants/98`","`?light=bright&page=1`","`shop.test`"],"answer":0,"explanation":"`url.host` is `shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/students/16?course=web&page=2#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/students/16`","`?course=web&page=2`","`''`","`localhost`"],"answer":3,"explanation":"`url.host` is `localhost`."}]
---
# Node Drill: Parsing URLs #46

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
