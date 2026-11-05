---
slug: "express-predict-53"
title: "What Does the Server Respond? #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /hotels/5` get?\n\n```js\nconst app = express();\napp.get('/hotels/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"55\"}`","`{\"n\":55}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":\"55\"}`."},{"prompt":"What status code does `POST /songs` get?\n\n```js\nconst app = express();\napp.post('/songs', (req, res) => res.sendStatus(202));\n```","options":["201","202","503","401"],"answer":1,"explanation":"The real response is 202."},{"prompt":"What status code does `GET /products` get?\n\n```js\nconst app = express();\napp.get('/products', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["400","503","500","201"],"answer":1,"explanation":"The real response is 503."},{"prompt":"What status code does `GET /repos` get?\n\n```js\nconst app = express();\napp.get('/repos', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["204","401","503","404"],"answer":2,"explanation":"The real response is 503."},{"prompt":"What JSON body does `GET /plants/5` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{\"n\":\"55\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":55}`"],"answer":0,"explanation":"The real response is `{\"n\":\"55\"}`."}]
---
# What Does the Server Respond? #53

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
