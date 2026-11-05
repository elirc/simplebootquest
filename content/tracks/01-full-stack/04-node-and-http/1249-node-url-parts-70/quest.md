---
slug: "node-url-parts-70"
title: "Node Drill: Parsing URLs #70"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/hotels/47?city=Toronto&page=4#top\");\n```\n\nWhat is `url.origin`?","options":["`/v2/hotels/47`","`?city=Toronto&page=4`","`shop.test:8080`","`https://shop.test:8080`"],"answer":3,"explanation":"`url.origin` is `https://shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/courses/77?level=intermediate&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`?level=intermediate&page=4`","`localhost`","`/v1/courses/77`","`localhost:8080`"],"answer":0,"explanation":"`url.search` is `?level=intermediate&page=4`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/plants/24?light=low&page=1#top\");\n```\n\nWhat is `url.origin`?","options":["`/v2/plants/24`","`?light=low&page=1`","`localhost:8080`","`https://localhost:8080`"],"answer":3,"explanation":"`url.origin` is `https://localhost:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/workouts/71?kind=cardio&page=1#top\");\n```\n\nWhat is `url.search`?","options":["`?kind=cardio&page=1`","`''`","`shop.test`","`/v1/workouts/71`"],"answer":0,"explanation":"`url.search` is `?kind=cardio&page=1`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/movies/49?genre=sci-fi&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v2/movies/49`","`?genre=sci-fi&page=1`","`localhost:8080`","`localhost`"],"answer":3,"explanation":"`url.hostname` is `localhost`."}]
---
# Node Drill: Parsing URLs #70

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
