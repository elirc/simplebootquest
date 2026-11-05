---
slug: "node-url-parts-74"
title: "Node Drill: Parsing URLs #74"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/workouts/44?kind=cardio&page=2#top\");\n```\n\nWhat is `url.origin`?","options":["`https://shop.test:8080`","`shop.test:8080`","`/v1/workouts/44`","`?kind=cardio&page=2`"],"answer":0,"explanation":"`url.origin` is `https://shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/movies/11?genre=thriller&page=5#top\");\n```\n\nWhat is `url.pathname`?","options":["`localhost`","`localhost:3000`","`?genre=thriller&page=5`","`/v1/movies/11`"],"answer":3,"explanation":"`url.pathname` is `/v1/movies/11`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/workouts/5?kind=cardio&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`/v2/workouts/5`","`?kind=cardio&page=4`","`3000`","`shop.test:3000`"],"answer":2,"explanation":"`url.port` is `3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/tasks/24?status=linus&page=1#top\");\n```\n\nWhat is `url.host`?","options":["`''`","`shop.test`","`?status=linus&page=1`","`/v2/tasks/24`"],"answer":1,"explanation":"`url.host` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/plants/14?light=bright&page=4#top\");\n```\n\nWhat is `url.port`?","options":["`?light=bright&page=4`","`api.example.com`","`''`","`/v2/plants/14`"],"answer":2,"explanation":"`url.port` is `''`."}]
---
# Node Drill: Parsing URLs #74

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
