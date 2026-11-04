---
slug: crud-layered-architecture
title: Layered Architecture
type: quiz
xp: 15
questions:
  - prompt: "Which layer should know about `req`, `res` and status codes?"
    options: ["The handler/route layer", "The service layer", "The repository layer"]
    answer: 0
  - prompt: "Where does a rule like 'a user can have at most 100 open todos' belong?"
    options: ["In the React form", "In the service layer", "In the Express router config"]
    answer: 1
    explanation: "Business rules belong in services, so every caller (HTTP, CLI, background job) enforces them."
  - prompt: "Why pass the repository *into* the service (`createTodoService(repo)`) instead of importing Prisma directly?"
    options: ["It's faster at runtime", "Tests can pass a fake in-memory repository — no database needed", "Prisma requires it"]
    answer: 1
  - prompt: "A client sends `PATCH /todos/5` but todo 5 belongs to another user. What's the safest response?"
    options: ["200 and update it", "404 Not Found (don't reveal that it exists)", "500"]
    answer: 1
    explanation: "Returning 404 for resources you can't access avoids leaking which ids exist. 403 is also acceptable when existence isn't secret."
  - prompt: "What should a list endpoint return when there are no results?"
    options: ["404 Not Found", "200 with an empty array", "204 No Content"]
    answer: 1
resources: [{"title": "Martin Fowler: Service Layer", "url": "https://martinfowler.com/eaaCatalog/serviceLayer.html"}, {"title": "The Clean Architecture (overview)", "url": "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"}]
---
# Layered Architecture

As an API grows, putting everything inside route handlers turns into spaghetti. Split responsibilities instead:

| Layer | Knows about | Doesn't know about |
|-------|-------------|--------------------|
| **Handler** (route) | HTTP: `req`, `res`, status codes, parsing params | SQL, business rules |
| **Service** | Business rules: validation, permissions, "not found" | HTTP, SQL |
| **Repository** | The database (Prisma) | HTTP, business rules |

```ts
// handler: translate HTTP ⇄ service calls
router.patch('/:id', async (req, res) => {
  const todo = await todoService.update(req.user.id, Number(req.params.id), req.body);
  res.json(todo);
});

// service: rules
async update(userId, id, input) {
  const data = TodoPatch.parse(input);           // validation
  const todo = await repo.findById(id);
  if (!todo || todo.ownerId !== userId) throw new NotFoundError('Todo');
  return repo.update(id, data);
}
```

**Why bother?**

- **Testability:** services can be tested with a fake repository, with no database or HTTP involved.
- **Reuse:** the same service can power the REST API, a CLI, and background jobs.
- **Change:** swapping Prisma for another tool only touches repositories.

Don't over-engineer a 3-route app. But once a codebase has a few resources, this split pays for itself quickly.
