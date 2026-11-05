---
slug: "node-url-parts-90"
title: "Node Drill: Parsing URLs #90"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://shop.test/v2/students/81?course=web&page=4#top\");\n```\n\nWhat is `url.hash`?","options":["`?course=web&page=4`","`shop.test`","`/v2/students/81`","`#top`"],"answer":3,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com/v2/orders/76?country=pending&page=5#top\");\n```\n\nWhat is `url.hostname`?","options":["`''`","`?country=pending&page=5`","`api.example.com`","`/v2/orders/76`"],"answer":2,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/workouts/40?kind=cardio&page=2#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`/v2/workouts/40`","`localhost:8080`","`?kind=cardio&page=2`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v2/workouts/10?kind=cardio&page=2#top\");\n```\n\nWhat is `url.port`?","options":["`/v2/workouts/10`","`localhost:8080`","`8080`","`?kind=cardio&page=2`"],"answer":2,"explanation":"`url.port` is `8080`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:8080/v1/workouts/73?kind=mobility&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`localhost:8080`","`/v1/workouts/73`","`https://localhost:8080`","`?kind=mobility&page=3`"],"answer":2,"explanation":"`url.origin` is `https://localhost:8080`."}]
---
# Node Drill: Parsing URLs #90

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
