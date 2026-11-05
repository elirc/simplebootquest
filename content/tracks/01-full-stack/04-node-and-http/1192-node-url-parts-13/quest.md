---
slug: "node-url-parts-13"
title: "Node Drill: Parsing URLs #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/books/53?genre=tech&page=2#top\");\n```\n\nWhat is `url.origin`?","options":["`api.example.com:8080`","`?genre=tech&page=2`","`/v1/books/53`","`https://api.example.com:8080`"],"answer":3,"explanation":"`url.origin` is `https://api.example.com:8080`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v1/tasks/83?assignee=todo&page=5#top\");\n```\n\nWhat is `url.host`?","options":["`''`","`api.example.com`","`/v1/tasks/83`","`?assignee=todo&page=5`"],"answer":1,"explanation":"`url.host` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v1/movies/68?genre=sci-fi&page=4#top\");\n```\n\nWhat is `url.host`?","options":["`shop.test`","`?genre=sci-fi&page=4`","`/v1/movies/68`","`''`"],"answer":0,"explanation":"`url.host` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/courses/57?level=intermediate&page=5#top\");\n```\n\nWhat is `url.origin`?","options":["`shop.test:3000`","`?level=intermediate&page=5`","`https://shop.test:3000`","`/v2/courses/57`"],"answer":2,"explanation":"`url.origin` is `https://shop.test:3000`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/courses/1?level=beginner&page=3#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`?level=beginner&page=3`","`/v2/courses/1`","`shop.test:3000`"],"answer":0,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #13

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
