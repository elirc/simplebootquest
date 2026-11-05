---
slug: "express-predict-99"
title: "What Does the Server Respond? #99"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /recipes/3` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res) => res.json({ n: Number(req.params.id) + 3 }));\n```","options":["`{\"n\":7}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":6}`","`{}`"],"answer":2,"explanation":"The real response is `{\"n\":6}`."},{"prompt":"What status code does `POST /cities` get?\n\n```js\nconst app = express();\napp.post('/cities', (req, res) => res.sendStatus(204));\n```","options":["404","204","401","201"],"answer":1,"explanation":"The real response is 204."},{"prompt":"What JSON body does `GET /hotels/3` get?\n\n```js\nconst app = express();\napp.get('/hotels/:id', (req, res, next) => {\n  if (req.params.id === '3') return next();\n  res.json({ from: 'first' });\n});\napp.get('/hotels/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"secondx\"}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What status code does `GET /recipes` get?\n\n```js\nconst app = express();\napp.get('/recipes', async () => {\n  throw new Error('db down');\n});\n```","options":["500","404","400","201"],"answer":0,"explanation":"The real response is 500."},{"prompt":"What JSON body does `GET /cars/1` get?\n\n```js\nconst app = express();\napp.use('/cars', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/cars/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/1\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/1x\"}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/1\"}`."}]
---
# What Does the Server Respond? #99

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
