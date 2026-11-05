---
slug: "node-url-parts-58"
title: "Node Drill: Parsing URLs #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v1/workouts/34?kind=mobility&page=3#top\");\n```\n\nWhat is `url.host`?","options":["`/v1/workouts/34`","`?kind=mobility&page=3`","`shop.test:8080`","`shop.test`"],"answer":2,"explanation":"`url.host` is `shop.test:8080`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:8080/v2/courses/71?level=intermediate&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`shop.test`","`shop.test:8080`","`?level=intermediate&page=4`","`/v2/courses/71`"],"answer":2,"explanation":"`url.search` is `?level=intermediate&page=4`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/students/39?course=data&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`?course=data&page=1`","`/v2/students/39`","`#top`","`api.example.com:3000`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/courses/1?level=beginner&page=2#top\");\n```\n\nWhat is `url.pathname`?","options":["`/v1/courses/1`","`?level=beginner&page=2`","`api.example.com`","`''`"],"answer":0,"explanation":"`url.pathname` is `/v1/courses/1`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v2/books/89?genre=tech&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`api.example.com:8080`","`#top`","`?genre=tech&page=1`","`/v2/books/89`"],"answer":1,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #58

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
