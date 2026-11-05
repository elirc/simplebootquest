---
slug: "testing-test-pyramid-1"
title: "Testing Drill: Which kind of test? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"Which test is the best fit to check that **a reducer handles every action without mutating state**?","options":["Unit test","Component test (Testing Library, mocked API)","End-to-end test (Playwright)","Integration test (Supertest + test database)"],"answer":0},{"prompt":"Which test is the best fit to check that **the login form shows an error message when the API returns 401**?","options":["Unit test","End-to-end test (Playwright)","Integration test (Supertest + test database)","Component test (Testing Library, mocked API)"],"answer":3},{"prompt":"Which test is the best fit to check that **a new user can sign up, create a todo and see it after reload**?","options":["Component test (Testing Library, mocked API)","Integration test (Supertest + test database)","End-to-end test (Playwright)","Unit test"],"answer":2},{"prompt":"Which test is the best fit to check that **a Prisma unique-constraint violation becomes a 409 response**?","options":["Unit test","Component test (Testing Library, mocked API)","End-to-end test (Playwright)","Integration test (Supertest + test database)"],"answer":3},{"prompt":"Which test is the best fit to check that **the production build loads and the home page renders after deploy**?","options":["Smoke / end-to-end test","Unit test","End-to-end test (Playwright)","Integration test (Supertest + test database)"],"answer":0}]
---
# Testing Drill: Which kind of test? #1

**Unit tests** check one function or component in isolation (fast, many). **Integration tests** check pieces working together, like route + database (fewer). **End-to-end tests** drive a real browser through a critical journey (fewest, slowest). Put each check at the cheapest level that can catch the bug.
