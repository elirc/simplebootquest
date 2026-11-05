---
slug: "node-url-parts-15"
title: "Node Drill: Parsing URLs #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/cities/92?continent=Americas&page=4#top\");\n```\n\nWhat is `url.host`?","options":["`''`","`?continent=Americas&page=4`","`localhost`","`/v1/cities/92`"],"answer":2,"explanation":"`url.host` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/movies/85?genre=drama&page=3#top\");\n```\n\nWhat is `url.hash`?","options":["`?genre=drama&page=3`","`/v2/movies/85`","`api.example.com:3000`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/hotels/77?city=Lisbon&page=3#top\");\n```\n\nWhat is `url.hostname`?","options":["`localhost`","`/v2/hotels/77`","`?city=Lisbon&page=3`","`''`"],"answer":0,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/flights/53?airline=star&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`shop.test:3000`","`?airline=star&page=2`","`shop.test`","`/v2/flights/53`"],"answer":2,"explanation":"`url.hostname` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/movies/81?genre=sci-fi&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`?genre=sci-fi&page=1`","`/v1/movies/81`","`#top`","`localhost`"],"answer":2,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #15

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
