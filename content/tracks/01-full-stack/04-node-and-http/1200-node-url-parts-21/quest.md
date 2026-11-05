---
slug: "node-url-parts-21"
title: "Node Drill: Parsing URLs #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Node & HTTP Drills"
questions: [{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/tasks/76?assignee=grace&page=3#top\");\n```\n\nWhat is `url.origin`?","options":["`?assignee=grace&page=3`","`https://api.example.com:3000`","`/v2/tasks/76`","`api.example.com:3000`"],"answer":1,"explanation":"`url.origin` is `https://api.example.com:3000`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:3000/v2/cities/26?continent=Americas&page=2#top\");\n```\n\nWhat is `url.hostname`?","options":["`api.example.com`","`/v2/cities/26`","`?continent=Americas&page=2`","`api.example.com:3000`"],"answer":0,"explanation":"`url.hostname` is `api.example.com`."},{"prompt":"```js\nconst url = new URL(\"https://localhost:3000/v1/workouts/34?kind=cardio&page=3#top\");\n```\n\nWhat is `url.hash`?","options":["`#top`","`?kind=cardio&page=3`","`localhost:3000`","`/v1/workouts/34`"],"answer":0,"explanation":"`url.hash` is `#top`."},{"prompt":"```js\nconst url = new URL(\"https://shop.test:3000/v2/cars/22?fuel=electric&page=1#top\");\n```\n\nWhat is `url.hostname`?","options":["`shop.test`","`shop.test:3000`","`/v2/cars/22`","`?fuel=electric&page=1`"],"answer":0,"explanation":"`url.hostname` is `shop.test`."},{"prompt":"```js\nconst url = new URL(\"https://api.example.com:8080/v1/plants/86?light=medium&page=1#top\");\n```\n\nWhat is `url.hash`?","options":["`?light=medium&page=1`","`#top`","`api.example.com:8080`","`/v1/plants/86`"],"answer":1,"explanation":"`url.hash` is `#top`."}]
---
# Node Drill: Parsing URLs #21

The WHATWG `URL` class (global in Node and browsers) parses URLs for you. `pathname` excludes the query, `search` includes the `?`, `host` includes the port, and `hostname` doesn't.
