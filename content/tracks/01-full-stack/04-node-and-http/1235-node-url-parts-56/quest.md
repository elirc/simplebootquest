---
slug: "node-url-parts-56"
title: "Node Drill: Parsing URLs #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://localhost/v1/recipes/58?difficulty=asian&page=3#top\");\n```\n\nWhat is `url.hostname`?","options":["`''`","`?difficulty=asian&page=3`","`/v1/recipes/58`","`localhost`"],"answer":3,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/students/50?course=design&page=4#top\");\n```\n\nWhat is `url.hostname`?","options":["`/v1/students/50`","`localhost:8080`","`?course=design&page=4`","`localhost`"],"answer":3,"explanation":"`url.hostname` is `localhost`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/employees/94?level=platform&page=4#top\");\n```\n\nWhat is `url.search`?","options":["`/v2/employees/94`","`?level=platform&page=4`","`''`","`shop.test`"],"answer":1,"explanation":"`url.search` is `?level=platform&page=4`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v1/movies/96?genre=thriller&page=3#top\");\n```\n\nWhat is `url.hash`?","options":["`/v1/movies/96`","`api.example.com:3000`","`#top`","`?genre=thriller&page=3`"],"answer":2,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/employees/5?level=platform&page=3#top\");\n```\n\nWhat is `url.port`?","options":["`?level=platform&page=3`","`''`","`/v2/employees/5`","`shop.test`"],"answer":1,"explanation":"`url.port` is `''`."}]
---
# Node Drill: Parsing URLs #56

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
