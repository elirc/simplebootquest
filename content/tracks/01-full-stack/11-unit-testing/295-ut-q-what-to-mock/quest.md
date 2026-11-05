---
slug: "ut-q-what-to-mock"
title: "Quiz: What to Mock (and What Not To)"
type: "quiz"
xp: 15
resources: [{"title": "Martin Fowler: Mocks Aren't Stubs", "url": "https://martinfowler.com/articles/mocksArentStubs.html"}]
questions: [{"prompt": "Which should usually be mocked in a unit test?", "options": ["A pure `calculateTotal` function", "The HTTP call to a payment provider", "Array.prototype.map"], "answer": 1}, {"prompt": "A test mocks every helper the function calls and asserts each was called. What is the risk?", "options": ["None", "The test is tied to the implementation: refactors break it even when the behaviour is unchanged", "It is too fast"], "answer": 1}, {"prompt": "What is a \"fake\" (as opposed to a mock)?", "options": ["A test that always passes", "A simple working implementation, like an in-memory repository", "A mocked HTTP response"], "answer": 1}, {"prompt": "How should you test code that depends on Prisma?", "options": ["Mock every Prisma method chain", "Put Prisma behind a small repository interface: fake it in unit tests, and use a real test database in integration tests", "Do not test it"], "answer": 1}, {"prompt": "Why inject `now()` instead of mocking `Date` globally?", "options": ["Global mocks can leak between tests and hide dependencies. Injection makes the dependency explicit and local", "Date cannot be mocked", "It is required by Vitest"], "answer": 0}]
---
# Quiz: What to Mock (and What Not To)

Mocks replace real collaborators so a test is fast and deterministic. **Overusing** them makes tests brittle and blind:

| Mock it ✅ | Prefer the real thing ✅ |
|-----------|--------------------------|
| Network calls (payment, email, third-party APIs) | Your own pure functions |
| Time (`Date.now`) and randomness | Simple value objects |
| Slow or non-deterministic I/O | The database, in integration tests (a test DB) |

Smells:
- **Mocking what you're testing**, so the test only checks the mock.
- **Asserting on every call** (`toHaveBeenCalledWith` for every internal step). That freezes the implementation, so every refactor breaks the tests.
- **Mocking types you don't own** in deep detail, like Prisma's whole query builder. Wrap them in your own small interface (a repository) and mock that.

Prefer **fakes** (simple working implementations, like an in-memory repo) over strict mocks when you can.
