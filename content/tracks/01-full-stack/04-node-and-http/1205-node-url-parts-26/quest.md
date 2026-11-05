---
slug: "node-url-parts-26"
title: "Node Drill: Parsing URLs #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v1/books/31?genre=fiction&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`/v1/books/31`","`shop.test`","`shop.test:3000`","`?genre=fiction&page=2`"],"answer":3,"explanation":"`url.search` is `?genre=fiction&page=2`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/movies/98?genre=thriller&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`/v1/movies/98`","`api.example.com`","`?genre=thriller&page=3`","`''`"],"answer":3,"explanation":"`url.port` is `''`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/tasks/78?assignee=done&page=4#top\");\n```\n\nWhat is `url.pathname`?","options":["`?assignee=done&page=4`","`api.example.com:3000`","`/v2/tasks/78`","`api.example.com`"],"answer":2,"explanation":"`url.pathname` is `/v2/tasks/78`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/recipes/51?cuisine=easy&page=1#top\");\n```\n\nWhat is `url.port`?","options":["`shop.test:8080`","`?cuisine=easy&page=1`","`8080`","`/v1/recipes/51`"],"answer":2,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/workouts/47?kind=cardio&page=2#top\");\n```\n\nWhat is `url.search`?","options":["`shop.test:8080`","`?kind=cardio&page=2`","`shop.test`","`/v1/workouts/47`"],"answer":1,"explanation":"`url.search` is `?kind=cardio&page=2`."}]
---
# Node Drill: Parsing URLs #26

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
