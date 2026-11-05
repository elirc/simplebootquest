---
slug: "node-url-parts-78"
title: "Node Drill: Parsing URLs #78"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/hotels/53?city=Lisbon&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`/v2/hotels/53`","`api.example.com:3000`","`3000`","`?city=Lisbon&page=2`"],"answer":2,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/cities/14?continent=Europe&page=1#top\");\n```\n\nWhat is `url.origin`?","options":["`https://localhost`","`/v1/cities/14`","`localhost`","`?continent=Europe&page=1`"],"answer":0,"explanation":"`url.origin` is `https://localhost`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/events/81?format=hybrid&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`?format=hybrid&page=5`","`shop.test:3000`","`shop.test`","`/v2/events/81`"],"answer":1,"explanation":"`url.host` is `shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/students/69?course=design&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`?course=design&page=1`","`/v1/students/69`","`''`","`shop.test`"],"answer":2,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/courses/80?level=beginner&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`api.example.com`","`https://api.example.com`","`/v2/courses/80`","`?level=beginner&page=3`"],"answer":1,"explanation":"`url.origin` is `https://api.example.com`."}]
---
# Node Drill: Parsing URLs #78

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
