---
slug: "express-predict-51"
title: "What Does the Server Respond? #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /cars/stats` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/cars/stats', (req, res) => res.json({ count: 4 }));\n```","options":["`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /hotels/2` get?\n\n```js\nconst app = express();\napp.get('/hotels/:id', (req, res) => res.json({ n: Number(req.params.id) + 2 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":4}`","`{\"n\":5}`"],"answer":2,"explanation":"The real response is `{\"n\":4}`."},{"prompt":"What status code does `GET /plants` get?\n\n```js\nconst app = express();\napp.get('/plants', async () => {\n  throw new Error('db down');\n});\n```","options":["500","201","401","200"],"answer":0,"explanation":"The real response is 500."},{"prompt":"What JSON body does `GET /workouts/2` get?\n\n```js\nconst app = express();\napp.get('/workouts/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"22\"}`","`{\"n\":22}`"],"answer":2,"explanation":"The real response is `{\"n\":\"22\"}`."},{"prompt":"What JSON body does `GET /repos/4` get?\n\n```js\nconst app = express();\napp.get('/repos/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":8}`","`{}`","`{\"n\":9}`"],"answer":1,"explanation":"The real response is `{\"n\":8}`."}]
---
# What Does the Server Respond? #51

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
