---
slug: "express-predict-36"
title: "What Does the Server Respond? #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /songs/stats` get?\n\n```js\nconst app = express();\napp.get('/songs/stats', (req, res) => res.json({ count: 1 }));\napp.get('/songs/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"count\":1}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":2}`"],"answer":1,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What JSON body does `POST /repos` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/repos', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":null}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"id\":\"stats\"}`"],"answer":0,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What JSON body does `GET /students/stats` get?\n\n```js\nconst app = express();\napp.get('/students/stats', (req, res) => res.json({ count: 1 }));\napp.get('/students/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"count\":1}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":2}`"],"answer":1,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What JSON body does `GET /hotels/4` get?\n\n```js\nconst app = express();\napp.get('/hotels/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{}`","`{\"n\":\"44\"}`","`{\"n\":44}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What status code does `GET /orders` get?\n\n```js\nconst app = express();\napp.get('/orders', async () => {\n  throw new Error('db down');\n});\n```","options":["201","503","500","401"],"answer":2,"explanation":"The real response is 500."}]
---
# What Does the Server Respond? #36

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
