---
slug: "node-url-parts-69"
title: "Node Drill: Parsing URLs #69"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/employees/28?level=platform&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`api.example.com:3000`","`?level=platform&page=5`","`/v1/employees/28`","`api.example.com`"],"answer":0,"explanation":"`url.host` is `api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/events/90?format=in-person&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`?format=in-person&page=3`","`/v1/events/90`","`shop.test:8080`","`https://shop.test:8080`"],"answer":3,"explanation":"`url.origin` is `https://shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/workouts/46?kind=cardio&page=3#top\");\n```\n\nWhat is `url.pathname`?","options":["`?kind=cardio&page=3`","`localhost`","`''`","`/v1/workouts/46`"],"answer":3,"explanation":"`url.pathname` is `/v1/workouts/46`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/employees/92?team=mid&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`/v1/employees/92`","`#top`","`shop.test`","`?team=mid&page=4`"],"answer":1,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/movies/46?genre=comedy&page=3#top\");\n```\n\nWhat is `url.search`?","options":["`/v1/movies/46`","`api.example.com`","`api.example.com:8080`","`?genre=comedy&page=3`"],"answer":3,"explanation":"`url.search` is `?genre=comedy&page=3`."}]
---
# Node Drill: Parsing URLs #69

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
