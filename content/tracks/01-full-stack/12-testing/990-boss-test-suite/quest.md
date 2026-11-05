---
slug: testing-boss-test-suite
title: "Project: A Real Test Suite"
type: project
xp: 120
boss: true
requirements:
  - "Vitest configured for both the API and the web app, with a root `npm test` that runs everything"
  - "Unit tests for your validators, services (with an in-memory or fake repository) and reducers"
  - "API integration tests with Supertest against a dedicated test database, reset between tests"
  - "Tests for the auth flows and for ownership checks (another user's record returns 404)"
  - "At least 3 React component tests with React Testing Library, querying by role/label/text"
  - "At least one Playwright end-to-end test for your most important user journey (e.g. sign up → create item → see it in the list)"
  - "A GitHub Actions workflow that runs typecheck + tests on every push, with a Postgres service container"
---
# Project: A Real Test Suite

Make your capstone app safe to change.

## React Testing Library

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('adds a todo', async () => {
  const onAdd = vi.fn();
  render(<TodoForm onAdd={onAdd} />);
  await userEvent.type(screen.getByLabelText('New todo'), 'Write tests');
  await userEvent.click(screen.getByRole('button', { name: 'Add' }));
  expect(onAdd).toHaveBeenCalledWith('Write tests');
});
```

Querying by role and label tests your app the way users (and screen readers) see it. As a bonus, it catches accessibility bugs.

## CI with GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env: { POSTGRES_USER: test, POSTGRES_PASSWORD: test, POSTGRES_DB: test }
        ports: ["5432:5432"]
        options: --health-cmd pg_isready --health-interval 5s --health-retries 10
    env:
      DATABASE_URL: postgresql://test:test@localhost:5432/test
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npx prisma migrate deploy
      - run: npm run typecheck && npm test
```

A green checkmark on every PR is the habit that separates hobby projects from professional ones.

Submit your repository URL when you're done.
