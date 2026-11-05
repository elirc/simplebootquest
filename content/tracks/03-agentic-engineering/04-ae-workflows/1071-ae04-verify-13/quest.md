---
slug: "ae04-verify-13"
title: "Agent Drill: Which check catches it? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Which check is most likely to catch this? **the orders page shows a blank screen on a phone**","options":["Reading the diff of the test files","TypeScript strict mode (and a unit test for the missing case)","An integration test that requests another user's record and expects 404","Running the app at phone width (or a Playwright check)"],"answer":3},{"prompt":"Which check is most likely to catch this? **a rounding bug in the repo total calculation**","options":["A unit test with boundary values","An integration test that requests another user's record and expects 404","TypeScript strict mode (and a unit test for the missing case)","Reading the diff of the test files"],"answer":0},{"prompt":"Which check is most likely to catch this? **the agent changed an assertion in `workout.test.ts` from 15 to 16 so it passes**","options":["Running the app at phone width (or a Playwright check)","TypeScript strict mode (and a unit test for the missing case)","Reading the diff of the test files","An integration test that requests another user's record and expects 404"],"answer":2},{"prompt":"Which check is most likely to catch this? **`subject` is sometimes undefined but the code calls `.toLowerCase()` on it**","options":["An integration test that requests another user's record and expects 404","Running the app at phone width (or a Playwright check)","Reading the diff of the test files","TypeScript strict mode (and a unit test for the missing case)"],"answer":3},{"prompt":"Which check is most likely to catch this? **a route returns another user's order when you change the id in the URL**","options":["Running the app at phone width (or a Playwright check)","Reading the diff of the test files","TypeScript strict mode (and a unit test for the missing case)","An integration test that requests another user's record and expects 404"],"answer":3}]
---
# Agent Drill: Which check catches it? #13

Match the verification to the risk. Types catch shape errors, unit tests catch logic errors, integration tests catch wiring and authorization errors, running the app catches UX problems, and **reading the diff** catches what nothing else does (scope creep, weakened tests, secrets).
