---
slug: "test-q-e2e"
title: "Quiz: End-to-End Tests"
type: "quiz"
xp: 15
resources: [{"title": "Playwright: Best practices", "url": "https://playwright.dev/docs/best-practices"}]
questions: [{"prompt": "What belongs in an E2E test?", "options": ["Every validation message", "A critical journey such as signup → create todo → log out", "Unit-level math"], "answer": 1}, {"prompt": "A test does `await page.waitForTimeout(3000)` before clicking. What is better?", "options": ["A longer timeout", "An auto-waiting locator or assertion, e.g. `await expect(page.getByRole(\"button\", { name: \"Save\" })).toBeEnabled()`", "Retrying the whole suite"], "answer": 1}, {"prompt": "Why select by role and name rather than `.btn-primary`?", "options": ["It is shorter", "It matches how users and assistive tech find elements, and survives styling changes", "CSS selectors are not allowed"], "answer": 1}, {"prompt": "How should E2E tests get their starting data?", "options": ["Click through the UI to create it every time", "Seed it through the API or a database script before the test", "Share data between tests"], "answer": 1}, {"prompt": "Roughly how should the test suite be shaped?", "options": ["Mostly E2E tests", "Many fast unit tests, fewer integration tests, and a handful of E2E tests", "Only manual testing"], "answer": 1}]
---
# Quiz: End-to-End Tests

**E2E tests** drive a real browser against the running app: log in, create a todo, see it in the list. Tools: **Playwright** or Cypress.

They catch problems nothing else does (CORS, cookies, routing, build config), but they're the slowest and flakiest layer. Keep them few and focused on **critical user journeys**.

Making them reliable:
- Select elements by **role and accessible name**: `page.getByRole('button', { name: 'Save' })`, not CSS classes.
- **Auto-waiting** assertions (`await expect(locator).toBeVisible()`) instead of `sleep(2000)`.
- Seed data through the API or the database, not by clicking through ten screens.
- Run each test in a fresh browser context, so cookies and storage are isolated.
