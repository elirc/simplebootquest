---
slug: "express-predict-69"
title: "What Does the Server Respond? #69"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /courses/2` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{\"n\":\"22\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":22}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":\"22\"}`."},{"prompt":"What JSON body does `GET /flights/4` get?\n\n```js\nconst app = express();\napp.use('/flights', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/flights/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/4\"}`","`{\"seen\":\"/4x\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/4\"}`."},{"prompt":"What JSON body does `GET /courses/stats` get?\n\n```js\nconst app = express();\napp.get('/courses/stats', (req, res) => res.json({ count: 4 }));\napp.get('/courses/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":4}`","`{\"count\":5}`"],"answer":2,"explanation":"The real response is `{\"count\":4}`."},{"prompt":"What status code does `GET /products` get?\n\n```js\nconst app = express();\napp.get('/products', async () => {\n  throw new Error('db down');\n});\n```","options":["500","200","401","503"],"answer":0,"explanation":"The real response is 500."},{"prompt":"What status code does `DELETE /plants` get?\n\n```js\nconst app = express();\napp.get('/plants', (req, res) => res.json([]));\n```","options":["404","503","500","400"],"answer":0,"explanation":"The real response is 404."}]
---
# What Does the Server Respond? #69

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
