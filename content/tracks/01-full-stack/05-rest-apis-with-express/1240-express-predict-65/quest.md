---
slug: "express-predict-65"
title: "What Does the Server Respond? #65"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /books/5` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{}`","`{\"n\":55}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"55\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"55\"}`."},{"prompt":"What JSON body does `GET /plants/stats` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/plants/stats', (req, res) => res.json({ count: 4 }));\n```","options":["`{\"id\":\"statsx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /api/employees` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/employees', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"base\":\"/api\",\"path\":\"/employees\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/apix\",\"path\":\"/employeesx\"}`"],"answer":0,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/employees\"}`."},{"prompt":"What JSON body does `GET /api/products` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/products', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"base\":\"/apix\",\"path\":\"/productsx\"}`","`{\"base\":\"/api\",\"path\":\"/products\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/products\"}`."},{"prompt":"What JSON body does `GET /cities/stats` get?\n\n```js\nconst app = express();\napp.get('/cities/stats', (req, res) => res.json({ count: 1 }));\napp.get('/cities/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{\"count\":1}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"count\":1}`."}]
---
# What Does the Server Respond? #65

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
