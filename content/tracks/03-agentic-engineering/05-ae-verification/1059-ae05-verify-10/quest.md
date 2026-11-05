---
slug: "ae05-verify-10"
title: "Agent Drill: Which check catches it? #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Agentic Engineering Drills"
questions: [{"prompt":"Which check is most likely to catch this? **a rounding bug in the city total calculation**","options":["TypeScript strict mode (and a unit test for the missing case)","A unit test with boundary values","Reading the diff of the test files","An integration test that requests another user's record and expects 404"],"answer":1},{"prompt":"Which check is most likely to catch this? **the cities page shows a blank screen on a phone**","options":["An integration test that requests another user's record and expects 404","Running the app at phone width (or a Playwright check)","Reading the diff of the test files","TypeScript strict mode (and a unit test for the missing case)"],"answer":1},{"prompt":"Which check is most likely to catch this? **a route returns another user's recipe when you change the id in the URL**","options":["TypeScript strict mode (and a unit test for the missing case)","Running the app at phone width (or a Playwright check)","Reading the diff of the test files","An integration test that requests another user's record and expects 404"],"answer":3},{"prompt":"Which check is most likely to catch this? **the agent changed an assertion in `task.test.ts` from 15 to 16 so it passes**","options":["TypeScript strict mode (and a unit test for the missing case)","Running the app at phone width (or a Playwright check)","Reading the diff of the test files","An integration test that requests another user's record and expects 404"],"answer":2},{"prompt":"Which check is most likely to catch this? **a rounding bug in the task total calculation**","options":["TypeScript strict mode (and a unit test for the missing case)","Reading the diff of the test files","An integration test that requests another user's record and expects 404","A unit test with boundary values"],"answer":3}]
---
# Agent Drill: Which check catches it? #10

Match the verification to the risk. Types catch shape errors, unit tests catch logic errors, integration tests catch wiring and authorization errors, running the app catches UX problems, and **reading the diff** catches what nothing else does (scope creep, weakened tests, secrets).
