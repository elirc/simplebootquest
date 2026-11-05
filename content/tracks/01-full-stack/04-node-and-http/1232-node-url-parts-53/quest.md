---
slug: "node-url-parts-53"
title: "Node Drill: Parsing URLs #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/hotels/19?city=Toronto&page=4#top\");\n```\n\nWhat is `url.origin`?","options":["`localhost`","`?city=Toronto&page=4`","`https://localhost`","`/v2/hotels/19`"],"answer":2,"explanation":"`url.origin` is `https://localhost`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/books/57?genre=tech&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/books/57`","`shop.test`","`shop.test:8080`","`?genre=tech&page=3`"],"answer":2,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/products/4?category=home&page=5#top\");\n```\n\nWhat is `url.search`?","options":["`shop.test`","`''`","`?category=home&page=5`","`/v1/products/4`"],"answer":2,"explanation":"`url.search` is `?category=home&page=5`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/movies/18?genre=drama&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`/v1/movies/18`","`?genre=drama&page=5`","`https://api.example.com:8080`","`api.example.com:8080`"],"answer":2,"explanation":"`url.origin` is `https://api.example.com:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v2/hotels/49?city=Kyoto&page=2#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`?city=Kyoto&page=2`","`/v2/hotels/49`","`localhost`"],"answer":0,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #53

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
