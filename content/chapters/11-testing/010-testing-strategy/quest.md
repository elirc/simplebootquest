---
slug: testing-strategy
title: Testing Strategy
type: quiz
xp: 15
questions:
  - prompt: "Which test type should you have the MOST of?"
    options: ["End-to-end (browser) tests", "Unit tests of pure logic", "Manual tests"]
    answer: 1
    explanation: "Unit tests are fast and precise. Integration and E2E tests are valuable but slower, so have fewer of them."
  - prompt: "A test calls your Express app with Supertest and checks a real test database. What kind of test is it?"
    options: ["Unit test", "Integration test", "Snapshot test"]
    answer: 1
  - prompt: "What should a good test assert on?"
    options: ["Private implementation details", "Observable behaviour: outputs, responses, what the user sees", "How many lines of code ran"]
    answer: 1
  - prompt: "React Testing Library encourages finding elements by…"
    options: ["CSS class names", "Accessible roles and text, like a user would (getByRole('button', { name: 'Save' }))", "Component instance internals"]
    answer: 1
  - prompt: "A test passes or fails randomly depending on timing. What is it called and what should you do?"
    options: ["A flaky test — find the nondeterminism (time, randomness, ordering, shared state) and remove it", "A smoke test — ignore it", "A golden test — rerun until green"]
    answer: 0
  - prompt: "100% code coverage means…"
    options: ["The code has no bugs", "Every line ran during tests — not that the right things were asserted", "You can stop writing tests"]
    answer: 1
resources: [{"title": "Kent C. Dodds: The Testing Trophy", "url": "https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications"}, {"title": "Vitest docs", "url": "https://vitest.dev"}]
---
# Testing Strategy

### The testing pyramid (or trophy)

```
        ▲  E2E (Playwright): a few critical user journeys
       ▲▲▲ Integration: API + DB, components + hooks
     ▲▲▲▲▲▲ Unit: pure functions, reducers, validators, services
```

- **Unit tests** check one function or module in isolation. Milliseconds each. Write lots.
- **Integration tests** check pieces working together (an HTTP request → handler → service → real test DB). They catch the bugs mocks hide.
- **End-to-end tests** drive a real browser through your deployed app. Slow and sometimes flaky, so save them for critical paths like signup and checkout.

### Arrange, Act, Assert

```ts
test('marks a todo as done', async () => {
  const todo = await createTodo({ title: 'x' });          // Arrange
  const res = await api.patch(`/todos/${todo.id}`).send({ done: true }); // Act
  expect(res.status).toBe(200);                           // Assert
  expect(res.body.done).toBe(true);
});
```

### Good tests are…

- **Deterministic:** inject the clock and randomness (you've done this all course!).
- **Independent:** each test sets up its own data, and the order doesn't matter.
- **Behaviour-focused:** if you refactor without changing behaviour, the tests shouldn't break.
- **Readable:** the test name says what should happen, e.g. `'returns 404 when the todo belongs to another user'`.
