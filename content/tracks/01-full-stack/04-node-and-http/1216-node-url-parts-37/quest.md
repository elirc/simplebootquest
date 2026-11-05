---
slug: "node-url-parts-37"
title: "Node Drill: Parsing URLs #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/movies/88?genre=thriller&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`?genre=thriller&page=2`","`localhost`","`localhost:8080`","`/v1/movies/88`"],"answer":3,"explanation":"`url.pathname` is `/v1/movies/88`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/books/87?genre=tech&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`?genre=tech&page=2`","`localhost`","`localhost:8080`","`/v1/books/87`"],"answer":1,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/hotels/32?city=Lisbon&page=4#top\");\n```\n\nWhat is `url.host`?","options":["`?city=Lisbon&page=4`","`/v2/hotels/32`","`shop.test`","`shop.test:8080`"],"answer":3,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/repos/66?language=Python&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`/v1/repos/66`","`localhost:8080`","`?language=Python&page=1`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/hotels/85?city=Lisbon&page=3#top\");\n```\n\nWhat is `url.hostname`?","options":["`shop.test`","`/v1/hotels/85`","`''`","`?city=Lisbon&page=3`"],"answer":0,"explanation":"`url.hostname` is `shop.test`."}]
---
# Node Drill: Parsing URLs #37

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
