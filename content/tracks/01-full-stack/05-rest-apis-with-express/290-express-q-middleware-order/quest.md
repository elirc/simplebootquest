---
slug: "express-q-middleware-order"
title: "Quiz: Middleware Order"
type: "quiz"
xp: 15
optional: true
section: "Practice"
resources: [{"title": "Express: Using middleware", "url": "https://expressjs.com/en/guide/using-middleware.html"}]
questions: [{"prompt": "`req.body` is undefined in your POST handler. Most likely cause?", "options": ["The client sent no body", "express.json() is registered after the route (or not at all)", "Express 5 removed req.body"], "answer": 1}, {"prompt": "How does Express know a middleware is an error handler?", "options": ["It is named errorHandler", "It has four parameters (err, req, res, next)", "It is registered with app.error()"], "answer": 1}, {"prompt": "Where should the 404 \"not found\" middleware go?", "options": ["First", "After all the routes, before the error handler", "After the error handler"], "answer": 1}, {"prompt": "A handler calls `res.json()` and then `next()`. What can go wrong?", "options": ["Nothing", "A later middleware may try to send a second response: \"Cannot set headers after they are sent\"", "The response is sent twice successfully"], "answer": 1}, {"prompt": "`app.use(\"/api/todos\", requireAuth, todosRouter)` means…", "options": ["requireAuth runs only for the first request", "requireAuth runs before every route in todosRouter", "todosRouter runs before requireAuth"], "answer": 1}, {"prompt": "In Express 5, an async handler throws. What happens?", "options": ["The process crashes", "The rejection is forwarded to the error-handling middleware", "The request hangs forever"], "answer": 1}]
---
# Quiz: Middleware Order

Express runs middleware **in the order you register it**. Order bugs are some of the most common Express bugs:

```js
app.use(helmet());                 // 1. security headers on everything
app.use(cors({ origin, credentials: true }));
app.use(express.json({ limit: '100kb' }));  // 2. parse bodies before routes read req.body
app.use(cookieParser());
app.use(requestLogger);
app.use('/api/auth', authRouter);  // 3. routes
app.use('/api/todos', requireAuth, todosRouter);
app.use(notFound);                 // 4. nothing matched → 404
app.use(errorHandler);             // 5. error handler LAST, with 4 parameters
```

An error handler is recognised by having **four** parameters `(err, req, res, next)`. In Express 5, a rejected promise from an async handler is passed to it automatically.
