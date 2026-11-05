---
slug: "testing-test-pyramid-2"
title: "Testing Drill: Which kind of test? #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"Which test is the best fit to check that **a button is disabled while a form is submitting**?","options":["Component test (Testing Library, mocked API)","Unit test","End-to-end test (Playwright)","Integration test (Supertest + test database)"],"answer":0},{"prompt":"Which test is the best fit to check that **a SQL query returns todos for the current user only**?","options":["End-to-end test (Playwright)","Component test (Testing Library, mocked API)","Integration test (Supertest + test database)","Unit test"],"answer":2},{"prompt":"Which test is the best fit to check that **a Zod schema rejects an email without @**?","options":["Unit test","Component test (Testing Library, mocked API)","End-to-end test (Playwright)","Integration test (Supertest + test database)"],"answer":0},{"prompt":"Which test is the best fit to check that **a price-formatting function rounds half-cents correctly**?","options":["Component test (Testing Library, mocked API)","End-to-end test (Playwright)","Integration test (Supertest + test database)","Unit test"],"answer":3},{"prompt":"Which test is the best fit to check that **POST /api/todos without a session returns 401**?","options":["End-to-end test (Playwright)","Unit test","Component test (Testing Library, mocked API)","Integration test (Supertest + test database)"],"answer":3}]
---
# Testing Drill: Which kind of test? #2

**Unit tests** check one function or component in isolation (fast, many). **Integration tests** check pieces working together, like route + database (fewer). **End-to-end tests** drive a real browser through a critical journey (fewest, slowest). Put each check at the cheapest level that can catch the bug.
