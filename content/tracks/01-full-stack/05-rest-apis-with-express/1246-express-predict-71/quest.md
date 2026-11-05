---
slug: "express-predict-71"
title: "What Does the Server Respond? #71"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /hotels/3` get?\n\n```js\nconst app = express();\napp.get('/hotels/:id', (req, res) => res.json({ n: Number(req.params.id) + 3 }));\n```","options":["`{\"n\":7}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":6}`"],"answer":3,"explanation":"The real response is `{\"n\":6}`."},{"prompt":"What status code does `POST /products` get?\n\n```js\nconst app = express();\napp.post('/products', (req, res) => res.sendStatus(204));\n```","options":["400","204","200","503"],"answer":1,"explanation":"The real response is 204."},{"prompt":"What JSON body does `GET /recipes/3` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{\"n\":\"33\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":33}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What JSON body does `POST /plants` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/plants', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":null}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":0,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What JSON body does `GET /songs/3` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res) => res.json({ n: Number(req.params.id) + 3 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":6}`","`{\"n\":7}`"],"answer":2,"explanation":"The real response is `{\"n\":6}`."}]
---
# What Does the Server Respond? #71

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
