---
slug: "ae04-verify-17"
title: "Agent Drill: Which check catches it? #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Which check is most likely to catch this? **`label` is sometimes undefined but the code calls `.toLowerCase()` on it**","options":["TypeScript strict mode (and a unit test for the missing case)","An integration test that requests another user's record and expects 404","Reading the diff of the test files","Running the app at phone width (or a Playwright check)"],"answer":0},{"prompt":"Which check is most likely to catch this? **a rounding bug in the movie total calculation**","options":["TypeScript strict mode (and a unit test for the missing case)","Reading the diff of the test files","An integration test that requests another user's record and expects 404","A unit test with boundary values"],"answer":3},{"prompt":"Which check is most likely to catch this? **the agent changed an assertion in `ticket.test.ts` from 15 to 16 so it passes**","options":["An integration test that requests another user's record and expects 404","Reading the diff of the test files","TypeScript strict mode (and a unit test for the missing case)","Running the app at phone width (or a Playwright check)"],"answer":1},{"prompt":"Which check is most likely to catch this? **a rounding bug in the course total calculation**","options":["TypeScript strict mode (and a unit test for the missing case)","Reading the diff of the test files","An integration test that requests another user's record and expects 404","A unit test with boundary values"],"answer":3},{"prompt":"Which check is most likely to catch this? **a rounding bug in the city total calculation**","options":["An integration test that requests another user's record and expects 404","A unit test with boundary values","Reading the diff of the test files","TypeScript strict mode (and a unit test for the missing case)"],"answer":1}]
---
# Agent Drill: Which check catches it? #17

Match the verification to the risk. Types catch shape errors, unit tests catch logic errors, integration tests catch wiring and authorization errors, running the app catches UX problems, and **reading the diff** catches what nothing else does (scope creep, weakened tests, secrets).
