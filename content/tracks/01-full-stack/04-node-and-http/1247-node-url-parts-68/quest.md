---
slug: "node-url-parts-68"
title: "Node Drill: Parsing URLs #68"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/cities/13?continent=Oceania&page=2#top\");\n```\n\nWhat is `url.hash`?","options":["`?continent=Oceania&page=2`","`api.example.com:8080`","`/v2/cities/13`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/events/14?format=hybrid&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`shop.test:8080`","`/v1/events/14`","`shop.test`","`?format=hybrid&page=3`"],"answer":0,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/tasks/89?assignee=todo&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`?assignee=todo&page=1`","`shop.test`","`/v2/tasks/89`","`''`"],"answer":1,"explanation":"`url.hostname` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/hotels/45?city=Toronto&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`shop.test`","`?city=Toronto&page=1`","`shop.test:3000`","`/v1/hotels/45`"],"answer":0,"explanation":"`url.hostname` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/movies/34?genre=sci-fi&page=2#top\");\n```\n\nWhat is `url.origin`?","options":["`localhost`","`https://localhost`","`?genre=sci-fi&page=2`","`/v2/movies/34`"],"answer":1,"explanation":"`url.origin` is `https://localhost`."}]
---
# Node Drill: Parsing URLs #68

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
