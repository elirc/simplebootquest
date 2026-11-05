---
slug: "express-predict-5"
title: "What Does the Server Respond? #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /courses/4` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":9}`","`{\"n\":8}`"],"answer":3,"explanation":"The real response is `{\"n\":8}`."},{"prompt":"What JSON body does `GET /recipes/stats` get?\n\n```js\nconst app = express();\napp.get('/recipes/stats', (req, res) => res.json({ count: 1 }));\napp.get('/recipes/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{}`","`{\"count\":1}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What JSON body does `GET /api/events` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/events', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"base\":\"/apix\",\"path\":\"/eventsx\"}`","`{\"base\":\"/api\",\"path\":\"/events\"}`"],"answer":3,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/events\"}`."},{"prompt":"What status code does `DELETE /products` get?\n\n```js\nconst app = express();\napp.get('/products', (req, res) => res.json([]));\n```","options":["404","201","200","401"],"answer":0,"explanation":"The real response is 404."},{"prompt":"What status code does `GET /hotels` get?\n\n```js\nconst app = express();\napp.get('/hotels', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["503","200","400","422"],"answer":1,"explanation":"The real response is 200."}]
---
# What Does the Server Respond? #5

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
